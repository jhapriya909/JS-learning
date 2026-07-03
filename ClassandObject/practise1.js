let DATA = " secret information";

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ",DATA)
    }
}

class Admin extends user{
     constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = " some new value";
    };
}
let student1 = new user("anmol","abc@gmail.com" )
let student2 = new user(" soni","soni@gmail.com")

let teacher1 = new user(" dean","dean@gmail.com")
let teacher2 = new user(" lectural","lectural@gmail.com")

let admin1 = new Admin(" name" , " admin@gmail.com");

