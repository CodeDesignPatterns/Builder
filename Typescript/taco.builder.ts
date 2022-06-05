import { Taco } from "./Taco";

export class TacoBuilder {
    private readonly _taco: Taco;

    constructor() {
        this._taco = {
            meat: "",
            cheese: "",
            shell: "",
            vegan: false,
            salad: false
        };
    }

    meat(meat: string): TacoBuilder {
        this._taco.meat = meat;
        return this;
    }

    cheese(cheese: string): TacoBuilder {
        this._taco.cheese = cheese;
        return this;
    }

    shell(shell: string): TacoBuilder {
        this._taco.shell = shell;
        return this;
    }
    vegan(vegan: boolean): TacoBuilder {
        this._taco.vegan = vegan;
        return this;
    }
    salad(salad: boolean): TacoBuilder {
        this._taco.salad = salad;
        return this;
    }


    build(): Taco {

        return this._taco;
    }
}

