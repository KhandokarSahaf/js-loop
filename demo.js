// 1.*** Declare an array ***
const fruits = ["apple", "pineapple", "guava", "jackfruit", "banana"];

console.log(fruits);

// console log the 3rd index element
console.log(fruits[3]);

// change the value of the 2nd index element to Jambura
fruits[2] = "jambura";
console.log(fruits);

// 2.*** Add or remove elements ***
const touristPlace = ["rangamati", "cox'bazar", "bandorban"];
console.log(touristPlace);

// Add a new tourist destination to your tourist array
touristPlace.push("Srimongol");
console.log(touristPlace);

// Add two more to your array
touristPlace.push("Chattrogram", "Sylhet");
console.log(touristPlace);

// Remove the last tourist destination you have added
touristPlace.pop();
// display the final array as output
console.log(touristPlace);

// 3.***  Checking Array Membership with ‘includes’ ***
let books = ["English", "Bangla", "Chemistry", "Physics", "ICT"];

if (books.includes("javascript")) {
  console.log("This array contain a javascript book");
} else {
  console.log("No javascript here..");
}

// 4.***  Checking if it's an Array ***
let num = [2, 3, 4, 5, 6, 7, 8, 9];

console.log(Array.isArray(num));

// Print a message to the console indicating whether each variable is an array or not.
if (Array.isArray(num)) {
  console.log(`this is a array`);
} else {
  console.log(`this is not a array`);
}

// 5.***  Combining Arrays ***
let aClass = ["s", "d", "f", "g", "h", "j", "k"];
let bClass = ["z", "x", "c", "v", "b", "n", "m"];

const abClass = aClass.concat(bClass);

console.log(abClass);

// Print both the original arrays and the combined array using console.log().

console.log(`This is aClass`, aClass);
console.log(`This is bClass`, bClass);
console.log(`This is abClass`, abClass);
