//Destructuring is a convenient way 
// to extract values from arrays or properties from objects
// into separate variables using a short and clean syntax.

let name = [ "Pratham" , "Rohti", "Niklesh", "Subhod"]
let [winner , runnerup, ...others] = name
console.log("before :-",name);
console.log("after :-",winner, runnerup, others);

//➕ Skipping Elements
const [x, , z] = [1,2,3,4] // with help of comma skip the element 
console.log(x , z);

//Destructuring with object 

const user = { email : "Dpratham649@gmail.com",
    pass : "Pratham@3011"
}
const {email , pass} = user;
console.log(user);

// rename the object properties 
const {email:emails , pass : age} = user
console.log(emails);
console.log(pass);

