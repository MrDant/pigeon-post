// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  components: true,
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: [], // Plugins Markdown si nécessaire
      rehypePlugins: [], // Plugins HTML
      // Autorise les composants dans le Markdown
      components: true,
    },
  },
  modules: ["@nuxt/content", "@nuxt/ui"],
  css: ["~/assets/main.scss"],
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-11-30",
});
