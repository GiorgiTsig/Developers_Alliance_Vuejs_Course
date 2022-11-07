
const app = Vue.createApp({
    data() {
        return {
            name:'OUTPUT',
            nameEnter: 'OUTPUT'
        };
    },

    methods:{
        Alert(){
            return alert("If you want someone to kill Putin, click Ok")
        },

        setName(event) {

            this.name = event.target.value;


            if (event.target.value === "") {

                this.name = "OUTPUT";
            } 

        },

        setNam(event) {

            this.nameEnter = event.target.value;


            if (event.target.value === "") {

                this.nameEnter = "OUTPUT";
            } 

        }
    }
});

app.mount('#assignment');





