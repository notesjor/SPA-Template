import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

const storageKey = 'counter';

function getStoredCount() {
  const storedCount = Number(localStorage.getItem(storageKey));

  return Number.isFinite(storedCount) && storedCount >= 0 ? storedCount : 0;
}

export const useCounterStore = defineStore('counter', () => {
  const count = ref(getStoredCount());

  watch(count, (value) => {
    localStorage.setItem(storageKey, String(value));
  });

  function increment() {
    count.value += 1;
  }

  return { count, increment };
});