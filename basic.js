let name = "Alice";
namme = "bob";
console.log(namme);

const age  = 25;
console.log(age);
console.log(typeof age);

const a = 5;
const b = 7;
console.log(a===b);

if (a>=b){
    console.log("The first number is bigger");
}else{
    console.log("The second number is bigger");
}

const day = "Monday";
switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Week end is near");
        break;
    default:
        console.log("regular day");

}

function iseven(number) {
    if (number%2 ===0){
        console.log("The number is even");
    }else {
        console.log("The number is odd");
    }
}
console.log(iseven(5));

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((data) => console.log(data)); // Output after 2 seconds: Data received


const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Content:", data);
});

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

server.listen(9000, () => {
    console.log('Server running on http://localhost:9000');
});

