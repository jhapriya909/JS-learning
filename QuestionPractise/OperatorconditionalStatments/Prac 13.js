//Number divisible by 3 and 5
// Input: 15 → "Divisible by both"

let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both");
}
else if (number % 3 === 0) {
    console.log("Divisible by 3");
}
else if (number % 5 === 0) {
    console.log("Divisible by 5");
}
else {
    console.log("Not  divisible by 3 or 5");
}