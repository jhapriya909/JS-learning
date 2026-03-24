
for(let i = 1; i<= 5; i++){

    console.log(" i = " , i);

}

console.log(i); // let is blocked scope redeclare is not allowed


for(var i = 1; i<= 5; i++){

    console.log(" i = " , i);

}

console.log(i);   // var is global scope 