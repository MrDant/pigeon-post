import LZString from "lz-string";
import CryptoJS from "crypto-js";
const secretKey = "sdwlksldf";

export function compress(jsonObj) {
  const jsonString = JSON.stringify(jsonObj);
  const compressed = LZString.compressToBase64(jsonString);
  const encrypted = CryptoJS.AES.encrypt(compressed, secretKey).toString();

  // Encoder la chaîne cryptée en Base64URL (compatible URL)
  return encrypted.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decompress(encodedForUrl) {
  // Décryptage pour tester le retour
  const decodedFromUrl = encodedForUrl.replace(/-/g, "+").replace(/_/g, "/");
  const bytes = CryptoJS.AES.decrypt(decodedFromUrl, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  // Décompresser la chaîne
  const decompressed = LZString.decompressFromBase64(decrypted);

  return JSON.parse(decompressed);
}
