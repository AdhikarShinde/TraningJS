const outer  = () => {
    let counter = 1

    const inner = () => {
        
        console.log(counter);
        counter ++;
    }
    return inner
}

const inner = outer()

inner()
inner() 
inner()


// HOF Higher order function
//Factory Pattern

const interestCal = (int_rate) => {
    return (principle,installment) => {
        return principle * installment * int_rate / 100;
        }
} 

const carloan = interestCal(10)
const homeloan = interestCal(8)

console.log(carloan(10000,30))
console.log(homeloan(10000,30))