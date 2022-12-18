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
import doc2 from "../components/Doc2.vue";
const state = reactive({ showAgg: false, qryId: 1 });
const branchList = ref([])
const title = ref("");
const aggData = ref(0);
const route = useRoute();

async function getQuery() {
  state.qryId = route.params.id;
  branchList.value = [];
  state.showAgg = false;
  let qry = null;
  let qry2 = null;
  if (state.qryId == 1) {
    title.value = "Bangkok";
    const brRef = collection(db, "branches");
    qry = query(brRef,where("province","==","Bangkok"));
  } else if (state.qryId == 2) {
    title.value = "Krabi";
    const brRef = collection(db, "branches");
    qry = query(brRef,where("province","==","Krabi"));
  } else if (state.qryId == 3) {
    title.value = "Most Orders";
    const brRef = collection(db, "branches");
    qry = query(brRef,orderBy("numOfOrder","desc"),limit(1));
  } 
 const querySnap = await getDocs(qry);
    querySnap.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      branchList.value.push(data);
    });
}
watch(() => route.params.id, getQuery);
onMounted(() => {
  getQuery();
});
</script>
<template>
  <doc2 :title="title" :data="branchList"/>
</template>
<style></style>