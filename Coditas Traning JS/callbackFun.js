// function passed as a parameter to another function

const greeting = () => "WellCome User"
const user = () => "Adhikar"

// const combine = greeting, user () => `${}`

const callBack  = fun => fun();

const a = callBack(greeting)

console.log(a)