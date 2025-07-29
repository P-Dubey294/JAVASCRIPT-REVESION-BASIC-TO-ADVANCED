// what is Scope 
// Scope is the accessiblity of object , function , varible 
// into the inside the function 
// there are three types of scope 
//1> function scope 
//2> Blocled scope 
//3> lexical scope
//4> global scope (exceptions)

//1> what is function scope 
// it is a accessiblity of object , varibles , into inside the function 
// not accessible from outside the function .

let sum = parseInt(54) // Global scope
function function_Scope(a ,b){ // function scope 
    let sum = a + b 
    console.log(sum);
}
function_Scope(5,8)
console.log(sum);


//Another Example
var x = 10;
function test() {
  var x = 20;
  console.log("Inside function:", x);
}
test();
console.log("Outside function:", x);


//Another Example
var a = 5;
function updateA() {
  var a = 10;
}
updateA();
console.log(a);

//2> Blocked Scope 
// A varible can be access inside the {} blocked not access outside the block 
// Example 

let age = 25; // global scope
function isAdult(age){ // function scope
    if(age >= 18){ // blocekd scope
        let str = "Adult";
        console.log(str);
    }
}
isAdult(23)
console.log(age);


//Another example
let count = 100; // blocked scope 
if (true) {
  let count = 50; // blocked scope 
  console.log("Inside block:", count);
}
console.log("Outside block:", count);

//3> Lexical scope 
// a varible defined outside the function can be acessible  inside another 
// function defined after varible decalration  
// the oppsite is not true 

function outerfunction(){
    let m = parseInt(10) ;
    let n = parseInt(20) ;
    function innerfunction(){
        let f = 10
        console.log(m);
        console.log(n);
        console.log(m+n);
    }
    innerfunction()
}
outerfunction()

//Globual Variable Modification
let msg = "Hello";
function changeMessage() {
  msg = "Hi";
}
changeMessage();
console.log(msg);

//Variable Hoisting
// hoisting" is a behavior where variable and 
// function declarations are moved to the top of their scope 
// (global or function) during the compilation phase,
//  before the code is executed.

// function demo() {
//   console.log(a);
//   var a = 10;
// }
// demo();

//PQ> what will be the output 

let greet = "hello";   
function changeGreet(){     // function scope
    let greet = "namste";  // blocked scope
    console.log(greet);
    function innerGreet(){  // lexical scope
    console.log(greet);   
    }
}
console.log(greet); 
changeGreet()         

// Functions Expression 
// A function can be declared or store in a single varible 
// that is useless function there iss no name so it called 
// function expressions 

let hello = function(){
  console.log("hello");
}

hello = function(){
  console.log("Namste");
}

hello()

// Higher Order Functions 
// takes one or more multiple function as a arument..
// return function . 

function multipleGreet(func ,n){ // higher order function 
  for(let i=1; i<=n; i++)
  func()
}
let GFG = function(){   
  console.log("hello");
}
multipleGreet(GFG ,2)
