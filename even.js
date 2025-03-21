const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter a number: ",function even(num){
    num = Number(num);
    for (let i = 1; i<=num; i++){
        if (i%2==0){
            console.log(i);
        }
    }
rl.close({});
});
