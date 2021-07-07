// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myName() {
  let firstName = "Jabril";
  let lastName = "Breckenridge";
  function fullName() {
    console.log(`My name is ${firstName} ${lastName}. Pleasure meeting you.`);
  }
  return fullName;
}
const greetings = myName();
greetings();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let newCount = 0;
  const countUp = () => console.log(newCount+=1);
  return countUp;
};
const newCounter = counter();

newCounter();
newCounter();
newCounter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
}