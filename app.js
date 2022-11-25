const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            product: {
                name: 'iPhone 13',
                price: 1190,
                options: [
                    {
                        'text': '128 GB',
                        'plus': 0
                    },
                    {
                        'text': '256 GB',
                        'plus': 100
                    },
                    {
                        'text': '512 GB',
                        'plus': 180
                    }
                ],
                colors: [
                    'black',
                    'blue',
                    'green',
                    'purple',
                    'white'
                ]
            },
            active: '',
            fullname: '',
            fullprice: 0,
            total: 0,
            quantity: 0
        }
    },
    mounted() {
        this.active    = this.product.colors[0];
        this.fullprice = this.product.price;
        this.fullname  = this.product.name + ' ' + this.active;
    },
    computed: {
        totalprice() {
            return parseFloat(this.fullprice * this.quantity).toFixed(2);
        }
    },
    methods: {
        changeColor(color) {
            this.active   = color;
            this.fullname = this.product.name + ' ' + color;
        },
        changePrice(plus) {
            this.fullprice = this.product.price + plus;
        }
    }
}).mount('.card');