
const app = Vue.createApp({
    data() {
        return {
            stylename:'',
            tryhide: true,
            color:''

        };
    },

    methods:{
        setStyle(event) {

            this.stylename = event.target.value;
        },

        toggle() {
            this.tryhide = !this.tryhide;
        },

        setColor(event) {

            this.color = event.target.value;

        }

    },

    computed: {
        checkStyle() {
            if (this.stylename === 'user1') {
                return {user1 : this.stylename };
            } else if (this.stylename === 'user2') {
                return {user2 : this.stylename};
            } 
        }
    }
});

app.mount('#assignment');



