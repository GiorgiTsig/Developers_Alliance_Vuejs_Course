
const app = Vue.createApp({
    data() {
        return {
            name:'Giorgi',
            age:22,
            photo: 'http://www.quickmeme.com/img/5c/5cbe8e20b98549b36aed4619b9bcb2498b6d5a8f15b6f5414e285d23f6249984.jpg'
        };
    },

    methods:{
        Myage(age) {
            return age + 5;
        },

        Randonumber() {
            const Randomnumber = Math.floor(Math.random() + 0.4) ;
            return `this is ${Randomnumber}`;
        }
    }
});

app.mount('#assignment');
