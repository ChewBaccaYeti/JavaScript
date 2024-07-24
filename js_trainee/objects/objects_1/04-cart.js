/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1; // В оригинальном объекте по ссылке меняем значение

                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this; // Деструктуризация массива, чтобы не писать this

        for (let i = 0; i < items.length; i += 1) {
            const item = items[i]; // Тут я сперва писал this.items[i]

            if (productName === item.name) {
                console.log('Removed product:', productName);
                console.log('index:', i);

                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        }

        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍋');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());
