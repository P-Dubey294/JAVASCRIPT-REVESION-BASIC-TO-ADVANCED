// what is method ? 
// a method that can perform an object is called method 

const calculator = {
    add (a,b){
        return a + b 
    },
    sub(a,b){
        return a - b 
    },
    mul(a,b){
        return a*b
    }
}
console.log(calculator.add(5,5));
console.log(calculator.sub(5,5));
console.log(calculator.mul(5,5));
