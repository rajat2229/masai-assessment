// Declare a global variable
let age = 25;

// Function to display the global age
function displayAge() {
  console.log(`Age: ${age}`);
}

// Function to change the global age
function changeAge(newAge) {
  age = newAge;
  console.log(`Age updated to: ${age}`);
}

// Call displayAge to show the initial value
displayAge(); // Output: Age: 25

// Call changeAge to update the value of age
changeAge(30); // Output: Age updated to: 30

// Call displayAge again to show the updated value
displayAge(); // Output: Age: 30
