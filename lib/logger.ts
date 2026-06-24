import pino from 'pino';

const REDACTED_PATHS = [
  'email',
  'message',
  'token',
  'authorization',
  'cookie',
  'password',
  '*.email',
  '*.message',
  '*.token',
  '*.authorization',
  '*.cookie',
  '*.password',
];

const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  redact: {
    paths: REDACTED_PATHS,
    censor: '[REDACTED]',
  },
  ...(process.env.NODE_ENV !== 'production' && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  }),
});

export { logger };