//Q> A "good string" is a sting that starts with letter 'a'
//and it has length > 3 .write a program to find if string is good or 
//not.

let letter = "Apple"
if( (letter[0] == "A" ) && (letter.length >= 3)){
    console.log(` its a good String`);
}
else{
    console.log(` its a bad String`);
}


let num =12;
if((num%3 == 0) && ((num+1 == 15) || (num-1 == 11))){
    console.log("safe");
}
else{
    console.log("unsafe");
}