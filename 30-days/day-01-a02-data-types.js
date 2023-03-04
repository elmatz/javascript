// Numbers
let age = 30;
let salary = 1500.50;
const PI = 3.1416;

// Scientific notation
const bigNumber = le6; // 1 million
const smallNumber = le-6; // 0.000001

// Strings
const myName = "Max";
const lastName = 'Santos';

// Concatenate strings
console.log("Hello, " + myName + " " + lastName + "!"); // "Hello, Max Santos!"

// Template literal
console.log(`Hello, ${myName} ${lastName}!`); // "Hello, Max Santos!"

// Strings Metods
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase);
console.log(myName.substring(0, 1));

// Objects
const person = {
    name:"Perengano",
    rank: 9545,
    favoriteCourse: {
        name:"Javascript Basics",
        classes:30,
        duration:"2 hours"
    }
};

// Access to properties of the object
console.log(person.name);
console.log(person.favoriteCourse.name);
console.log(person["rank"]);

// Booleans
let courseFinished = true;
let readFinished = false;

// Using typeof
typeof "#Challange"; // string
typeof 30; // number
typeof true; // boolean
typeof {}; // object
typeof []; // objetc but it's an array

// Null
const myName2 = null;
console.log(myName2);

// undefined
let myName3;
console.log(myName3);

// Diferences between Null and Undefined
let cat = {
    name:"Michi",
    age:2,
    owner:null
};
console.log(cat.owner); // Null

// Symbol: it's used to representy unique values
const symbol = Symbol();

let dog = {
    name: "Mofles",
    age: 6,
    [symbol]:"Unique Identifier"
};
console.log(dog[symbol]);

const symbolCats = Symbol("Unique Identifier to cats");

// Bigint
const bigNumber2 = 12345678901234567890n;
console.log(bigNumber2 + 1n); // 12345678901234567891n
console.log(bigNumber2 * 2n); // 2469135780246913578n
console.log(bigNumber2 / 3n); // 411218936707805260n

