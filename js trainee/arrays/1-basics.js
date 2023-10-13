const cart = [52, 43, 65, 67, 38, 69, 96];

let total = 0; // переменная до цикла for

// Перебрать массив
for (let i = 0; i < cart.length; i += 1) {
    total += cart[i];
    console.table(total);
}

for (const value of cart) {
    total += value; //* Меньше кода, когда не нужен доступ к счетчику и мне не нужен перезаписывать элемент массива.
}
console.log(cart);

for (let i = 0; i < cart.length; i += 1) {
    cart[i] = Math.round(cart[i] * 1.5); //* Внутрь каждого элемента массива нужно переопределить его значение
}
console.log(cart);

for (let value of cart) {
    value = Math.round(value * 1.5); // Копия массива без ссылки в память
}
console.log(cart);
