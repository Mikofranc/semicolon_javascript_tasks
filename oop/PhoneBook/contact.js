class Contact{
    constructor(){
        var _name;
        var _phoneNumber;

        this.getName=() =>{
            return _name;
        }
        this.setName=(newName) => {
            _name = newName;
        }
        this.getPhoneNumber=() =>{
            return _phoneNumber;
        }
        this.setPhoneNumber=(phone) => {
            _phoneNumber = phone;
        }
    }

    addContact(name, phonenumber){
      this.setPhoneNumber(phonenumber);
      this.setName(name);
    }
    contactDetails(){
        return`${this.getName()},  ${this.getPhoneNumber()}`
    }
}
// module.exports ={Contact};

var contacts = [];
var c = new Contact();
c.addContact("mike","09011480776")
contacts.push(c);
console.log(contacts)

