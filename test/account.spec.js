const {Account} = require("../ClassBasedProgramming/Account.js");
 test("Account is not null",() =>{
    let newAccount = new Account("micheal", "736545454", "0901146265")
    expect(newAccount).not.toBeNull();
 });

 test("Test to change  account name",() =>{
    let newAccount1 = new Account("micheal", "4132423", "09011480776")
    newAccount1.setName("mike")
    expect(newAccount1.getName()).toBe("mike")
 });

 test("Test to check  accountNumber",() =>{
    let newAccount1 = new Account("micheal", "4132423", "09011480776")
    newAccount1.setName("mike")
    expect(newAccount1.getAccountNumber()).toBe("9011480776")
 });
 
 test("test to make deposit",() =>{
    let newAccount2 = new Account("mike", "42365", "09011480776")
    let balance =newAccount2.deposit("9011480776", 2000);
    expect(newAccount2.getBalance).toBe(2000)

 });