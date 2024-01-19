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