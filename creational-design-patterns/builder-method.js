// Example of Factory Method

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
console.log(employee.employeeDetails());


// Example of Builder Method

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