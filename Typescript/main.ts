
import { Taco } from "./Taco";
import { TacoBuilder } from "./taco.builder";


const BUILT_TACO: Taco = new TacoBuilder()
.meat("chicken")
.cheese("cheddar")
.shell("hard")
.vegan(false)
.salad(true)
.build();

console.log(BUILT_TACO);
