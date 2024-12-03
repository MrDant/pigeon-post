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
  modules: ["@nuxt/content", "@nuxt/ui"],
  css: ["~/assets/main.scss"],
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-11-30",
  image: { domains: ["piccione.divertydev.com"] },
  app: {
    head: {
      title: "Piccone",
      meta: [
        {
          name: "description",
          content:
            "Bienvenue sur mon site. Découvrez notre fonctionnalité unique de messages via pigeon voyageur numérique !",
        },
      ],
    },
  },
});
