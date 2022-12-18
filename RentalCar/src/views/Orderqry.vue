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
import doc3 from "../components/Doc3.vue";
const state = reactive({ showAgg: false, qryId: 1 });
const orderList = ref([]);
const title = ref("");
const aggData = ref(0);
const route = useRoute();

async function getQuery() {
  state.qryId = route.params.id;
  orderList.value = [];
  state.showAgg = false;
  let qry = null;
  let qry2 = null;
  if (state.qryId == 1) {
    title.value = "Order price between 50000 to 100000";
    const ordRef = collection(db, "orderOfCars");
    qry = query(ordRef,orderBy("order.totalPrice"),startAt(50000),endAt(100000));
  } else if (state.qryId == 2) {
    title.value = "Duration = 1";
    const ordRef = collection(db, "orderOfCars");
    qry = query(ordRef,where("order.duration","==","1 month"));
  } else if (state.qryId == 3) {
    title.value = "Duration = 3";
    const ordRef = collection(db, "orderOfCars");
    qry = query(ordRef,where("order.duration","==","3 month"));
  } else if (state.qryId == 4) {
    title.value = "Duration = 6";
    const ordRef = collection(db, "orderOfCars");
    qry = query(ordRef,where("order.duration","==","6 month"));
  } 
 const querySnap = await getDocs(qry);
    querySnap.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      orderList.value.push(data);
    });
}
watch(() => route.params.id, getQuery);
onMounted(() => {
  getQuery();
});
</script>
<template>
  <doc3 :title="title" :data="orderList"/>
</template>
<style></style>