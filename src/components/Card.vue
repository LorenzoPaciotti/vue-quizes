<script setup>

import {defineProps} from "vue"

const {quiz} = defineProps(["quiz"])
//equiv to const quiz = props.quiz

</script>


<template>
    <div class="card">
        <img :src="quiz.img"></img>
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }}</p>
        </div>
    </div>
</template>

<style scoped>

.card{
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow:1px;
    margin-bottom: 35px;
    margin-right:20px;
    cursor:pointer;
  }

  .card img{
    width:100%;
    height:190px;
    margin:0;
  }

  .card .card-text{
    font-weight: bold;
  }

</style>