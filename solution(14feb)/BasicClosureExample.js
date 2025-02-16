function outerFunction() {
    let message = "Hello, this is a closure example!";
    
    return function innerFunction() {
      console.log(message);  // Logs the message defined in the outer function
    };
  }
  
  const storedFunction = outerFunction();  // Invoke outerFunction and store the result
  storedFunction();  // Call the stored function to demonstrate closure
  