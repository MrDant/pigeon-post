<template>
  <div class="text-center py-8">
    <UIcon name="i-fluent-color:checkmark-circle-48" class="text-4xl" />
    <h2>Avete ricevuto un messaggio !</h2>
    <div
      class="overflow-hidden font-bold text-xl relative transition-all duration-1000"
      :class="
        open ? ' scale-y-100 translate-y-0' : ' scale-y-0 translate-y-full'
      "
    >
      <i class="mb-3">"<slot></slot>"</i>
      <div
        class="absolute bottom-0 right-0 left-0 h-3"
        style="background: linear-gradient(to bottom, transparent, white)"
      ></div>
    </div>
    <UButton class="mt-2" color="blue" @click="open = true" v-if="!open">
      Aprire il messaggio
    </UButton>
  </div>
</template>
<script setup>
const open = ref(false);
</script>
