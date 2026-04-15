let ch = 'A';

if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
    console.log("Alphabet");
}
else if (ch >= '0' && ch <= '9') {
    console.log("Digit");
}
else {
    console.log("Special character");
}