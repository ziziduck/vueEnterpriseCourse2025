<template>
    <h1 v-if="isLoading === true">Loading...</h1>
    <div v-else>
        <h1>用firebase儲存資料</h1>
        <button @click="sendByFetch">儲存課程(use fetch)</button>
        <button @click="sendByAxios">儲存課程(use axios)</button>
        <button @click="getByFetch">取得課程列表(use fetch)</button>
        <button @click="getByAxios">取得課程列表(use axios)</button>
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
    mounted() {
        //this.getByFetch()
        this.getByAxios()
    },
    data() {
        return {
            course: { id: "BDPY", name: "Python and bih data", duration: 35 },
            courses: [],
            isLoading: false
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

        },
        getByAxios() {
            this.courses = []
            this.isLoading = true
            axios.get(URL1).then(result => {
                console.log("axios get result=", result)
                if (result.data) {
                    for (const id in result.data) {
                        console.log('id=', id)
                        this.courses.push(result.data[id])
                    }
                    this.isLoading = false
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>