const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      title: '',
      firstname: '',
      lastname: '',
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
    setName(e, name) {
      if (this.firstname == "" && this.lastname != "") {
        this.title = 'Mr./Mrs.'
      } else {
        this.title = ''
      }
      if (name == "firstname") {
        this.firstname = e.target.value
      } else  if (name == "lastname") {
        this.lastname = e.target.value
      }
      this.name = this.firstname + `${this.title} ` + this.lastname
    },
  }
});

app.mount('#events');
