
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); end node(inside)
// div.prepend(newBtn); start node(inside)
//div.before(newBtn); before node(outside)
//div.after(newBtn); after node(outside)


let newheading = document.createElement("h1");
newheading.innerHTML = "<i>Hi, this  is new</i>";
document.querySelector("body").prepend(newheading);

let p = document.querySelector("p");
p.remove();

