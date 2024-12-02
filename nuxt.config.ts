// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  icon: {
    provider: "iconify",
    serverBundle: false,
    clientBundle: { scan: true },
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
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/main.scss"],
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-11-30",
});
