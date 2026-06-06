let arr = [1,6,9,8,7]

const output = arr.reduce((prev, curr)=>{

    return prev > curr ? prev : curr;
}) 

console.log(output) ///