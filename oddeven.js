const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter a number: ",function(number){
    number = Number(number);
    if (number%2===0){
        console.log("the number is even");

    }else{
        console.log("the number is odd");
    }
    rl.close();
})