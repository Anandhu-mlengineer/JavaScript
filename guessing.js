let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function guess() {
    
        rl.question("Enter a number between 1 and 10:", function(n) {
           let  n = Number(n);
            
            if (isNaN(n)) {
                console.log("Invalid input. Please enter a number.");
                return guess(); 
            }

            if (n === randomNumber) {
                console.log("You guessed it right");
                rl.close(); 
            } else {
                console.log(" Sorry please try again");
                guess(); 
            }
        });
    } 
            rl.close();
    


guess(n); 
