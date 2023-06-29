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

fruits.push('dragon fruit');      // it works because same type
// fruits.push(3);               // will give error, because type is different
// fruits[1] = 2;                // will give error, because type is different

let payNum = [201, 202, 203];

payNum.push(204);                     // it works because same type
// payNum.push('204');               // will give error, because type is different
// payNum[1] = '204';                // will give error, because type is different

let mixedType = ['apple', 10, 'banana', 20, 30]

mixedType.push('cherry');               // it works because it is mixed items in the array
mixedType.push(40);                     // it is mixed items in the array
mixedType[0] = 205;                     // it is mixed items in the array

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

let character: string;
let age: number;
let isLogged: boolean;

isLogged = true;
// age='toyota';   //wouldnot allow because age declared as number

let bike: string[] = [];
bike.push('kawasaki');
bike[0] = 'kawasaki'

// union types

let bus: (string | number | boolean)[] = [];

bus.push('scania');
bus.push('2010');
bus.push(true);
console.log(bus)

let uid: string | number;
uid = '123';
uid = 455;

// objects

let busType: object;
busType = { name: 'renault', year: 2001 };

let bikeType: {
    name: string,
    model: string,
    year: number,
    prod: boolean
};

bikeType = {
    name: 'honda',
    model: 'cz101',
    year: 2010,
    prod: true
};

// dynamic (any) types
// this any type is used in rare cases, because it works exactly like js
// it is recommended to use but can be useful in certain situation

let dog: any = 25;

console.log(dog);

dog = 'dole';
console.log(dog);

dog = false;
console.log(dog);

dog = { name: 'rot', age: 5 };
console.log(dog);

let dogObj: { name: any, age: any }
dogObj = { name: 'palm', age: 2 }
console.log(dogObj)                 // {name: 'palm', age: 2}

dogObj = { name: 25, age: 'palm' }
console.log(dogObj)                 // {name: 25, age: 'palm'}

let dogMixed: any[] = [];

dogMixed.push(10);
dogMixed.push('dolmation');
dogMixed.push(false);
console.log(dogMixed);              // [10, 'dolmation', false]

//********* */

// functions

let greet = () => {
    console.log("Hello world");
}

// The above can be done in the following way;

let greeting: Function;

greeting = () => {
    console.log("Hello again");
}

greet();

greeting();

const multiply = (a: number, b: number) => {
    console.log(a * b);
};
multiply(4, 45);                    // 180

// passing third parameter as an option

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);                   // 8 'add'
    console.log(c);                       // undefined
};
add(4, 4, 'add');
add(4, 6);

// passing third parameter as default value

const subs = (a: number, b: number, c: number | string = 1) => {
    console.log(a - b);         // 8  and 10
    console.log(c);             // substration 1 as default value
};
subs(12, 4, 'substration');     // 8 and substration
subs(15, 5);                    // 10  and 1 which is default value                    


// returning a value in funtion

const division = (a: number, b: number) => {
    return (a / b);
};
let result = division(12, 4);
console.log(result)             // 3

/*************** */

// Type Alias in functions

const logDetailsA = (uid: string | number, item: string) => {
    console.log(`${item} has a uid ${uid}`)
}

const greetA = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} has a uid ${user.uid}`)
}

// the above functions can be using by defining type before function

type StringOrNum = string | number;
type userDetail = { name: string, uid: StringOrNum }

const logDetailsB = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid ${uid}`)                 // Baseball has a uid 3r8Dr
};
logDetailsB('3r8Dr', 'Baseball');

const greetB = (user: userDetail) => {
    console.log(`${user.name} has a uid ${user.uid}`)       // Renault has a uid 43t53fw42w
}
greetB({ name: 'Renault', uid: '43t53fw42w' })

/************* */

// Funtion signature

// example 1

let greet1: (a: string, b: string) => void;

greet1 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};

// example 2

let calc: (x: number, y: number, a: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === 'add') {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
};

// example 3

let logDetailC : (obj: {name:string, age:number}) => void;

logDetailC=(person: {name:string, age:number}) => {
    console.log(`${person.name} is ${person.age} years`)
}



