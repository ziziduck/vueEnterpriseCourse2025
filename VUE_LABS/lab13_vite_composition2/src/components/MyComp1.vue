<template>
    <div>
        <h1>元件1</h1>
        <h3>{{ course }} 價格是 {{ price }}</h3>
        <h3>{{ courseDisplayName }}</h3>
        <button @click="course.duration = course.duration + 7">加一天課</button>
        <button @click="extraDuration">用函數加一天課</button>
        <hr />
        <input placeholder="courseId" v-model="courseId" />
        <input placeholder="courseFullName" v-model="courseFullName" />
    </div>
</template>

<script>
import { reactive, ref, computed, watch } from 'vue'
export default {
    setup() {
        const price = ref(24000)
        const courseId = ref("")
        const courseFullName = ref("")
        const courseDisplayName = computed(function () {
            // console.log(".")
            return courseId.value + '../..' + courseFullName.value
        })
        const course = reactive({ name: "POOP", duration: 35 })
        function extraDuration() {
            course.duration = course.duration + 7
            price.value += 5000
        }
        watch(price, function (newValue, oldValue) {
            console.log(`price goes from ${oldValue} to ${newValue}`)
        })
        // function setCourseId(e) {
        //     courseId.value = e.target.value
        // }
        // function setCourseFullName(e) {
        //     courseFullName.value = e.target.value
        // }
        return {
            course, extraDuration, price, courseDisplayName,
            courseId, courseFullName
        }
    }
}
</script>

<style lang="scss" scoped></style>