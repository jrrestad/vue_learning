const app = Vue.createApp({
    data () {
        return {
            friends: [
                // {
                // id: '1',
                // name: 'Manuel Lorenz',
                // phone: '555-123-1234',
                // email: 'manuel@lorenz.com',
                // },
                // {
                // id: '2',
                // name: 'Julie Lorenz',
                // phone: '555-123-1234',
                // email: 'julie@lorenz.com',
                // },
            ]
        }
    },
})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">Show Details</button>
        <ul v-if="detailsExist">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
    data () {
        return {
            detailsExist: false,
            friend: {
                id: '1',
                name: 'Manuel Lorenz',
                phone: '555-123-1234',
                email: 'manuel@lorenz.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsExist = !this.detailsExist
        }
    },
})

app.mount("#app");