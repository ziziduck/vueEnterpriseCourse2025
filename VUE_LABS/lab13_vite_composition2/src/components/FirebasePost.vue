<template>
    <div>
        <h1>用firebase儲存資料</h1>
        <button @click="sendByFetch">儲存課程(use fetch)</button>
        <button @click="sendByAxios">儲存課程(use axios)</button>
        <button @click="getByFetch">取得課程列表(use fetch)</button>
        <ul>
            <li v-for="course in courses" :key="course.id">
                <p>{{ course.id }},{{ course.name }},{{ course.duration }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
// 換成自己的URL
const URL1 = "https://vuecourse-e11e3-default-rtdb.firebaseio.com/courses.json"
import axios from 'axios'
export default {
    data() {
        return {
            course: { id: "BDPY", name: "Python and bih data", duration: 35 },
            courses: []
        }
    },
    methods: {
        sendByFetch() {
            fetch(URL1, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.course)
            }).then(response => {
                console.log("response=", response)
                if (response.ok) {
                    return response.json()
                }
            }).then(data =>
                console.log("get result=", data)
            )
        },
        sendByAxios() {
            axios.post(URL1, this.course)
                .then(result => {
                    console.log("axios response=", result)
                })
        },
        getByFetch() {
            this.courses = []
            fetch(URL1, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                console.log("response=", response)
                if (response.ok) {
                    return response.json()
                }
            }).then(data => {
                console.log("data=", data)
                for (const id in data) {
                    console.log(id)
                    this.courses.push(data[id])
                }
            })

        }
    }
}
</script>

<style lang="scss" scoped></style>