<template>
    <div>
        <h1>composition API的生命周期</h1>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup() {
        console.log("元件初始化")
        onMounted(()=>{
            console.log("composition api掛載之後")
        })
        return {}
    }
}
</script>

<style lang="scss" scoped></style>