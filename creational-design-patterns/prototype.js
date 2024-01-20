function Employee(name) {
    this.name = name;
}

Employee.prototype.getName = function () {
    console.log(this.name);
}

const emp1 = new Employee('Avinash');
emp1.getName();

const emp2 = new Employee('Vinay Maurya');
emp2.getName();