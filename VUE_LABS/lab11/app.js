const app = Vue.createApp({
    data() {
        return {
            courses: [
                { id: "POOP", name: "Python OOP", duration: 35 },
                { id: "BDPY", name: "Python and Big Data", duration: 35 }
            ],
            detailsVisible: true
        }
    },
    computed: {},
    methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible
        }
    }
})
app.component("course-content", {
    template: `
    <li>
        <h2>{{course.id}}</h2>
        <button @click="toggleCourseDetail">show detail</button>
        <ul v-if="detailsVisible">
            <li>{{course.name}}</li>
            <li>{{course.duration}}</li>
        </ul>
    </li>
    `, data() {
        return {
            detailsVisible: true,
            course: { id: "POOP", name: "Python OOP", duration: 35 }
        }
    }, methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible
        }
    }
})
app.mount('#app')