// function myfunction(){
//     console.log(" Hello World!")

//     console.log(" This is first topic of function code!");
// }

// myfunction();
// myfunction();


function myfunction(msg,n){

    // parameter---> input
    console.log(msg*n);
}

myfunction(" learning JS",100); // argument

// output ---> NaN ---> not a number means invalid output


// ----> Sum of two number

// function sum(a,b){
//     console.log(a+b);
// }

// sum(123,345);


function sum(x,y){
    s = x + y;
    console.log(" before return");
    return s;
}
let val = sum(3,4)
console.log(val);