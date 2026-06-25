const employee = {
    calcTax(){
        console.log(" tax rate is 10%")
    },
};

const karan = {
    salary:60000,
    calcTax(){
        console.log(" tax rate is 20%")
    },

};
karan__proto__ = employee;