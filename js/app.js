const { createApp } = Vue;
console.log(Vue);

let arrayImageslide = [
    {
        image: './img/image1.jpg',
        title: 'Torre Eiffel',
        text: 'Punto di riferimento storico - Francia, Parigi'
    },
    {
        image: './img/image4.jpg',
        title: 'Tempio Indù',
        text: 'Uno dei simboli più rappresentativi di Bali - Indonesia'
    },
    {
        image: './img/image5.jpg',
        title: 'Ponte di Rialto',
        text: 'Uno dei 30 ponti più belli di Italia - Venezia'
    },
    {
        image: './img/image6.jpg',
        title: 'Basilica di Santa Maria della Salute',
        text: 'Punto di riferimento storico - Italia, Venezia'
    },
    {
        image: './img/image7.jpg',
        title: 'Bora Bora',
        text: 'Isola più bella della Polinesia Francese - Bora Bora'
    },
    {
        image: './img/image8.jpg',
        title: 'InterContinental Bora Bora Resort',
        text: 'Hotel Thalasso di Bora Bora, Indonesia isola felice'
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
            // className: 'slide-carousel',
            // classNameActive: 'active',
            // imageSlide: array.image,
            currentIndex: 0,
	    }
    },
    methods: {
        nextSlide() {
            console.log('next');
        },
        prevSlide() {
            console.log('prev');
        }
	    
    },
};

const app = createApp(option);
app.mount('#app');