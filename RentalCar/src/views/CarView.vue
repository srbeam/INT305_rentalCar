<script setup>
import {ref,onMounted} from "vue"
import { collection, query, where, getDocs, onSnapshot, doc, getDoc, getCountFromServer,orderBy } from "firebase/firestore"
import db from "../firebase/init.js"
import { async } from '@firebase/util'
import Doc from "../components/Doc.vue";

const carList = ref([])


async function getCars() {
  const carsRef = collection(db, "cars")
  const querySnap = query(carsRef, orderBy("name"))
  const unsubscribe = onSnapshot(querySnap, (qrySnapshot) => {
    carList.value = []
    qrySnapshot.forEach((doc) => {
      let data = doc.data()
      data.id = doc.id
      carList.value.push(data)
      // room_filter.value.push(data)
    })
  })
  console.log(carList.value)
}


onMounted(() => {
  getCars() 
})
</script>

<template>
  
  
  <Doc :title="title" :data="carList"/>
</template>

<style scoped>

</style>