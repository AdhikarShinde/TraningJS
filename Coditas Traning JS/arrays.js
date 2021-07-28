const numbers = [1,2,3,4,5,6,7,8,9]

// accessing elements

numbers[1];
numbers[2]=50;

//properties

const len = numbers.length;

console.log(numbers)
//methods

//add elements at last

numbers.push(10);
console.log(numbers)
//add elements at first
numbers.unshift(0);
console.log(numbers)    
//add elements in middle
numbers.splice(5,0,108);
console.log(numbers)


// removing Element

// removing Element from end
let i = numbers.pop();
console.log(i)
// //add elements at first
numbers.shift(0);
console.log(numbers)    
// //add elements in middle
 numbers.splice(4,1);
 console.log(numbers)

//  removing + adding Elements
numbers.splice(0,5,100,102,103,104,105);
console.log(numbers)