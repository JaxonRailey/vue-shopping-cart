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
                    'purple'
                ]
            },
            color: '',
            option: 0,
            totalPrice: 0,
            totalItem: 0,
            cart: []
        }
    },
    mounted() {
        this.color = this.product.colors[0];
    },
    computed: {
        fullName() {
            return this.product.name + ' ' + this.color + ' ' + this.product.options[this.option].text;
        },
        fullPrice() {
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
            this.totalPrice += price;
            this.totalItem++;
            if (!this.cart.length || !this.cart.find(item => item.name === this.fullName)) {
                this.cart.push({
                    name: this.fullName,
                    price: price,
                    quantity: 1
                });
            } else {
                this.cart = this.cart.map(item => {
                    if (item.name === this.fullName) {
                        item.quantity++;
                    }

                    return item;
                });
            }
        }
    }
}).mount('.card');
