const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: ''
        }
    },
    methods: {
        setToDo(e) {
            this.todo = e.target.value;
        },
        increase1(step) {
            this.counter1 = this.counter1 + step
        },
        decrease1: function (step) {
            this.counter1 = this.counter1 - step
        }
    }
})
app.mount('#app')