const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");

        resolve("success");
        reject("network error");
    });
};

let promise = getPromise();

promise.then((res) => {
    console.log("Promise fulfilled", res);
});

promise.catch((err) => {
    console.log("Rejected", err);
});