
const app = Vue.createApp({
    data() {
        return {
            entertask: '',
            tasks: [],
            hideshow: true
            

        };
    },

    methods:{
        addTask(){
            this.tasks.push(this.entertask);
        },

        toggle() {
            this.hideshow = !this.hideshow;
        }
    },



});

app.mount('#assignment');


