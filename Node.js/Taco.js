export function taco() {
    return "taco";
  }

class Taco {



    constructor() {
        this.meat = undefined;
        this.cheese = undefined;
        this.shell = undefined;
        this.vegan = undefined;
        this.salad = undefined;
    }






    meat(meat) {
        this.meat = meat;
        return this;
    }
    cheese(cheese) {
        this.cheese = cheese;
        return this;
    }

    shell(shell) {
        this.shell = shell;
        return this;
    }

    vegan(vegan) {
        this.vegan = vegan;
        return this;
    }

    salad(salad) {
        this.salad = salad;
        return this;
    }


}

