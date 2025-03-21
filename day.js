//let day = 5;
const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter a number: ", function(day){
    day = Number(day);
    switch(day){
        case  1:
            console.log("Today is monday");
            break;
        case  2:
            console.log("Today is tuesday");
            break;
        case 3:
            console.log("Today is wednsday");
            break;
        case 4:
            console.log("Today is thrusday");
            break;
        case 5:
            console.log("Today is friday");
            break;
        case 6:
            console.log("today is saturday");
            break;
        case 7:
            console.log("Today is sunday");
            break;

        default:
            console.log("Invalid for day");
    }
    rl.close();
})