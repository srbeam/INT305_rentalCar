<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    reqired: true,
  },
});
</script>

<template>
  <div class="header"></div>
   <div>
        <RouterLink class = 'query' to="/car-view/1">E85</RouterLink>
        <RouterLink class = 'query' to="/car-view/2">Electric</RouterLink>
        <RouterLink class = 'query' to="/car-view/3">Diesel</RouterLink>
        <RouterLink class = 'query' to="/car-view/4">Honda</RouterLink>
        <RouterLink class = 'query' to="/car-view/5">Toyota</RouterLink>
    </div>
    <div class="header"></div>
  <h2>{{ title }}</h2>
  <ol>
    <li v-for="(doc, index) in data" :key="doc.id">
      <div class="card">
      <div class="container">
      <span>{{ doc.name }}</span> 
      <div>{{doc.fuel}}</div>
      <!-- name: obj.name,
        category: obj.category,
        price: obj.price,
        keywords: obj.keywords, -->
      </div>
      </div>
    </li>
  </ol>
 
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