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
        <RouterLink class = 'query' to="/order-view/1">Order By price</RouterLink>
        <RouterLink class = 'query' to="/order-view/2">Duration:1</RouterLink>
        <RouterLink class = 'query' to="/order-view/3">Duration:3</RouterLink>
        <RouterLink class = 'query' to="/order-view/4">Duration:6</RouterLink>
    </div>
    <div class="header"></div>
  <h2>{{ title }}</h2>
  <ol>
    <li v-for="(doc3, index) in data" :key="doc3.id">
      <div class="card">
      <div class="container">
      <span>Car: {{ doc3.order.carName }}</span> 
      <span>duration: {{ doc3.order.duration }}</span> 
      <span>totalPrice: {{ doc3.order.totalPrice }}</span> 
      <div>Date: {{doc3.orderDate.toDate()}}</div>
      <div>PickupStatus: {{doc3.pickupStatus}}</div>
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