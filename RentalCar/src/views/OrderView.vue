<script setup>
import {ref,onMounted,reactive} from "vue"
import { collection, query, where, getDocs, onSnapshot, doc, getDoc, getCountFromServer,orderBy } from "firebase/firestore"
import db from "../firebase/init.js"
import { async } from '@firebase/util'
import doc3 from "../components/Doc3.vue";
import { useRoute } from "vue-router";

const orderList = ref([])
const state = reactive({showAgg:false,qryId:1})
const title=ref("")
const route = useRoute();

async function getOrders() {
  const ordersRef = collection(db, "orderOfCars")
  const querySnap = query(ordersRef, orderBy("order"))
  const unsubscribe = onSnapshot(querySnap, (qrySnapshot) => {
    orderList.value = []
    qrySnapshot.forEach((doc3) => {
      let data = doc3.data()
      data.id = doc3.id
      orderList.value.push(data)
    
    })
  })
  console.log(orderList.value)
}


onMounted(() => {
  getOrders() 
})
</script>

<template>
  
  <doc3 :title="title" :data="orderList"/>
</template>

<style scoped>

</style>