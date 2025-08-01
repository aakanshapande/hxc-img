module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'es', 'fr', 'de','ar','it'],
     localeDetection: false,
  },
  fallbackLng: 'en',
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  ns: ['common'],
  defaultNS: 'common',

  interpolation: {
    escapeValue: false,
  },
}