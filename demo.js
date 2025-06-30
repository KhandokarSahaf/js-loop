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
