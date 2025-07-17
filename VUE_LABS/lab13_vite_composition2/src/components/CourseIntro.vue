<template>
    <div>
        <h3>Course:{{ course }}</h3>
        <h3>Price:{{ price }}</h3>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ["courseId", "courseFullName", "price"],
    setup(props) {
        const course = computed(function () {
            if (props.courseFullName) {
                return `[${props.courseId}]-->${props.courseFullName}`
            } else {
                return `${props.courseId}`
            }
        })

        return { course }
    }
}
</script>

<style lang="scss" scoped></style>