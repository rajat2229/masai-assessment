let user = { name: "Alice", role: "admin", active: false };

const message = user.role === "admin"
  ? user.active
    ? "Admin Access Granted!"
    : "Admin Access Revoked"
  : user.role === "user"
  ? user.active
    ? "User Access Granted!"
    : "User Access Revoked"
  : "Access Denied";

console.log(message); 

// Example usage:

let user1 = { name: "Bob", role: "user", active: true };
let message1 = user1.role === "admin"
  ? user1.active
    ? "Admin Access Granted!"
    : "Admin Access Revoked"
  : user1.role === "user"
  ? user1.active
    ? "User Access Granted!"
    : "User Access Revoked"
  : "Access Denied";

console.log(message1); // Output: "User Access Granted!"
