/**
 * In-memory sliding window rate limiter.
 *
 * NOTE: Works correctly on a single Node.js instance. On Vercel serverless,
 * multiple instances may run concurrently — a determined bot could bypass
 * by hitting different instances. Primary protection remains the honeypot
 * and origin check. Upgrade to @upstash/ratelimit (Redis-backed) when needed.
 */

const store = new Map<string, number[]>();

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
}

export function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;

  const timestamps = (store.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= maxRequests) {
    store.set(key, timestamps);
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  store.set(key, timestamps);

  return {
    allowed: true,
    remaining: maxRequests - timestamps.length,
  };
}