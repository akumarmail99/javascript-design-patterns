
class Button {
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
}

class LightThemeButton extends Button {
    lightThemeColor = 'lightGray';
    constructor(name, text) {
        super(name, text);
    }
}

class DarkThemeButton extends Button {
    darkThemeButton = 'darkColor';
    constructor(name, text) {
        super(name, text);
    }
}

//-----------------------------------

class UIFactory {
    createButton(){}
}

class LightThemeFactory extends UIFactory {
    constructor(){
        super();
    }
    createButton(name, text) {
        return new LightThemeButton(name, text);
    }
}

class DarkThemeFactory extends UIFactory {
    constructor(){
        super();
    }

    createButton(name, text) {
        return new DarkThemeButton(name, text);
    }
}

// -------------------------------------------

const lightButton = new LightThemeFactory().createButton('LightButton', 'LightGrayText');
const darkButton = new DarkThemeFactory().createButton('DarkButton', 'DarkText');

console.log(lightButton);
console.log(darkButton);