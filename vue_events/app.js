const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter += num
    },
    reduce(num) {
      if (this.counter - num >= 0) {
        this.counter -= num
      } else {
        this.counter = 0
      }
    },
  }
});

app.mount('#events');
