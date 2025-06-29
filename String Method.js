// 1> trim() Method -> Remving the whitespaces for both the ends

let Str = " Pratham   "
let letter = "Pratham             "
console.log(Str.trim());
console.log(letter.trim());

//Note String is imutable which can create a new string .
let msg = "     Hello  "
console.log(msg.trim()); // creating a new string
console.log(msg); // old string

// 2> tolowercase & touppperCase () Methods

let str = "SHRUTI Shrma"
console.log(str.toLocaleLowerCase());

let words = "prathamkumar dubey"
console.log(str.toUpperCase());

//3> String With Arguments --> retun the first occurance of the letter
let My_Name = "Pratham Dubey";
let Clg_Name  = "GH Raisoni College Of Engeenering and Management"
console.log(My_Name.indexOf("Dubey")); // 8
console.log(Clg_Name.indexOf("College"));

//4> Method Channing -> using one method after another
let car_Name = " Toyota  ";
console.log(car_Name.toUpperCase().trim());

let city_Name = "  JAPAN ";
console.log(city_Name.toLocaleLowerCase().trim());

//5> Slicing -> return a part of orignal string as a new sting 
let string = "chowmow bhjiya khaau";
console.log(string.slice(0,7));
console.log(string.slice(-5,));

// repeate and replce 
let area_name = "Civil Line Gondia";
area_name = area_name.replace("Civil", "Services");
console.log(area_name);

let CITY = "GOA"
CITY = CITY.repeat(3)
console.log(CITY);