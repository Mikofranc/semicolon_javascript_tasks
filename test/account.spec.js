const {Account} = require("../ClassBasedProgramming/Account.js");
 test("Account is not null",() =>{
    let newAccount = new Account("micheal", "micheal@gmail.com", "0901146265")
    expect(newAccount).not.toBeNull();
 });