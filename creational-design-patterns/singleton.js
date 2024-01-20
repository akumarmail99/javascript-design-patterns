// Singleton Design Pattern in ES5

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

const instanse_one = Singleton.getInstanse();
const instance_two = Singleton.getInstanse();

console.log(instanse_one === instance_two);


// Singleton Design Pattern in ES6

class SingletonES6 {
    constructor() {
        if (SingletonES6.instance) {
            return SingletonES6.instance;
        }
        SingletonES6.instance = this;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const obj1 = new SingletonES6();
obj1.setName('Avinash');
console.log(obj1.getName());


const obj2 = new SingletonES6();
obj2.setName('Avinash Kumar');
console.log(obj2.getName());

console.log(obj1.getName());