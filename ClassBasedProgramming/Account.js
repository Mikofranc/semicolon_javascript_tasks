class Account{
    constructor(name, email, bvn){
        this.name = name;
        this.email = email;
        this.bvn = bvn;
        this.accountNumber = 
    }
    set name(newName){
        this.name = newName;
    }
    get name(){
        return this.name;
    }
}
module.exports ={Account}