// The filter() method in JavaScript is used
// to create a new array containing only the 
// elements from the original array that pass 
// a specific test (condition) defined in a callback function.

//🔍 Example 1: Filter even numbers
let number = [1,2,3,4,5,6,7,8,9]
const result = number.filter(num => num % 2 === 0); // odd !== 0
console.log(result); 

//🔍 Example 2: Filter age above
let student = [
    {
        name : "Pratham",
        age : 24
    },
    {
        name : "vikas",
        age : 20
    },
    {
        name : "shruti",
        age : 17
    }
]
const declare = student.filter( student => student.age >= 18);
console.log(declare);

//🔍 Example 3: Filter truthy  and Falsy values
const mixed = [0, "Hello", false, "", 42, null, undefined];
const truthy = mixed.filter(Boolean);
console.log(truthy); 
