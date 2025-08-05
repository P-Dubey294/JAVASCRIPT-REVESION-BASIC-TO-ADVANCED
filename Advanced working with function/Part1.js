// what is recursion 
// function calling its self 
// its aslo a programming pattern that is useful in situations when a task 
// can be naturally split into several tasks of the same kind, but simpler.

// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16

// There are tow way to slove this problems....
//1> using loops

function pow(x,n){
    let result=1;
    for(i=0; i < n; i++){
        result *= x;
    }
    return result;
}
console.log(pow(2,3));

//using recursion 


function power(x, n){
    // base condtion 
    if(n==1){
        return x;
    }
    else{
         return x * power(x , n-1) // devide into the problem
    }
}
console.log(power(2,4));  // recursively called 

// Short way 
function power(x,n){
    return (n==1) ? x : (x * power(x, n-1));
}
console.log(power(3,2));

// Sum all numbers till the given one ie 1 + 2 + 3 + 4 ..... n 
function SumofAll(n){
    total  = 0 
    for(i=0; i <= n; i++){
        total +=i
    }
    return total
}
let n = parseInt(console.log("enter a number"));
let result = SumofAll()