let str = [ 1,2,3,4,5]; // ikse liey ek alg memory alocated hui hai and iska address differnt hai 
let str2 = [1,2,3,4,5]; // sam as it is but
console.log(str ==str2); // but both are adress store are differnt --> return False


//Refernce Of array  --> What is Refernce -- to store the memory address
let arr = [ 'a' , ' b'];
console.log(arr); // orignal
let arrCopy = arr 
console.log(arrCopy); //copy
console.log(arrCopy.push("c"));
console.log(arr);
console.log(arr == arrCopy);

// Example 

let Str = [ "prahtam " , " Shruti " , 'prem'];
console.log(Str);
let StrCopy = Str 
console.log(StrCopy);
console.log(StrCopy.push("Varsha"));
console.log(StrCopy);
console.log(Str == StrCopy);