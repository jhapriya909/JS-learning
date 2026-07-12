const URL = "https://catfact.ninja/fact";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting data...");

    const response = await fetch(URL);
    const data = await response.json();

    factPara.innerText = data.fact;
};

// function getFacts(){
//     fetch(URL)
//     .then((Response)=>{
//         return Response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.inerText = data.fact;
//     });

// }

btn.addEventListener("click", getFacts);