const {Contact} = require("./contact");

var contacts = [];
var c = new Contact()
c.addContact("john", 99293737);
contacts.push(c);
console.log(contacts)