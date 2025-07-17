<template>
  <div>
    <h3>{{ userName }}</h3>
    <!-- <CompositionComponent1></CompositionComponent1> -->
    <composition-component1></composition-component1>
    <hr/>
    <CompositionComponent2></CompositionComponent2>
    <composition-component2></composition-component2>
    <hr/>
    <CompositionComponent3></CompositionComponent3>
    <hr/>
    <composition-component4></composition-component4>
  </div>
</template>

<script>
import CompositionComponent1 from './components/CompositionComponent1.vue';
import CompositionComponent2 from './components/CompositionComponent2.vue';
import CompositionComponent3 from './components/CompositionComponent3.vue';
import CompositionComponent4 from './components/CompositionComponent4.vue'
export default {
  //components:{CompositionComponent1},
  components: {
    "composition-component1": CompositionComponent1,
    CompositionComponent2,
    CompositionComponent3,
    CompositionComponent4
  },
  data() {
    return {
      userName: "Mark Ho"
    }
  }
}
</script>

<style lang="scss" scoped></style>