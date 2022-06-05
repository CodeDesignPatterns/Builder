

class Builder {
    constructor() {
        this._taco = {
            meat: "",
            cheese: "",
            shell: "",
            vegan: false,
            salad: false
        };
    }
    meat(meat) {
        this._taco.meat = meat;
        return this;
    }
    cheese(cheese) {
        this._taco.cheese = cheese;
        return this;
    }
    shell(shell) {
        this._taco.shell = shell;
        return this;
    }
    vegan(vegan) {
        this._taco.vegan = vegan;
        return this;
    }
    salad(salad) {
        this._taco.salad = salad;
        return this;
    }
    build() {
        return this._taco;
    }
}
export const TacoBuilder = TacoBuilder;