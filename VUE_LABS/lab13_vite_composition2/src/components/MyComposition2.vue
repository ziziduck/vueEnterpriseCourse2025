<template>
    <div>
        <h1>composition API的生命周期</h1>
    </div>
</template>

<script>
import { onBeforeUnmount, onMounted } from 'vue';

export default {
    setup() {
        console.log("元件初始化")
        onMounted(()=>{
            console.log("composition api掛載之後")
        })
        onBeforeUnmount(()=>{
            console.log("composition即將移除元件")
        })
        return {}
    }
}
</script>

<style lang="scss" scoped></style>