const a = () => "Hello Good Morning"
const b = () => "Adhikar"

const func = func => func();

const z = func(a)
console.log(z)

const x = func(b)
console.log(x)

