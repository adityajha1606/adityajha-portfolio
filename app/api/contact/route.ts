import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation/contact';
import { checkRateLimit } from '@/lib/rateLimit';
import { logger } from '@/lib/logger';
import { env } from '@/lib/env';

const RATE_LIMIT_MAX    = 3;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const WEB3FORMS_URL     = 'https://api.web3forms.com/submit';

function getIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(request: Request): Promise<NextResponse> {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (body.hp_field) {
    logger.info('Honeypot triggered — silently discarding submission.');
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const origin = request.headers.get('origin') ?? '';
  if (origin !== env.NEXT_PUBLIC_SITE_URL) {
    logger.warn({ origin }, 'Origin mismatch — rejecting request.');
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }

  const ip = getIp(request);
  const rateLimit = checkRateLimit(ip, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW);

  if (!rateLimit.allowed) {
    logger.warn({ ip }, 'Rate limit exceeded.');
    return NextResponse.json(
      { error: 'Too many requests. Please wait before trying again.' },
      { status: 429 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ error: 'Validation failed.', errors }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;
  const sanitisedMessage = message.replace(/<[^>]*>/g, '');

  try {
    const web3Response = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        subject,
        message: sanitisedMessage,
      }),
    });

    if (web3Response.ok) {
      logger.info({ name, subject }, 'Contact form submission forwarded successfully.');
      return NextResponse.json(
        { success: true, message: "Message received. I'll respond within 48 hours." },
        { status: 200 }
      );
    }

    const errorBody = await web3Response.text();
    logger.error(
      { status: web3Response.status, body: errorBody },
      'Web3Forms returned a non-ok response.'
    );
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  } catch (err) {
    logger.error({ err }, 'Unexpected error in contact route.');
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}