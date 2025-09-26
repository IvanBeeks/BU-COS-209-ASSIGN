// Array methods example
const fruits = ['apple', 'banana', 'cherry'];

// forEach method
fruits.forEach(fruit => console.log(fruit));

// filter method
const filterB = fruits.filter(fruit => fruit.startsWith('b'));
console.log(filterB); // ['banana']

// reduce method
const allFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
console.log(allFruits);
