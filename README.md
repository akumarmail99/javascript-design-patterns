# Javascript Design Patterns

## Creational Design Patterns

### Singleton Design Pattern:-
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