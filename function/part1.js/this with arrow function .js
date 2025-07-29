// this with arrow functions 

// arrow function ke this(keyword) jo hta hain vo uska 
// parent ka this hota hain means vo 
// calling from prarent this .( window object) --> parent scope

// normal function ke liye this(keyword) uska object ka this
// hota hain means  calling form object this  global scope 

const Student = {
    name : "Prthan",
    marks : 93,
    prop : this, // global scope
    getName: function () {
        console.log(this);
        return this.name
    },
    getMarks: () => {
        console.log(this);
        return this.marks;
    },
    getinfo1 : () => {
        setTimeout (() => {
            console.log(this); // student
        },2000)
    },
    getinfo2 : () => {
        setTimeout (function ()  {
            console.log(this); // window
        }, 2000);
    },
};
console.log(Student.getinfo1());
console.log(Student.getinfo2());