const app = Vue.createApp({
    data () {
        return {
            inputTask: '',
            toggle: true,
            tasks: ['test'],
        }
    },
    computed: {
        hideShowList() {
            return this.toggle ? "Hide" : "Show"
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask)
        },
        toggleList() {
            this.toggle = !this.toggle
        }
    }
})

app.mount('#assignment')