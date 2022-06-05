import Taco from "./Taco.js";
const BUILT_TACO = new Taco
    .meat("chicken")
    .cheese("cheddar")
    .shell("hard")
    .vegan(false)
    .salad(true)
    .build();
console.log(BUILT_TACO);

console.log(tacoNew);