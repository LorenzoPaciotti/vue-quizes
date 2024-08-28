<script setup>

import q from "@/data/quizes.json";

import { ref, computed } from "vue";
import {useRoute} from "vue-router"


const quizes = q;
const route = useRoute()


const quizId = parseInt(route.params.id);
const quiz = quizes.find(x => x.id === quizId)

console.log(quiz)


</script>

<template>

</template>

