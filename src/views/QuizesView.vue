<script setup>
import Card from "@/components/Card.vue";

import { ref, watch } from "vue";

import q from "@/data/quizes.json";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((x) =>
    x.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>


<template>
<header>
    <h1>quiz</h1>
    <input v-model.trim="search" type="text" placeholder="cerca..."></input>  
  </header>
  <div class="options-container">
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
  </div>

</template>

<style scoped>

</style>