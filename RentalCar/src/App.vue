<script setup>

import { RouterLink, RouterView,useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { query, collection, getDocs, onSnapshot } from 'firebase/firestore'
import db from './firebase/init.js'


const myRouter = useRouter();
// const goHomeView = () => myRouter.push({ name: "homeView" });
const goCarView = () => myRouter.push({ name: "carView" });
const goBranchView = () => myRouter.push({ name: "branchView" });
const goOrderView = () => myRouter.push({ name: "orderView" });
</script>

<template>
  <nav class="navbar navbar-light navbar-expand sticky-top text-muted bg-secondary d-flex flex-grow-1 align-self-end mx-auto navigation-clean" style="margin-bottom: -7px;">
        <div class="container">
          <a class="navbar-brand fs-4 fw-bolder" href="#">
            <strong><em>RentalCar</em>
            </strong></a>
            <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"></button>
            <div class="collapse navbar-collapse text-white-50" id="navcol-1">
              <ul class="navbar-nav ms-auto">
                    <!-- <li class="nav-item"><a class="nav-link" href="#" @click="goHomeView">HOME</a></li> -->
                    <li class="nav-item"><a class="nav-link" href="#" @click="goCarView">CARS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" @click="goBranchView">BRANCHES</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" @click="goOrderView">ORDERS</a></li>
                </ul> </div>
              
        </div>
    </nav>
    
    <div>
      <!-- <div class="hello">
      <h2>Welcome to RentalCar</h2>
      <h5>Select type to query</h5>
      </div> -->
        <router-view></router-view> 
  </div>
    
</template>

<style scoped>
/* .hello{
  text-align: center;
  padding-top: 100px;
} */

</style>
