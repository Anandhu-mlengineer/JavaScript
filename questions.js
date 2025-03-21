let num = 5;
if (num>0){
    console.log("The number is possitive");
}else if(num<0) {
    console.log("The number is negative");


}else {
    console.log("The number is zero");
}

const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter a number: ",function(num){
    num = Number(num);
    if (num>0) {
        console.log("The number is possitive");

    }else if(num<0) {
        console.log("The number is negative");

    }else {
        console.log("The number is zero");
    }
    rl.close();
});


let day = 5;
const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter a number: ", function(day){
    day = Number(day);
    switch(day){
        case day ===1:
            console.log("Today is monday");
        case day===2:
            console.log("Today is tuesday");
        case day===3:
            console.log("Today is wednsday");
        case day===4:
            console.log("Today is thrusday");
        case day===5:
            console.log("Today is friday");
        case day===6:
            console.log("today is saturday");
        case day===7:
            console.log("Today is sunday");

        case day>7:
            console.log("Invalid for day");
    }
})