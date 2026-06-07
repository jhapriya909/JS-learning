const words = ["Hello", "World", "JavaScript"];

const totalChars = words.reduce((acc, curr) => {
    return acc + curr.length;
}, 0);

console.log(totalChars);