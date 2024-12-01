import Formulaire from "~/components/formulaire.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Formulaire", Formulaire);
});
