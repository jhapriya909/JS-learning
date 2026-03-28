
// of loop
// let prices = [250, 645,300, 900, 50];
// let i = 0;
// for(let  val of prices){
//    let  offer = val / 10;
//   prices[i] = prices[i] - offer ;
//   console.log(`Value of after offer = ${prices[i]}`);
//   i++;


// }

// for loop 

let items = [250, 645,300, 900, 50];

for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;

}

console.log(items);


