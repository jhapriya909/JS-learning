//   async function hello (){
//     console.log(" Hello")

// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");

//         resolve("success");
//         reject("network error");
//     });
// };


function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" whether data");
            resolve(200);

        },2000);
    });
}

async function getWhetherData(){

   await api();
   await api();
}



function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" data",dataId);
            resolve("success");

        },2000);
    });
}

async function getAllData(){
     console.log(" getting data1");
    await getData(1);
   console.log("getting  data2");
     await getData(2);
        console.log("getting  data3");
      await getData(3);
         console.log("getting  data4");

}

//IIFE ---> automatically excute code

(async function(){
     console.log(" getting data1");
    await getData(1);
   console.log("getting  data2");
     await getData(2);
        console.log("getting  data3");
      await getData(3);
         console.log("getting  data4");

})();




