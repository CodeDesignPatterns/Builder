import { taco } from "./Taco.js";

var tacoNew = new taco()
    .meat("chicken")
    .cheese("cheddar")
    .shell("hard")
    .vegan(false)
    .salad(true);

console.log(taco);