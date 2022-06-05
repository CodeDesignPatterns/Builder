class Taco {
  #meat = null;
  #cheese = null;
  #shell = null;
  #vegan = false;
  #salad = false;

  static Builder = class {
    #meat = null;
    #cheese = null;
    #shell = null;
    #vegan = false;
    #salad = false;

    meat(meat) {
      this.#meat = meat;
      return this;
    }

    cheese(cheese) {
      this.#cheese = cheese;
      return this;
    }

    shell(shell) {
      this.#shell = shell;
      return this;
    }

    vegan(vegan) {
      this.#vegan = vegan;
      return this;
    }

    salad(salad) {
      this.#salad = salad;
      return this;
    }

    build() {
      const taco = new Taco(
        this.#meat,
        this.#cheese,
        this.#shell,
        this.#vegan,
        this.#salad
      );
      return taco;
    }
  };

  constructor(meat, cheese, shell, vegan, salad) {
    this.#meat = meat;
    this.#cheese = cheese;
    this.#shell = shell;
    this.#vegan = vegan;
    this.#salad = salad;
  }

  toString() {
    return `
            Meat: ${this.#meat}
            Cheese: ${this.#cheese}
            Shell: ${this.#shell}
            Vegan: ${this.#vegan}
            Salad: ${this.#salad}
        `;
  }
}

export default Taco;
