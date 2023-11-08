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
            showCart: false,
            cart: JSON.parse(localStorage.getItem('cart')) || []
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
        totalPrice() {
            return this.cart.reduce((sum, item) => (sum + item.price * item.quantity), 0);
        },
        totalItem() {
            return this.cart.reduce((sum, item) => (sum + item.quantity), 0);
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
            const price  = this.product.price + this.product.options[this.option].plus;
            const option = this.product.options[this.option].text;
            const color  = this.color;

            if (!this.cart.length || !this.cart.find(item => item.name === this.fullName)) {
                this.cart.push({
                    name: this.fullName,
                    price: price,
                    option: option,
                    color: color,
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
        },
        removeToCart(index) {
            this.cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    }
}).mount('body');
