// Check Variable Type
// Take a variable and print:
// "String" if it is a string
// "Number" if it is a number
// "Other" for any other type

let variable = "Hello"; // ya koi number ya boolean bhi ho sakta hai

if(typeof variable === "string"){
    console.log("String");
}
else if(typeof variable === "number"){
    console.log("Number");
}
else{
    console.log("Other");
}