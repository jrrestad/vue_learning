const app = Vue.createApp({
    data () {
        return {
            style: '',
            toggle: true,
            bgColor: '',
        }
    },
    computed: {
        assignClasses() {
            return this.style, {
                user1: this.style === 'user1',
                user2: this.style === 'user2',
                visible: this.toggle,
                hidden: !this.toggle
            }
        },
    },
    methods: {
        // userInput(e) {
        //     this.style = e.target.value
        // },
        toggleParagraph() {
            this.toggle = ! this.toggle
        }
    }
})

app.mount('#assignment')