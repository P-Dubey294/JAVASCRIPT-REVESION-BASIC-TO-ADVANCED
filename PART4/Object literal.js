// What is onject literals 
// onject literal are store the key collection & complex entities.

// what is properties 
// properties are store the key vlaue pair 

// what is an object 
// object are the collection of the properties and method 

// creating a object literal is 

student = {
    name : "Prathamkumr Dubey",
    age : 23 ,
    marks:  94.4,
}
 console.log(student);
 console.log(typeof(student));

 const Fruites = {
    name : "Apple",
    color : "red",
    price : "50kg",
}
console.log(Fruites);

const Instagram = {
    username : "@Prathamkumar_Dubey",
    content : "This my account ",
    likes : 500,
    Repost : 5,
    tag : ["@apnacollege" , "@shrutiShrma" , "@codewithtech"]
}
console.log(Instagram);

// how to get the values 

console.log(Instagram["username"]);
console.log(Instagram ["tag"]);    
console.log(Instagram.Repost);
console.log(Instagram.content);
console.log(Instagram.likes);

// Adding & updating the values 

Instagram.username = "@Shruti_08"
console.log(Instagram.username);
console.log(Instagram);

// Adding the properties 
Instagram.gender = "male";
console.log(Instagram.gender);
console.log(Instagram);

Instagram.city = "Gondia";
console.log(Instagram);

Instagram.Study = "CA(Charted Accountant)";
console.log(Instagram);

// Delating the properties/ values 
delete Instagram.Study;
console.log(Instagram);

// Nested Object Creating 
const Data =  {

    student1 : {
    name : "Prathamkumar Dubey",
    age : 23,
    city : "Gondia",
    Marks : 9
},
    Student2 : {
    name : "Rohit Kaikade" , 
    age : 21 ,
    city : "Nagpur",
    Marks : 7.5
},
     Student3 : {
    name : "Nikllesh Raut",
    age : 22,
    city : "Hydrabad",
    Marks : 8.7
}
} 
 console.log(Data);
 console.log(Data.student1);
 console.log(Data.student1.name);
 
 // supoose we have to change the city of this person 

 Data.student1.city = "Pune";
 console.log(Data.student1);

 // Array of object of object --> multiple objects 
 
const studentInfo = [ 
    
    student1 = { 
         name : "Prathamkumar Dubey",
         age : 23,
         branch : "MCA",
         rollno : "2324MIFMCA042",
         college : "GH Raisoni college"
    },

    student2 = {
        name : "Shruti Shrama",
        age : 21 , 
        branch : "CA",
        college : "ICAI",
        city : "Gondia"
    },
    student3 = {
        name : "Rohit Kaikade",
        age : 22,
        branch : "B-COM",
        college : "prena college Nagpure",
        rollNo : "2324MIFMCA048"
    }

]

console.log(studentInfo);
