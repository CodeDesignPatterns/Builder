// import taco
import Taco from './Taco.js';
// build a taco
const taco = new Taco.Builder()
  .meat('beef')
  .cheese('cheddar')
  .shell('flour')
  .vegan(false)
  .salad(false)
  .build();

console.log(taco.toString());
