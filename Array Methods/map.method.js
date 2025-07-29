//🔁 map() in JavaScript
// The map() method creates a new 
// array by applying a function to each element of the original 
// array.

// It’s used when you want to transform each element in 
// an array without changing the original..
const nums = [1, 2, 3, 4];
const doubled = nums.map(num => 
    num * 2
);
console.log(doubled); 



const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 28 }
];
const names = users.map(user => user.name);
console.log(names);




const numbers = [1, 2, 3, 4];
const result = numbers.map(n => n * 10).map(n => `value is ${n}`);
console.log(result);


