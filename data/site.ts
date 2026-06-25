export const siteConfig = {
  name: 'Aditya Jha',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://adityajha-portfolio-ten.vercel.app',
  role: 'ML Engineer & Full Stack Developer',
  tagline: 'I build systems that find signal in noise.',
  narrative:
    'I build systems that find signal in noise. Football matches. Iron ore operations. Financial markets. The domain changes. The problem is always the same.',
  email: 'adityajha1606@gmail.com',
  calUrl: 'https://cal.com/aditya-jha/30min',
} as const;