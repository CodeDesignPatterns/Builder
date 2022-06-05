"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taco_builder_1 = require("./taco.builder");
const BUILT_TACO = new taco_builder_1.TacoBuilder()
    .meat("chicken")
    .cheese("cheddar")
    .shell("hard")
    .vegan(false)
    .salad(true)
    .build();
console.log(BUILT_TACO);
