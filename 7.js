const products = require('./products.js');

// 1
let task1 = products.filter(p => p.count > 10);
console.log("1. Товары с count > 10:", task1);

// 2
let task2 = products.find(p => p.price >= 800 && p.price <= 900);
console.log("2. Товар с ценой 800-900:", task2);

// 3
let task3 = [...products].sort((a, b) => b.price - a.price);
console.log("3. Сортировка по цене (убывание):", task3);

// 4
let task4 = products.reduce((sum, p) => sum + (p.price * p.count), 0);
console.log("4. Итоговая стоимость:", task4);

// 5
let task5 = products.map(p => ({
    ...p,
    marks_total: p.marks_total * p.count
})).sort((a, b) => a.marks_total - b.marks_total);
console.log("5. Преобразованный массив:", task5);
