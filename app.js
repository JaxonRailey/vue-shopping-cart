const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            product: {
                name: 'iPhone 13',
                price: 1190,
                options: [
                    {
                        text: '128 GB',
                        plus: 0
                    },
                    {
                        text: '256 GB',
                        plus: 100
                    },
                    {
                        text: '512 GB',
                        plus: 200
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
            color: '',
            option: 0,
            totalprice: 0,
            total: 0,
            cart: []
        }
    },
    mounted() {
        this.color = this.product.colors[0];
    },
    computed: {
        fullname() {
            return this.product.name + ' ' + this.color + ' ' + this.product.options[this.option].text;
        },
        fullprice() {
            return this.product.price + this.product.options[this.option].plus;
        },
    },
    methods: {
        changeColor(color) {
            this.color = color;
        },
        changeOption(index) {
            this.option = index;
        },
        addToCart() {
            const price = this.product.price + this.product.options[this.option].plus;
            this.totalprice += price;
            this.total++;
            if (!this.cart.length || !this.cart.find(item => item.name === this.fullname)) {
                this.cart.push({
                    name: this.fullname,
                    price: price,
                    quantity: 1
                });
            } else {
                this.cart = this.cart.map(item => {
                    if (item.name === this.fullname) {
                        item.quantity++;
                    }

                    return item;
                });
            }
        }
    }
}).mount('.card');