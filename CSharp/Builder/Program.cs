using Builder;

// This is an example of the Builder pattern in C#.
// We are going to build a couple of tacos.


// Taco1 has everything and is NOT vegan
var taco1 = new Taco.Builder()
  .Meat("Beef")
  .Cheese("Tasty")
  .Shell("Hard")
  .Salad(true)
  .Build();

Console.WriteLine(taco1);

// Taco2 has no meat and IS vegan.
// The use of default values in the Taco object will give the 'Meat' property a 'None' string making the output easier to read.
var taco2 = new Taco.Builder()
  .Cheese("Tasty")
  .Shell("Hard")
  .Vegan(true)
  .Salad(true)
  .Build();

Console.WriteLine(taco2);