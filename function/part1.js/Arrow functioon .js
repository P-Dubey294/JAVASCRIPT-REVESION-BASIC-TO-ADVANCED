// arrow function is also type of function it is use as a like value 
// which is also used in high order functions. and call back 
// callback menas a function pass as a argument into the another aa function 
// arrow function are always return a single values . 

const sum  = (a, b) => (a + b)
const cube = (n) => {
    return  n * n * n;
}
const hello = () => {
    console.log("hello");
}
const mul = (a , b) => ( a * b)
console.log(mul(2,4));
console.log(cube(2));
console.log(sum(2,4));
hello();


//Practice Question 
// write an arrow function thata return sqaure of number n 

const SquareOfN = (n) => {
     return  n * n
}
console.log(SquareOfN(5));


// write an arrow function name arrayAvarage that accept 
// array of numbers and return the avarage of those number 


const arrayAvarage = (array) => {
    let total = 0;
    for (let number of array){
        total += number
    }
    return total / array.length 
};
let arr = [1,2,3,4,5,6]
console.log(arrayAvarage(arr));

