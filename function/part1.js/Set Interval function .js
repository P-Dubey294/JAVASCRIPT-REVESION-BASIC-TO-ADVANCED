// 🔹 What is setInterval?
// setInterval is a built-in JavaScript function that repeats a piece of 
// code at regular time intervals (in milliseconds) until stopped.

// let id1 = setInterval (() => {
//     console.log("hi iam pratham");
// }, 2000)
// console.log(id1);
// clearInterval(id1)

// Practice Qs 
// write a function that print hello world 5 timme at intervals of 2s each.
// let id1 = setInterval( (n) => {
//          console.log("hello wrold");
// },2000)
// setTimeout (() => {
//     clearInterval(id1)
//     console.log("clear interval ");
// },12000)


// what is the output of the following code 

// const object = {
//     meassage : 'hello world ' ,

//     logMeassage() {
//         console.log(this.meassage);
//     }
// }
// setTimeout(object.logMeassage, 2000);



// what will be the output of the following code 
let length = 4;
function callback() {
    console.log(this.length);
}

const object =  {
    length : 5,
    method(callback){
        callback();
    },
};
object.method(callback, 1, 2);