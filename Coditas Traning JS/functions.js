//Functions 

function fun() {
    console.log("Good Morning")
}

// fun;
fun();

//Parameterized Function

function Person(name,age) {
    console.log(`My Name is ${name} and my age is ${age}`)
}

Person("Adhikar",12)


//Not Parameterized return function

function answer(){
    return "Welcome";
    const g=9;
}

const msg = answer ();

console.log(msg)


function GetData(name) {
    const p = `Hello, ${name}`

    return p;
}

const p = GetData("Luffy")
console.log(p)

//function expression function anonymus

const hidden = function() {
    console.log("Anononymus")
}

hidden();

const add = function(n1,n2) {
    return `Addition of ${n1} and ${n2} is ${n1+n2}`
}

const ans = add(1,1)
console.log(ans)

//(fat) arrow function 

const subb = (n1,n2) => {
    return n1-n2
}

subb(1,1)

// inplicit return
const multipy = (n1,n2) => n1*n2;

const z = multipy(1,5)
console.log(z)

const getSenti = word => `This is a ${word}`;

const x = getSenti("Zoro");
console.log(x)