"use strict";
exports.__esModule = true;
var taco_builder_1 = require("./taco.builder");
var BUILT_TACO = new taco_builder_1.TacoBuilder()
    .meat("chicken")
    .cheese("cheddar")
    .shell("hard")
    .vegan(false)
    .salad(true)
    .build();
console.log(BUILT_TACO);
