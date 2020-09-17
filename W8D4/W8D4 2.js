
// Phase I: Callbacks
// Write a function titleize that takes an array of names and a function (callback).
// titleize should use Array.prototype.map to create a new array full of titleized 
// versions of each name - titleize meaning "Roger" should be made to read 
// "Mx. Roger Jingleheimer Schmidt".Then pass this new array of names to the callback, 
// which should use Array.prototype.forEach to print out each titleized name.

function titleize (args, callback) {
  
  let arr = args.map(callback);
  arr.forEach(word => console.log(`Mx. ${word} Jingleheimer Schmidt`));
    // for (let i = 0; i < arr.length; i++) {
    //   console.log(`Mx. ${arr[i]} Jingleheimer Schmidt`);
    // }
}
//word.charAt(0).toUpperCase() - alternative for first section
const capitalize = function(word){
  return word.slice(0,1).toUpperCase() + word.slice(1, word.length);
}




// console.log(titleize(["mary", "brian", "leo"], capitalize))

// Phase II: Constructors, Prototypes, and this
// First write a constructor function for an elephant.Each elephant should have a 
// name, height(in inches), and array of tricks in gerund 
// form(e.g. "painting a picture" rather than "paint a picture").

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};


Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};


Elephant.prototype.play = function () {
  let randomize = Math.floor(Math.random() * this.tricks.length);
  return (`${this.name} is ${this.tricks[randomize]}`);
}

// Elephant.prototype.trumpet: "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"


// Phase III: Function Invocation

// First, let's make a few elephants so we have a small herd. Feel free to copy 
// the code below, or to make your own with any attributes you like. 
// Make sure to store all of our elephants in an array.

// Now let's create a function called paradeHelper that we'll use to have an elephant 
// parade.It should take a single elephant as an argument; this way, 
// we can pass it as a callback to forEach when called on our herd.
// Make sure to store it as a property on the Elephant object.You can populate it 
// with any console.log statement you want to build your parade(e.g. "___ is trotting by!").

// For example:

// Elephant.paradeHelper(micah);
// Micah is trotting by!
// undefined

// Once you have this function, call forEach on the herd and pass it in as 
// the callback without invoking it. Elephants galore!


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
let herd = [ellie, charlie, kate, micah];



Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`);
};


// herd.forEach(elephant => Elephant.paradeHelper(elephant))

// Phase IV: Closures
// Let's make a function dinerBreakfast. Ultimately, we want it to return an anonymous 
// closure, which we will be able to use to keep adding breakfast foods to our initial order.

//   > let bfastOrder = dinerBreakfast();
// "I'd like cheesy scrambled eggs please"
//   > bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
//   > bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."
// Hints:

// order should be initialized to a starting order(e.g.scrambled eggs and bacon) before the anonymous function can do its work.
// The closure should capture / close over order
// What should the return value of dinerBreakfast be ?
// Which function should take in the additional food as an argument ?
// Make sure you can call it multiple times and keep chaining on more breakfast foods!

function dinerBreakfast() {
  
  let order = "I'd like cheesey scrambled eggs please";
  console.log(order);

    return function bfastOrder(food) {
      order = `${order.slice(0, order.length - 7)} and ${food} please`;
      console.log(order);
  }
};

dinerBreakfast("dish")
// Object Oriented JS

// Phase I - Callbacks

// defining the function
// function titleize(names, callback) {
//   let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
//   callback(titleized);
// };

// // invoking the function
// titleize(["Mary", "Brian", "Leo"], (names) => {
//   names.forEach(name => console.log(name));
// });

// // Phase II - Constructors, Prototypes,  and `this`

// function Elephant(name, height, tricks) {
//   this.name = name;
//   this.height = height;
//   this.tricks = tricks;
// }

// Elephant.prototype.trumpet = function () {
//   console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
// };

// Elephant.prototype.grow = function () {
//   this.height = this.height + 12;
// };

// Elephant.prototype.addTrick = function (trick) {
//   this.tricks.push(trick);
// };

// Elephant.prototype.play = function () {
//   trickIndex = Math.floor(Math.random() * this.tricks.length);
//   console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
// };

// // Phase III - Function Invocation

// Elephant.paradeHelper = function (elephant) {
//   console.log(`${elephant.name} is trotting by!`);
// };



// // Phase IV - Closures

// function dinerBreakfast() {
//   let order = "I'd like cheesy scrambled eggs please.";
//   console.log(order);

//   return function (food) {
//     order = `${order.slice(0, order.length - 8)} and ${food} please.`;
//     console.log(order);
//   };
// };