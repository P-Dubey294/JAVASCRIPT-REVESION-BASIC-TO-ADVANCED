//  A function (also known as a method) 
//  is a self-contained piece of code
// that performs a particular "function". 

// .A function is a reusable code-block 
// that will be executed by an event,
// or when the function is called. 

// Example 
// let Age = prompt(`Enter your age`)
// function is_Adult(age) {
//     if (Age >= 18){
//         console.log(" your are eligible for voating");
//     }
//     else{
//         console.log(" your are not eligible for voating");
//     }
// }
// is_Adult()

//Another Example 
// Create a function to roll a dice and 
// always display the value of the dice (1 to 6)

let random = Math.floor(Math.random() * 6) +1 ;
function roll_Dice(){
    console.log(random);
}
roll_Dice()

// function with argument  
// vlaue we pass the function 
function additionOfTownumber(a , b){
    sum = a + b ;
    console.log(sum);
}
additionOfTownumber(5 , 6)

// anther example 
function printName(name , age){
    console.log(`your name is ${name} , and your age is ${age}`);
}
printName("Pratham" , 23)

// practice problems : avarage of three number 

function avgOfThreeNumber(a ,b ,c){
    avg = (a + b + c )/ 3 ;
    console.log(avg);
}
avgOfThreeNumber(10 , 10 ,10)

// print a multiplication number 
function printn(n){
    for ( let i=0; i<=n*10; i+=n){
        console.log(i);
    }
}
printn(8)

// return keyword is used to retuen some value 
// from the function 
// function sum (a, b){
//     return a + b 
// }
// let s = sum(4 , 5 );
// console.log(sum);
// console.log(s);

// anothher example 

// function addition(a ,b){
//     return a + b 
// }
// console.log(sum(sum(1,3),3));

// return are returned onnly a single values 
// not more than one values 

// NOTE 
/*
jb bhi hum functiion ke under kuch values ko 
returned krte hain tho function vhi ke vhi stop ho 
jata hain uske aage ka koi bhi code execute nh honga  
*/
// exammple 

function substract(a ,b ){
    console.log("hello");
    console.log("Pratham");
    return a - b;
    console.log("kya bolte coding");
    console.log("how are you");
}
console.log(substract(3 , 3));

// crrating a function and print sum of 1 t0 n number

function getSum(n){
    let sum = 0 
    for(i=1 ; i<=n; i++){
        sum +=i;
    }
    return sum

}
console.log(getSum(8));

// creating a function and concatinate the all the string 
let str = ["Pratham" , "kumar", "Dubey"];
function getConcatinate(str){
    let result = "";
    for( i=0; i<str.length; i++){
        result +=str[i];
    }
    return result
}
console.log(getConcatinate(str));