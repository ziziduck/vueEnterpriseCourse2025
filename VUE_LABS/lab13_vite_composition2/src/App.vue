<script setup>
import MyComp1 from './components/MyComp1.vue';
import MyComposition2 from './components/MyComposition2.vue';
import MyOptions2 from './components/MyOptions2.vue';
import {ref} from 'vue'
const toggleOptions2 = ref(true)
const toggleComposition2 = ref(true)

</script>

<template>
  <h1>Composition Lab2</h1>
  <br />
  <MyComp1></MyComp1>
  <br/>
  <MyOptions2></MyOptions2>
  <br/>
  <MyComposition2></MyComposition2>
</template>

<style scoped></style>