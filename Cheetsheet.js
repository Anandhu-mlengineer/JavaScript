// Variables
let x = 10;       // Block-scoped (ES6)
const y = 20;     // Constant value (ES6)
var z = 30;       // Function-scoped (old way)

// Data Types
let str = 'Hello';   // String
let num = 42;        // Number
let bool = true;     // Boolean
let arr = [1, 2, 3]; // Array
let obj = {key: 'value'}; // Object
let und = undefined; // Undefined
let n = null;        // Null

// Functions
function greet(name) {
    return `Hello, ${name}!`;
}

const add = (a, b) => a + b; // Arrow function

// Logging Output
console.log('Message');
console.error('Error!');
console.warn('Warning!');


// If-Else
if (x > 0) {
    console.log('Positive');
} else if (x < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

// Switch
switch (day) {
    case 'Monday':
        console.log('Start of week');
        break;
    case 'Friday':
        console.log('Weekend is near');
        break;
    default:
        console.log('Other day');
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

do {
    console.log(j);
    j++;
} while (j < 10);

// For...of (Arrays)
for (let item of arr) {
    console.log(item);
}

// For...in (Objects)
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}



let nums = [1, 2, 3, 4, 5];

nums.push(6);       // Add to end
nums.pop();         // Remove from end
nums.shift();       // Remove from start
nums.unshift(0);    // Add to start

let doubled = nums.map(n => n * 2);    // Transform array
let evens = nums.filter(n => n % 2 === 0); // Filter array
let total = nums.reduce((acc, n) => acc + n, 0); // Sum

console.log(nums.includes(3)); // Check existence
console.log(nums.indexOf(3));  // Get index
console.log(nums.slice(1, 4)); // Extract subarray


// Object Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

// Object Spread
const newPerson = { ...person, job: 'Developer' };

// Object Methods
console.log(Object.keys(person));   // ['name', 'age']
console.log(Object.values(person)); // ['John', 30]
console.log(Object.entries(person)); // [['name', 'John'], ['age', 30]]


// Select Elements
const el = document.getElementById('myId');
const els = document.querySelectorAll('.myClass');

// Modify Content
el.textContent = 'Hello';
el.innerHTML = '<strong>Hello</strong>';

// Events
el.addEventListener('click', () => alert('Clicked!'));

// Promise Example
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data received'), 1000);
    });
};

fetchData().then(console.log).catch(console.error);

// Async/Await Example
const fetchAsync = async () => {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

fetchAsync();


// Export (file: utils.js)
export const sum = (a, b) => a + b;
export default function greet() { return 'Hello'; }

// Import (file: main.js)
import { sum } from './utils.js';
import greet from './utils.js';


try {
    throw new Error('Something went wrong');
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Cleanup');
}


const name = user && user.name; // Optional chaining alternative
const value = someVar ?? 'default'; // Nullish coalescing (if null/undefined)
const isValid = arr.length > 0 ? 'Yes' : 'No'; // Ternary operator

// Default Parameters
const greet = (name = 'Guest') => `Hello, ${name}`;

// Logical AND
user && doSomething();

// Optional Chaining (ES2020+)
const street = user?.address?.street;

const obj = { a: 1, b: 2 };
const jsonString = JSON.stringify(obj); // Object -> JSON
const newObj = JSON.parse(jsonString);  // JSON -> Object

