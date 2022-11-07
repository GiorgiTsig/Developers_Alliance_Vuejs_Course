
const app = Vue.createApp({
    data() {
        return {
            counter:0
        };
    },

    methods:{
        add(number) {
            this.counter += number;
        }

    },

    computed: {
        chechkcounter() {
            if (this.counter === 37) {
                return 'Greate';
            } else if (this.counter > 37){
                return 'Too much!';
            } else {
                return 'Not there yet';
            }
        }
    },

    watch:{
        counter(event) {
            if (event > 1) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                }, 5000);
            }
        }
    }

});

app.mount('#assignment');




