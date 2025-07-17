<template>
    <div>
        <h1>元件1</h1>
        <h3>{{ course }} 價格是 {{ price }}</h3>
        <h3>{{ courseDisplayName }}</h3>
        <button @click="course.duration = course.duration + 7">加一天課</button>
        <button @click="extraDuration">用函數加一天課</button>
        <hr />
        <input placeholder="courseId" @input="setCourseId" />
        <input placeholder="courseFullName" @input="setCourseFullName" />
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
    setup() {
        const price = ref(24000)
        const courseId = ref("")
        const courseFullName = ref("")
        const courseDisplayName = function () {
            return courseId.value + '../..' + courseFullName.value
        }
        const course = reactive({ name: "POOP", duration: 35 })
        function extraDuration() {
            course.duration = course.duration + 7
            price.value += 5000
        }
        function setCourseId(e) {
            courseId.value = e.target.value
        }
        function setCourseFullName(e) {
            courseFullName.value = e.target.value
        }
        return { course, extraDuration, price, courseDisplayName, setCourseId, setCourseFullName }
    }
}
</script>

<style lang="scss" scoped></style>