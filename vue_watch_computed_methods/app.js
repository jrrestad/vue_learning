const app = Vue.createApp({
    data () {
        return {
            number: 0,
            msg: '',
            counter: 0,
        };
    },
    watch: {
        result() {
            const that = this;
            if (this.counter == 1) { // Only setTimeout once (if counter = 1)
                setTimeout(function() {
                    that.number = 0;
                    that.counter = 0;
                }, 3000)
            }
        }
    },
    computed: { // used here and not method because we don't want this to rerun everytime button is clicked
        result() {
            if (this.number === 0) {
                return "Try to find the hidden number before time runs out!"
            }
            if (this.number > 39) {
                return "Too much! "
            } else if (this.number < 39) {
                return "Not there yet! "
            } else {
                return "Congratulations! " + this.number + " was the hidden number!"
            }
        }
    },
    methods: {
        calcTotal(num) {
            this.number += num;
            this.counter++;
        }
    }
})

app.mount('#assignment')