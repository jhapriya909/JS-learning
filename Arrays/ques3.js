let prices = [250, 645, 300,900, 500];

for(let i = 0; i < prices.length; i++){

    let offer = prices[i] * 15 / 100;

    prices[i] -= offer;

}
console.log(prices);