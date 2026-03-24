let gameNumber = 25;
let userNumber = prompt(" Guess the game number:");

while (userNumber != gameNumber) {
    userNumber = prompt(" you entered wrong number. Please Guess again");
}
console.log(" congratulations , you entered the right number");