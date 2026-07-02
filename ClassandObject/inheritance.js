// class Parent{
//     hello(){
//         console.log("Hello")
//     }
// }
// class child extends Parent{};
// let object = new child;

class Person{
    eat(){
        console.log(" Eat");
    }

    sleep(){
        console.log(" sleep")
    }
}

class Engineer extends Person{
    work(){
        console.log(" problem solving  , build something");
    }
}

let priyaObject = new Engineer();