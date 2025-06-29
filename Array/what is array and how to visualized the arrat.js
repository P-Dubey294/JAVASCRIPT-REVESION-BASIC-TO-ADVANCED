// Array _> Array is a liner type of datastructure which is used to store the 
//Differnt type of element at lineraly.

let Student = [ "Pratham", 23 , "GH Raisoni College of engeenering nagpure" , "Gondia" , 9529754950 ] 
console.log(Student);
console.log(typeof(Student)); 

let Marks = [ 25,65,45,30];
let student_Name = [ 'Pratham' , "Shruti" , "Rohit" ];
let info = [ "Shruti" , 23,9.5];
console.log( Marks);
console.log(student_Name);
console.log(info);

let City_Name = ["Gondia", "Nagoure","Mumbai","Gujrat" ,"Hydrabaad" , "Pune", "Banglore"];
console.log(City_Name.length);

//In Javascript Array are mutable 
 City_Name [0] = "Aurngabaad"
 console.log(City_Name);
 console.log(City_Name.length);

 // Array Method 
 // 1) Push --> adding the element tho the end of the array

 let mobile_Name = [ "Apple","Samsung","Oppo","Vivo"];
 mobile_Name.push("Xiomi");
 console.log(mobile_Name);

// 2) Pop --> removing the end of the element of the array and return the removed element
let removedElement = mobile_Name.pop();
console.log(mobile_Name);
console.log(removedElement);

// 3) Unshift --> adding the element to the start of the array
mobile_Name.unshift("Nokia");
console.log(mobile_Name);  

// 4) Shift --> removing the first element of the array and return the removed element
let firstElement = mobile_Name.shift();  
console.log(firstElement);
console.log(mobile_Name);

// 5) Splice --> adding or removing the element from the array at a specific index
mobile_Name.splice(2, 0, "OnePlus"); // adding OnePlus at index             
console.log(mobile_Name);
mobile_Name.splice(3, 1); // removing the element at index 3
console.log(mobile_Name);

///Question

let start = ['january ' , 'julay' , 'march' , 'august'];
console.log(start.shift()); // removes and logs the first element
start.splice(1, 0, "june"); // inserts "march" at index 2
console.log(start);

// 6th) IndexOf() method -> return index of something or find of the index.
let cars = [ "bmw" , "volvo" , "xuv" , "wolgswegon" , "suzuki" ];
console.log(cars.indexOf("wolgswegon"));
console.log(cars.indexOf("suzuki"));

// 7th) include() mthods -> serching a value if value is present 
// it return true otherwise false .
let Vegitables = [" capsigum" , "Laddyfinger" , "potato" , "tomato" , "onion"];
console.log(Vegitables.includes("potato")); // present true 
console.log(Vegitables.includes("Garlic")); // not present false.

//8th) concat() methods --> connection between the two string 
let Primary = [ 11, 22, 33 , 44, 55 ];
let seceondry = [66, 77, 88 ,99, 110];
console.log(Primary.concat(seceondry));

//9th) reverse() method --> reversed the aaray of the string 
let reveserd = [ 1,2,3,4,5,6,7,8,9];
console.log(reveserd.reverse());

// slice() methos --> its a copy of the portions array .
let Colors = ['red' , 'blue' , 'green' ,'yellow' ,'pink' , 'white'];
console.log(Colors.slice(3 , 4));
console.log(Colors.slice(1 , 5));

// sorts() method --. arrange the elemet in asscending order 
let Alphabets = ["A" , "B" , "C" , "K" , "E" , "D", "G" , "F" , "J" , "I" , "H" , "L" , "M" , "O" , "N"];
console.log(Alphabets.sort());

//spice() method --> remove / add and deleting the elelemt 
// For the given state start of an array.change its to final 
//from using splice.

// start = [ 'january','julay','march','august']
// final = [ 'julay' , 'june' , 'march' ,'august']


let Start = [ 'january ' , 'jualy', 'march' , 'august']
console.log(Start.splice(0,1));
console.log(Start);
console.log(Start.splice(0,1,"julay","june"));
console.log(Start);