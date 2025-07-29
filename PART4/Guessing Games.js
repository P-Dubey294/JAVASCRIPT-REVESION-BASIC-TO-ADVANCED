const max = parseInt(prompt("Enter the max number"));

const random  = Math.floor(Math.random() * max) + 1;

// user se puchne ke liye ek prompt create krenge 

let guess = prompt("Guess the number",);


// ye while loop run hote rhega jb tk guess kri hui values random number ke equal nh aati !

while(true){
    if(guess === "quit"){
        console.log("quit the game");
        break;
    }

    if (parseInt(guess) === random){
        console.log("congratulations! You guessed the correct number:", random);
        break;
    } else if(parseInt(guess) < random){
        guess = prompt("your guess is too small! Please try again");
    } else {
        guess = prompt("your guess is too large! Please try again");
    }
}