//Constant Array --> jb bhi hum Array ki value ko change krna 
//che to uski value chnge ho skti hain but uska address change nh honga 
// or na hi usko store kra skte hain . its remein fixed 

const arry  = [ 1, 2 ,3 ,4 ,5 ,6, 7, 8, ]
console.log(arry);
arry.push(9);
console.log(arry); // mtlb ki iski value me hum chnges kr skte hain but adress me nh kr skte hain 
let arry = [1,2,3,4,5,6,6,7] // maraa error becuse adress ko chgne kr rhe hain 
console.log(arry);
