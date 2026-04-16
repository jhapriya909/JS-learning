let num = 1234;
let sum = 0;

if (num > 0) {
    let digit = num % 10;
    
    sum += (digit % 2 === 0) ? digit : 0;
    
    num = Math.floor(num / 10);
}

console.log("Sum of even digits:", sum);