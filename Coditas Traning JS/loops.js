// Normal for Loop 

for(let i = 0 ; i <= 10 ; i++ ){
    console.log(i)
}
console.log("----------------------------------------------------------------------")
const numbers = [1,2,3,4]

const person = {name:"Adhikar" , age:22}

for(let i=0 ; i<numbers.length;i++){
    console.log(numbers[i])
}
console.log("----------------------------------------------------------------------")
const keys = Object.keys(person)

for(let i=0;i<keys.length;i++){
    const key = keys[i];
    console.log(person[key])
}
console.log("----------------------------------------------------------------------")
for (let index in numbers)
{
    const ele = numbers[index]
    console.log(ele)
}
console.log("----------------------------------------------------------------------")
for (let index in person)
{
    const ele = person[index]
    console.log(ele)
}
console.log("----------------------------------------------------------------------")

// for of loop only for arrays

for(let ele of numbers){
    console.log(ele)
}
console.log("----------------------------------------------------------------------")

// While loop
let counter = 101
while(counter <= 110) {
 console.log(counter)
 counter ++;
}

// break and continue statememnts
  //twommorow