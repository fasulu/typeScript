"use strict";
// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
// const circ = (diameter:number) => {
//   return diameter*Math.PI;
// }
// console.log(circ(5.6));
//********************* */
//arrays
let fruits = ['apple', 'banana', 'cherry'];
fruits.push('dragon fruit'); // it works because same type
// fruits.push(3);               // will give error, because type is different
// fruits[1] = 2;                // will give error, because type is different
let payNum = [201, 202, 203];
payNum.push(204); // it works because same type
// payNum.push('204');               // will give error, because type is different
// payNum[1] = '204';                // will give error, because type is different
let mixedType = ['apple', 10, 'banana', 20, 30];
mixedType.push('cherry'); // it works because it is mixed items in the array
mixedType.push(40); // it is mixed items in the array
mixedType[0] = 205; // it is mixed items in the array
//********************* */
// Objects
let car = {
    name: 'toyota',
    model: 'carola',
    color: 'black',
    year: 2015,
    inLine: true
};
car.year = 2016;
car.name = 'nissan';
// car.skill = ['race']    // would not work because initial object structure does not contain 'skill'
// car = {
//     name: 'toyota',
//     model: 'carola',
//     color:'black',
//     year: 2015,
//     inLine: true,
//     skill: 'race'
// };                     // would not work because initial object structure does not contain 'skill'
//******************** */
// explicit types
let character;
let age;
let isLogged;
isLogged = true;
// age='toyota';   //wouldnot allow because age declared as number
let bike = [];
bike.push('kawasaki');
bike[0] = 'kawasaki';
// union types
let bus = [];
bus.push('scania');
bus.push('2010');
bus.push(true);
console.log(bus);
let uid;
uid = '123';
uid = 455;
// objects
let busType;
busType = { name: 'renault', year: 2001 };
let bikeType;
bikeType = {
    name: 'honda',
    model: 'cz101',
    year: 2010,
    prod: true
};
// dynamic (any) types
// this any type is used in rare cases, because it works exactly like js
// it is recommended to use but can be useful in certain situation
let dog = 25;
console.log(dog);
dog = 'dole';
console.log(dog);
dog = false;
console.log(dog);
dog = { name: 'rot', age: 5 };
console.log(dog);
let dogObj;
dogObj = { name: 'palm', age: 2 };
console.log(dogObj); // {name: 'palm', age: 2}
dogObj = { name: 25, age: 'palm' };
console.log(dogObj); // {name: 25, age: 'palm'}
let dogMixed = [];
dogMixed.push(10);
dogMixed.push('dolmation');
dogMixed.push(false);
console.log(dogMixed); // [10, 'dolmation', false]
//********* */
// functions
let greet = () => {
    console.log("Hello world");
};
// The above can be done in the following way;
let greeting;
greeting = () => {
    console.log("Hello again");
};
greet();
greeting();
const multiply = (a, b) => {
    console.log(a * b);
};
multiply(4, 45); // 180
// passing third parameter as an option
const add = (a, b, c) => {
    console.log(a + b); // 8 'add'
    console.log(c); // undefined
};
add(4, 4, 'add');
add(4, 6);
// passing third parameter as default value
const subs = (a, b, c = 1) => {
    console.log(a - b); // 8  and 10
    console.log(c); // substration 1 as default value
};
subs(12, 4, 'substration'); // 8 and substration
subs(15, 5); // 10  and 1 which is default value                    
// returning a value in funtion
const division = (a, b) => {
    return (a / b);
};
let result = division(12, 4);
console.log(result); // 3
/*************** */
// Type Alias in functions
const logDetailsA = (uid, item) => {
    console.log(`${item} has a uid ${uid}`);
};
const greetA = (user) => {
    console.log(`${user.name} has a uid ${user.uid}`);
};
const logDetailsB = (uid, item) => {
    console.log(`${item} has a uid ${uid}`); // Baseball has a uid 3r8Dr
};
logDetailsB('3r8Dr', 'Baseball');
const greetB = (user) => {
    console.log(`${user.name} has a uid ${user.uid}`); // Renault has a uid 43t53fw42w
};
greetB({ name: 'Renault', uid: '43t53fw42w' });
/************* */
// Funtion signature
// example 1
let greet1;
greet1 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// example 3
let logDetailC;
logDetailC = (person) => {
    console.log(`${person.name} is ${person.age} years`);
};
