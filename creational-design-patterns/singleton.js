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