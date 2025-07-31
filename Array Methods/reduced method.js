// What is reduced method 
// reduced the array to a singe value 
// reducer function contain two varible ie (accumulator , element)


// find the sum of array 
let number = [1,2,3,4,5]
const finalValues = number.reduce( (res , el) => {
    console.log(res);
    return res + el 
});
console.log(finalValues);


// count the frequecy of the element 
const fruits = ["Apple", "Banana" , "Apple" ,"Orange" , "Mango"]
const findFrequecy = fruits.reduce( (accu , fruits) => {
    accu [fruits] = (accu[fruits] || 0) + 1;
    return accu;
},{});
console.log(findFrequecy);



// find the maximum element into the array
let num = [1,3,5,7,8]
const findthemax = num.reduce((max , ele) => {
    if (ele > max){
        return ele;
    }
    else 
        return max;
})
console.log(findthemax);



// cheack if  all number in our array  are multiple of 10 or not 
let n = [5 , 2, 10 , 15 , 20]
const findMultipleOfTen = n.reduce((ele) => n % 10 == 0)
console.log(findMultipleOfTen);



//  find the minimum number of array 
let array = [1,3,5,7,8]
const findthemin = array.reduce((max , ele) => {
    if (ele < max){
        return ele;
    }
    else 
        return max;
})
console.log(findthemin);