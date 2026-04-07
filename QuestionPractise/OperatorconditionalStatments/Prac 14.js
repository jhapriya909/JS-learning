//Find Second Largest (using conditions only)
// Input: 10, 20, 15 → 15

let a = 10;
let b = 20;
let c = 15;

if ((a > b && a < c) || (a > c && a < b)) {
    console.log(a);
}
else if ((b > a && b < c) || (b > c && b < a)) {
    console.log(b);
}
else {
    console.log(c);
}

