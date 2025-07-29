const favourite = "KGF2";
let guess = prompt("Enter your movie name:");
while (guess !== favourite && guess !== 'quit') {
    guess = prompt('Wrong guess. Please again enter your favourite movie or type "quit" to exit:');
}
if (guess === favourite) {
    alert("Congratulations! You guessed the correct movie.");
} else if (guess === 'quit') {
    alert("You chose to quit. Goodbye!");
}
   