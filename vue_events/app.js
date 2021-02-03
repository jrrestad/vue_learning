const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
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
    setName(e) {
      this.name = e.target.value;
    },
  }
});

app.mount('#events');
