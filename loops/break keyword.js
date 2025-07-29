let colour = "Black";
let guess = prompt(" Enter your color is")
while (guess != colour){
    if(guess == "quit")
    prompt('you quit');
    break;
}
 guess = prompt("Wrong guess  please agian enter your colour ")
if(guess ==colour){
    guess = prompt("congratulations you select your favouite color");
}