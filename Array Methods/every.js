//🔍 every() Method in JavaScript
// The every() method is used on arrays to test whether all
// elements pass a given condition 
// (i.e., return true for the callback function).

//✅ Return Value:
// true → If every element passes the condition.
// false → If any one element fails.

const number  = [2,4,6,8,9];
const reault = number.every(num => num % 2 ===0)
console.log(reault);

//Another Example 

const num = [5, -1, 25, 13];
const decalre = num.every(n => n > 0)
console.log(decalre);
