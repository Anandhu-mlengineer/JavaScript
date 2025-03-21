
const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter your name :",function name(name){
    rl.question("enter your age:", function age(age){
        age = Number(age);

    
    console.log(`your name is ${name} and your age is ${age}`);

    rl.close();
});
});





