<script setup>

  import q from "./data/quizes.json"

  import {ref,watch} from "vue"

  const quizes = ref(q)
  const search = ref("")

  watch(search,()=>{
    quizes.value = q.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase()) )
  })

</script>


<template>
  <div class="container">
    <header>
      <h1>quiz</h1>
      <input v-model.trim="search" type="text" placeholder="cerca..."></input>  
    </header>
    <div class="options-container">
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
        <div class="div card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{ quiz.questions.length }} conta</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .container{
    max-width:1000px;
    margin-top:30px;
    display: flex;
    align-items: center;
  }

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