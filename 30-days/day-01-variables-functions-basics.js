
// Variables that changes with time
var age = 30;
let hour = 12;

// Constats doesn't change
const name = "Matz"

// Declaration without initialize
var age2;
let hour2;

// Initialization after declaration
age2 = 30;
hour = 12;

// Functions withot return 
function myFunction(parameter1, parameter2){

}
myFunction(value1, value2);

// Functions declaration with return
function sum(a, b){
    return a + b;
}
let result = sum(2,3);
console.log(result);

// Immediately Invoked Function Expression
(function (){
    console.log("I'm a IIFE");
})

// Expresion Function
let sayHello = function(){
    console.log("Hello!");
};
sayHello();

// Arrow function
let sayHello2 = () => console.log("Hello!");
sayHello2();
