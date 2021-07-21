// Concatinatation

const greeting = "Hello";
const name = "Adhikar";

// old way

let fullGreering = greeting + " " + name;
console.log(fullGreering);

// New Way  --> ES6 and above

fullGreering = `${greeting} ${name}`;
console.log(fullGreering);

// Property 

const sentence = "Hello World"
const len = sentence.length;
console.log(len);

//Methods
// Low Priority

const vari = "Coditas : Code is Art";
const up = vari.toLocaleUpperCase();
console.log(up);
const down = vari.toLocaleLowerCase();
console.log(down);

//Methods
//Medium Priority
const month = "july"
const qoute  = "Hello World of programing"
const x = qoute.substring(0,11);

console.log(x)