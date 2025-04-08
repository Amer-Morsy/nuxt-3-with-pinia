// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=VT323&display=swap'
        },

      ],
    }
  }
})
