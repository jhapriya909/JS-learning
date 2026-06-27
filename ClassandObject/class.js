class ToyotaCar {

    constructor(brand,mailege){
        console.log(" creating new object")
        this.brand = brand;
        this.mailege = this.mailege;

    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}
let fortuner  = new ToyotaCar(" forturner",10);//constructor
// fortuner.setBrand("fortuner"); 
let lexus = new ToyotaCar("lexus", 60);// costructor
// lexus.setBrand = new ToyotaCar();
console.log(lexus);