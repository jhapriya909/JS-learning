let newBtn = document.createElement("button");
newBtn.innerHTML = "Click me!";
console.log(newBtn);
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";


document.querySelector("body").prepend(newBtn);


