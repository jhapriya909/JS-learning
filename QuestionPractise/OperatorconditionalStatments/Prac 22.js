// Discount system:
// amount > 1000 → 20%
// 500 → 10%
// else → no discount

let amount = 1500;
let discount = 0;

if (amount > 1000) {
    discount = amount * 0.2;
}
else if (amount > 500) {
    discount = amount * 0.1;
}
else {
    discount = 0;
}

let finalAmount = amount - discount;

console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);
