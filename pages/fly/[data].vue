<template>
  <div
    class="h-1 min-h-screen flex items-center flex-1 w-full justify-center"
    v-if="data.end"
  >
    <UCard class="shadow container mb-20">
      <template #header>
        <h1 class="text-center" v-if="diff == 100">
          Il vostro piccione è arrivato !
        </h1>
        <h1 class="text-center" v-else>Un piccione è in viaggio !</h1>
      </template>
      <div
        class="relative flex items-center gap-6 py-10 px-6 text-2xl text-slate-600"
      >
        <UIcon name="i-akar-icons-home-alt1" />
        <div class="border-b-4 border-dotted flex-1 relative">
          <img
            src="/pigeon.png"
            class="absolute w-20 -translate-x-1/2 top-1/2 -translate-y-1/2 pb-3"
            :style="{ left: diff + '%' }"
          />
        </div>
        <UIcon name="i-akar-icons-location" />
      </div>
      <template #footer>
        <div class="text-slate-600">
          <Message v-if="diff == 100">{{ data.message }}</Message>
          <div class="text-center text-slate-600" v-else>
            <div
              class="rounded-full border-2 p-4 inline-block text-3xl my-4"
              style="line-height: 0"
            >
              <UIcon name="i-eos-icons-hourglass" />
            </div>
            <p>Il vostro piccione arriverà tra :</p>
            <p>{{ time }}</p>
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>
<script setup>
import LZString from "lz-string";
import CryptoJS from "crypto-js";
const secretKey = "sdwlksldf";
// const data = useRoute().params.data;
// const [day, month, year] = dateString.split('-').map(Number);
// new Date(year, month - 1, day);

// const test = compress(data);
const data = computed(() => {
  const v = decompress(useRoute().params.data);
  v.start = new Date(v.start);
  v.end = new Date(v.end);
  return v;
});

const today = ref(new Date());

onMounted(() => {
  setInterval(() => (today.value = new Date()), 1000);
});
// Fonction pour ajouter un zéro devant un nombre si nécessaire
function padZero(num) {
  return num < 10 ? "0" + num : num;
}

const diff = computed(() => {
  if (data.value.end.getTime() <= today.value.getTime()) return 100;
  return Math.round(
    ((today.value - data.value.start) / (data.value.end - data.value.start)) *
      100
  );
});
const time = computed(() => {
  const timeDiff = data.value.end - today.value;

  if (timeDiff <= 0) {
    return "00:00:00:00"; // Si la date de fin est passée
  }

  // Calcul des jours, heures, minutes et secondes
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Formater et retourner le résultat
  return `${days ? days + "j" : ""} ${hours ? padZero(hours) + "h" : ""} ${
    minutes ? padZero(minutes) + "m" : ""
  } ${padZero(seconds)}s`;
});

const jsonObj = {
  start: new Date(2024, 10, 10),
  end: new Date(2024, 11, 2),
  message:
    "Buongiorno bella signorina,Purtroppo, non ho trovato un piccione viaggiatore d'oro, spero che mi perdonerai. Tuttavia, ora che abbiamo usato un piccione, possiamo passare all'email. Ecco la mia: mael.dantuono@gmail.com",
};

console.log(compress(jsonObj));

function compress(jsonObj) {
  const jsonString = JSON.stringify(jsonObj);
  const compressed = LZString.compressToBase64(jsonString);
  const encrypted = CryptoJS.AES.encrypt(compressed, secretKey).toString();

  // Encoder la chaîne cryptée en Base64URL (compatible URL)
  return encrypted.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decompress(encodedForUrl) {
  // Décryptage pour tester le retour
  const decodedFromUrl = encodedForUrl.replace(/-/g, "+").replace(/_/g, "/");
  const bytes = CryptoJS.AES.decrypt(decodedFromUrl, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  // Décompresser la chaîne
  const decompressed = LZString.decompressFromBase64(decrypted);

  return JSON.parse(decompressed);
}
</script>
