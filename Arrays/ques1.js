// let studentmarks = [85,97,44,37,76,60];
// let sum = [85+97+44+37+76+60] /6;
// let avg = sum;

// for(let marks of studentmarks){

//     console.log(avg);

// }

let studentmarks = [85,97,44,37,76,60];

let sum = 0;

for(let val of studentmarks){
         sum += val; //sum = sum + val;
}

let avg = sum / studentmarks.length

console.log(`Average marks of entire class = ${avg}`);



