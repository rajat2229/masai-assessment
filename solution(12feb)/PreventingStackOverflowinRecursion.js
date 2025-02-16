function factorial(n) {
    // Check if input is not a number or is negative
    if (typeof n !== "number" || n < 0) {
      console.log("Invalid input");
      return;
    }
  
    // Base case: factorial(0) is 1
    if (n === 0) {
      return 1;
    }
  
    // Recursive case: factorial(n) = n * factorial(n - 1)
    return n * factorial(n - 1);
  }
  
  // Test cases
  console.log(factorial(5));  // Output: 120
  console.log(factorial(0));  // Output: 1
  console.log(factorial(-2)); // Output: "Invalid input"
  console.log(factorial("a")); // Output: "Invalid input"
  