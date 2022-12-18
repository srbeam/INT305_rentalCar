<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
  getCountFromServer,
startAt,
endAt,
} from "firebase/firestore";
import db from "../firebase/init.js";
import { useRoute } from "vue-router";
import Doc from "../components/Doc.vue";
const state = reactive({ showAgg: false, qryId: 1 });
const carList = ref([])
const title = ref("");
const aggData = ref(0);
const route = useRoute();

async function getQuery() {
  state.qryId = route.params.id;
  carList.value = [];
  state.showAgg = false;
  let qry = null;
  let qry2 = null;
  if (state.qryId == 1) {
    title.value = "Cars that use E85";
    const carRef = collection(db, "cars");
    qry = query(carRef,where("fuel","array-contains","E85"));
  } else if (state.qryId == 2) {
    title.value = "Electric Cars";
    const carRef = collection(db, "cars");
    qry = query(carRef,where("fuel","array-contains","Electric"));
  } else if (state.qryId == 3) {
    title.value = "Diesel Cars";
    const carRef = collection(db, "cars");
    qry = query(carRef,where("fuel","array-contains","Diesel"));
  } else if (state.qryId == 4) {
    title.value = "Honda";
    const carRef = collection(db, "cars");
    qry = query(carRef,orderBy("name"),startAt("Honda"),endAt("Honda"+"\uf8ff"));
  }  else if (state.qryId == 5) {
    title.value = "Toyota";
    const carRef = collection(db, "cars");
    qry = query(carRef,orderBy("name"),startAt("Toyota"),endAt("Toyota"+"\uf8ff"));
  } 
 const querySnap = await getDocs(qry);
    querySnap.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      carList.value.push(data);
    });
}
watch(() => route.params.id, getQuery);
onMounted(() => {
  getQuery();
});
</script>
<template>
  <Doc :title="title" :data="carList"/>
</template>
<style></style>