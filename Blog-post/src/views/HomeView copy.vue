<template>
  <div>
    <input type="text" v-model="search" />
    <p>Searched query {{ search }}</p>
    <p v-for="name in filterednames" :key="name">{{ name }}</p>
    <button @click="stophandle">stop warching</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const filterednames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    const names = ref([
      "Mahantesh",
      "nakati",
      "bangalore",
      "india",
      "Narendra",
      "modi",
    ]);

    const stopwach = watch(search, () => {
      console.log("Watch is running", search.value);
    });

    const stopEffect = watchEffect(() => {
      console.log("Warch effect ", search.value);
    });

    const stophandle = () => {
      stopwach();
      stopEffect();
    };
    return { search, names, filterednames, stophandle };
  },
};
</script>
