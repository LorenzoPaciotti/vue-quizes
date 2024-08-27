<script setup>

import {ref,watch} from "vue"

  import q from "./data/quizes.json"

    import Card from "./components/Card.vue"

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
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
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



</style>