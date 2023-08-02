function Human(feet, hands, mouth){
    this.feet = feet;
    this.hands = hands;
    this.mouth = mouth;

    this.aboutMe =() => {
        return `I have ${this.feet} feet, ${this.hands} hands and ${this.mouth} mouth`;
    }
}

function Employee(feet, hands, mouth, designation){
    Human.call(this, feet, hands, mouth);
    this.designation = designation;
}
let employee = new Employee(2, 2, 1, "Texas");
Employee.prototype.age = 22;

console.log(employee.aboutMe())