const userProfile = {
    name: "Alice",
    age: 28,
  
    // Fixed string interpolation syntax with backticks
    details: function() {
      return `${this.name} is ${this.age} years old.`;
    },
  
    updateAge(newAge) {
      if (newAge <= 0) {
        console.log("Invalid age.");
        return;
      }
  
      this.age = newAge;
  
      // Call the details method correctly and log the updated user details
      console.log(this.details());
    }
  };
  
  // Updating age and logging the details
  userProfile.updateAge(30); // Logs: "Alice is 30 years old."
  console.log(userProfile.details()); // Expected: "Alice is 30 years old."
  