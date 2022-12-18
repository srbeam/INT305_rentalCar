<script setup>
import {ref,onMounted} from "vue"
import { collection, query, where, getDocs, onSnapshot, doc, getDoc, getCountFromServer,orderBy } from "firebase/firestore"
import db from "../firebase/init.js"
import { async } from '@firebase/util'
import doc2 from "../components/Doc2.vue";

const branchList = ref([])


async function getBranches() {
  const branchesRef = collection(db, "branches")
  const querySnap = query(branchesRef, orderBy("location"))
  const unsubscribe = onSnapshot(querySnap, (qrySnapshot) => {
    branchList.value = []
    qrySnapshot.forEach((doc2) => {
      let data = doc2.data()
      data.id = doc2.id
      branchList.value.push(data)
      
    })
  })
  console.log(branchList.value)
}


onMounted(() => {
  getBranches() 
})
</script>

<template>
  
  <doc2 :title="title" :data="branchList"/>
</template>

<style scoped>

</style>