const app = Vue.createApp({
    data() {
        return {
            courses: ['poop', 'bdpy', 'pykt', 'aiocv', 'aipy'],
            courseContent: ''
        }
    },
    computed: {},
    methods: {
        addCourse() {
            this.courses.push(this.courseContent)
            this.courseContent = ''
        },
        removeCourse(index) {
            this.courses.splice(index, 1)
        }
    }
})
app.mount('#app')