  async function hello (){
    console.log(" Hello")

}

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");

        resolve("success");
        reject("network error");
    });
};