module.exports = {
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  pages: {
    '/': ['home'], // app/page.tsx
    '/[lang]': ['home'], // app/[lang]/page.tsx
  },
} 