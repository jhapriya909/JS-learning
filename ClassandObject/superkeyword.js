class Person{
    constructor(name){
        this.species = " home sapines"
        this.name = name;

    }
    eat(){
        console.log(" Eat");
    }
}

class Engineer extends Person{
    constructor(name)
    {
        super(name);
    }
    work(){
        super.eat();
        console.log(" problem solving  , build something");
    }
}

let priyaObject = new Engineer();