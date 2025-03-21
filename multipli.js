const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter a number to print nultiplication table: ",function(n){
    n = Number(n);
    for (i=1;i<=10;i++){
       console.log(`${i}x${n} = ${i*n}`); 
    }
    rl.close();
})