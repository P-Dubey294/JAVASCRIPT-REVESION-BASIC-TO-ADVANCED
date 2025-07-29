//🔁 forEach(fn) in JavaScript
// The forEach() method executes a provided function once for
//  each array element. It's used to loop through an array, 
//  but it does not return a new array (unlike map()).

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});

// for each using for accessing the object properties.

let arr = [
    {
        name : "Pratham",
        marks : 99,
    },
    {
        name : "vikas",
        marks : 95,
    },
    {
        name : "Ashis",
        marks : 89,
    }
];
arr.forEach( (student) => {
    console.log(student.name);
})
arr.forEach( (student) => {
    console.log(student.marks);
})


