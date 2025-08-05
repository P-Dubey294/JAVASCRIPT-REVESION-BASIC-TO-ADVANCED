//Qs1. Square and sum the array elements using the
//arrow function and then find the average of the array.

let nums = [1,2,3,4,5,6,7]
const sqaure = nums.map((nums) => nums * nums)
console.log(sqaure);

let sum = nums.reduce((accu , nums) => accu + nums , 0)
console.log(sum);

let avg = sum / nums.length
console.log(avg);

