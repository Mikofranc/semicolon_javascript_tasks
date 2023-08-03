class User{
    constructor(userName, password, email){
        this.email =email;
        this.password = password;
        this.userName = userName;
        // this.account = [];
    }
    // accountSize(){
    //     return this.account.length;
    // }
    createAccount(){
    
        let obj = {
            userName : this.userName,
            password : this.password,
            email : this.email
        }
        // this.account.push(obj);
        console.log("account created")
    }
    login(userName, password){
        Accounts = Accounts.filter(a =>{
            
        })
    }
}

var newUSer =new User("micheal", 1234, "miiko@gmail.com")
newUSer.createAccount();
console.log(newUSer)
// console.log(newUSer.accountSize())
