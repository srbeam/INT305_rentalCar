<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Number,
    reqired: true,
  },
});
</script>

<template>
  <div class="header"></div>

  
  <RouterLink class = 'query' to="/branch-view/1">Bangkok</RouterLink>
  <RouterLink class = 'query' to="/branch-view/2">Krabi</RouterLink>
  <RouterLink class = 'query' to="/branch-view/3">Most Orders</RouterLink>
  <div class="header"></div>
  <h2>{{ title }}</h2>
  <ul v-for="(doc2, index) in data" :key="doc2.id">
      <!-- <div class="card"> -->
      <!-- <div class="container"> -->
  
      <div><tbody>Location:</tbody>{{ doc2.location }}</div> 
      <div>{{doc2.province}}</div>
      <div>Orders:{{doc2.numOfOrder}}</div>
      <div><p>----------------</p></div>
     
    </ul>

</template>


<style scoped>
.header{
  margin-top: 20px;
}
.query{
  background-color: rgb(37, 35, 35);
  color: beige;
  text-align: center;
  margin: 10px;
  /* border-style: groove; */
  border-radius: 5px;
  padding: 5px;
}
</style>