// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  devtools: { enabled: true },
  devServer: {
    port: 3000
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/HearthLogoIconRounded.png' }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts'
  ]
})