class Account{
    static bank = "zenith bank";
    branch = "yaba";
    constructor(name, bvn, phone){
        var _name = name;
        this.bvn = bvn;
        this.phone = phone;
        var _accountNumber = phone.slice(1);
        var _balance =0;

        this.getName = ()=>{
            return _name;
        };
        this.setName = (newName) =>{
            _name = newName;
        };

        this.getAccountNumber = () =>{
            return _accountNumber;
        }

        this.getBalance = () =>{
            return _balance;
        }
    }
    deposit(accountNumber, amount){
        if(accountNumber == getAccountNumber()){
            _balance += amount;
        }else{
            return 0;
        }
    }
   
}
module.exports ={Account};