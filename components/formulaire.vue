<template>
  <form @submit.prevent="generateLink" class="flex flex-col gap-2 py-2">
    <div class="flex gap-2 items-center py-2">
      <div>
        <p>Date de départ :</p>
        <flat-pickr v-model="form.start" :config="config" :disabled="true" />
      </div>
      <div>
        <p>Date d'arrivée :</p>
        <flat-pickr v-model="form.end" :config="config" />
      </div>
    </div>
    <UTextarea v-model="form.message" />
    <div class="self-center">
      <UButton type="confirm" label="Envoyer mon pigeon" />
    </div>
  </form>
</template>
<script setup>
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

const config = ref({
  enableTime: true,
  dateFormat: "Y-m-d H:i",
});

const form = reactive({ start: new Date(), end: null, message: "" });

function generateLink() {
  useRouter().push("/fly/" + compress(form));
}
</script>
