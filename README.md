# Javascript Design Patterns

## Creational Design Patterns

### Singleton Design Pattern
- The Singleton pattern limits the number of instances of a particular object to just one.
- Singleton is useful in a situations where system-side actions needs to be coordinated from a central place.

Example of Singleton Design Pattern
```
const Singleton = (function(){
    let instance;
    function createInstanse() {
        const newInstanse = new Object("new Instanse created.");
        return newInstanse;
    }
    function getInstanse() {
        if (!instance) {
            instance = createInstanse();
        }
        return instance;
    }
    return {
        getInstanse
    }
})();
``` 
- For more info visit: https://www.dofactory.com/javascript/design-patterns/singleton

### Factory Method Pattern
- It allows you to create similar type of defferent objects.
- It reduce the redundancy of the code.

```
const Factory = function() {
    this.createEmloyee = function(type) {
        let employee;

        if (type == 'full-time') {
            employee = new FullTime();
        } else if (type == 'part-time') {
            employee = new PartTime();
        } else if (type == 'temporary') {
            employee = new Temporary();
        } else if (type == 'contractor') {
            employee = new Contractor();
        }

        employee.type = type;

        employee.getPayDetail = function() {
            console.log(`${type} employee got ${employee.hourly}/hourly`);
        }

        return employee;
    }

}
function FullTime() {
    this.hourly = '$50'
}

function PartTime() {
    this.hourly = '$40';
}

function Temporary() {
    this.hourly = '$30';
}

function Contractor() {
    this.hourly = '$20';
}


const factoryIns1 = new Factory().createEmloyee('part-time');

factoryIns1.getPayDetail();
```
- https://www.dofactory.com/javascript/design-patterns/factory-method

### Builder Method Pattern

- Builder method pattern create object in steps. Where first we assign required value and then ask for creating an object.
- It is useful when we want to create a complex object.
- It is designed to overcome the challanges of Factory Pattern
    - No need to pass parameter while creating an instance.
    - Suppose a Factory Method has bif number of parameters to pass, which really had to remember parameter sequence. So with the Builder Method we can go with the minimum number of parameters.

Example of Factory Pattern

```
const EmployeeFactory = function (firstName, middleName, lastName, age, weight, gender, city, state, country, salary ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
    this.city = city;
    this.state = state;
    this.country = country;
    this.salary = salary;

    this.employeeDetails = function() {
        console.log(`
            Name: ${firstName} ${middleName} ${lastName}
            Age: ${age}
            Weight: ${weight}
            Gender: ${gender}
            City: ${city}
            State: ${state}
            Country: ${country}
            Salary: ${salary}
        `);
    }

    return this;
}

const employee = new EmployeeFactory('Avinash', 'Kumar', 'Kushwaha', 32, 65, 'M', 'Patna', 'Bihar', 'India', '$100');
```

Example of Builder Pattern (same example converted into Builder Method)

```
const EmployeeBuilder = function (firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.setAge = (age) => {
        this.age = age;
        return this;
    }

    this.setWeight = (weight) => {
        this.weight = weight;
        return this;
    }

    this.setGender = (gender) => {
        this.gender = gender;
        return this;
    }

    this.setCity = (city) => {
        this.city = city;
        return this;
    }

    this.setState = (state) => {
        this.state = state;
        return this;
    }

    this.setCounter = (country) => {
        this.country = country;
        return this;
    }

    this.setSalary = (salary) => {
        this.salary = salary;
        return this;
    }

    this.employeeDetails = function() {
        console.log(`
            Name: ${this.firstName} ${this.middleName} ${this.lastName}
            Age: ${this.age}
            Weight: ${this.weight}
            Gender: ${this.gender}
            City: ${this.city}
            State: ${this.state}
            Country: ${this.country}
            Salary: ${this.salary}
        `);
    }

    this.build = function() {
        if (!this.firstName) {
            throw new Error('Can not create build without first name');
        }
        return this;
    }
}

const empBuildrObj = new EmployeeBuilder('Avinash', 'Kumar', 'Kushwaha').setAge(32).setWeight(65).setGender('M').build();
empBuildrObj.employeeDetails();
```