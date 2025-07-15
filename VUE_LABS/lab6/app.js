const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: 'expeceted to...',
            urgent: '',
            checkedUrgent: '',
            counter2: 666
        }
    },
    methods: {
        setUrgent(e) {
            this.urgent = e.target.value
        },
        commitUrgent() {
            this.checkedUrgent = this.urgent
        },
        submitForm(e) {
            // toggle this to show difference
            e.preventDefault()
            alert('表單提交了!')
        },
        submitForm2(e) {
            // no preventDefault() here
            alert('表單2也提交了!')
        },
        setToDo(e, prefix) {
            this.todo = `${prefix} ${e.target.value}`;
        },
        increase1(step) {
            this.counter1 = this.counter1 + step
        },
        decrease1: function (step) {
            this.counter1 = this.counter1 - step
        },
        increase2(s) {
            this.counter2 = this.counter2 + s
        },
        decrease2(s) {
            this.counter2 = this.counter2 - s
        }
    }
})
app.mount('#app')