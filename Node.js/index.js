// import taco
import Taco from './Taco.js';
// build a taco
const taco = new Taco.Builder()
  .setMeat('beef')
  .setCheese('cheddar')
  .setShell('flour')
  .setVegan(false)
  .setSalad(false)
  .build();

console.log(taco.toString());
