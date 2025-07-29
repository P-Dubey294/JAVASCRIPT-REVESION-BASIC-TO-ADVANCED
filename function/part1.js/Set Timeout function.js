// 🔹 What is setTimeout in JavaScript?
// setTimeout is a built-in JavaScript function that allows you to 
// run some code once after a specified delay (in milliseconds).
// SetTimeout function is belongs to windows objects.

console.log(" helllo "); // 1st executed
setTimeout ( () => {
    console.log("Prathamkumar Dubey"); // 3rd executed
}, 5000)
console.log(" i am "); // 2nd executeds

// settime out genrally used in API call , request , response etc 

// another example 
console.log(" Start");
setTimeout(() => {
    console.log(" start after 3 sec");
}, 4000);
console.log( " End ");