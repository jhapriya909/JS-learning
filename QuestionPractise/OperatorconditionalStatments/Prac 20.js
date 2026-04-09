// Password validator:
// length ≥ 8
// must contain number
// output: valid/invalid

let password = "abc12345";

let hasNumber = false;

for(let i = 0; i<=password.length; i++){
    if(password[i] >= '0' && password[i] <= '9'){
        hasNumber = true;
    }

}

if(password.length >= 8 && hasNumber === true){
    console.log(" valid");
}

else{
console.log(" invalid");
}
