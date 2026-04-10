// Electricity bill:
// 0–100 → ₹5/unit
// 100–200 → ₹7/unit
// 200 → ₹10/unit

let units = 150;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
}
else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log(bill);