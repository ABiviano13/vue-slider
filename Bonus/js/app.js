const { createApp } = Vue;
console.log(Vue);

let arrayImageslide = [
    {
        image: './img/image1.jpg',
        title: 'Torre Eiffel',
        text: 'Punto di riferimento storico - <strong> Francia, Parigi </strong>'
    },
    {
        image: './img/image4.jpg',
        title: 'Tempio Indù',
        text: 'Uno dei simboli più rappresentativi di Bali - <strong> Indonesia </strong>'
    },
    {
        image: './img/image5.jpg',
        title: 'Ponte di Rialto',
        text: 'Uno dei 30 ponti più belli di Italia - <strong> Venezia </strong>'
    },
    {
        image: './img/image6.jpg',
        title: 'Basilica di Santa Maria della Salute',
        text: 'Punto di riferimento storico - <strong> Italia, Venezia </strong>'
    },
    {
        image: './img/image7.jpg',
        title: 'Bora Bora',
        text: 'Isola più bella della Polinesia Francese - <strong> Bora Bora </strong>'
    },
    {
        image: './img/image8.jpg',
        title: 'InterContinental Bora Bora Resort',
        text: 'Hotel Thalasso di Bora Bora, <strong> Indonesia isola felice </strong> '
    },
    {
        image: './img/image10.jpg',
        title: 'Keizersgracht',
        text: 'Arte = Amsterdam - Olanda'
    }
];


const option = {
    data() {
	    return {
            array: arrayImageslide, //Più leggibile
            currentIndex: 0,
	    }
    },
    methods: {
        nextSlide() {
            console.log('next');
            const lastIndex = this.array.length - 1
            if(this.currentIndex < lastIndex) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        prevSlide() {
            console.log('prev');
            const lastIndex = this.array.length - 1;
            if(this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = lastIndex;
            }
        }
    },
    mounted() {
        // Bonus
        this.autoplay = setInterval(this.nextSlide, 3000);
    }
    
};

const app = createApp(option);
app.mount('#app');