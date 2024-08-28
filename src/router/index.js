/*
@ by default starts at src/, so fi you end up moving things around or scaling up, 
you're less likely to need to go to each view/component and update paths*/

import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "@/views/QuizesView.vue";
import QuizView from "@/views/QuizView.vue";

const routes = [
  {
    path: "/",
    name: "Quizes",
    component: QuizesView,
  },
  {
    path: "/quiz/:id",
    name: "Quiz",
    component: QuizView
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
