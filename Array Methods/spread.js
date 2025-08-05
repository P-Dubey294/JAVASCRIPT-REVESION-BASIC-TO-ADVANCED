// The spread operator (...) is a powerful and concise syntax used to unpack elements
// from arrays or objects. It allows you to copy, combine, or pass elements easily.

console.log(..."pratham");

// copy arry

const arr = [1,2,3,4,5,6,7,8,9]
const copy = [...arr]
console.log(copy);

// merging array 

const a = [2,3,4,5]
const b = [1,6,7,8,9]
const combine = [...a, ...b]
console.log(combine);

// Spread with object literals 
let data = {
    email : "dpratham649@gmail.com",
    Password : "Pratha@3011"
}
const data_Copy = {...data, id:123};
console.log(data_Copy);

// Another example 
let user = {
    name : "PrathamkuarDubey",
}
let details = {
    email : "dpratham649@gmail.com",
    address : "Near Sai Raj Medical Civil Line Gondia"
}
const comb = {...user, ...details, id : 123}
console.log(comb);

//✅ 6. Using with Rest Parameters (Reverse of Spread)

function rest(...args){
    console.log(args);
}
rest(1,2,3,4,5,6,7)