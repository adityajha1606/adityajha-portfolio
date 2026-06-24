import { z } from 'zod';

const envSchema = z.object({
  WEB3FORMS_ACCESS_KEY: z
    .string()
    .min(1, 'WEB3FORMS_ACCESS_KEY is required.'),
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url('NEXT_PUBLIC_SITE_URL must be a valid URL (e.g. https://adityajha1606.github.io).'),
});

function parseEnv() {
  const result = envSchema.safeParse({
    WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  });

  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  • ${i.path.join('.')}: ${i.message}`)
      .join('\n');
    throw new Error(
      `❌ Environment variable validation failed:\n${issues}\n\nCheck your .env.local file.`
    );
  }

  return result.data;
}

export const env = parseEnv();