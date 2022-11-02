const Employee = require("./Employee")
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officenumber = officeNumber;
    }
    getofficeNumber(){
        return this.officenumber;
    }

    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;



