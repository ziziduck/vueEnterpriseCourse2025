var vue = new Vue({
    el: '#myapp',
    data() {
        return {
            plans: [],
            value: ''
        }
    },
    methods: {
        addPlan() {
            this.plans.push(this.value)
            this.value = ""
        }
    }
})
