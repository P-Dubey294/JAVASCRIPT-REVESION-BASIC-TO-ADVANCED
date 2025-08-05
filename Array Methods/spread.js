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
