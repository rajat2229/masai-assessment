function createBankAccount(initialBalance) {
    let balance = initialBalance;  // Private variable to store balance
  
    return {
      deposit: function (amount) {
        if (amount > 0) {
          balance += amount;
        }
        return balance;  // Return updated balance
      },
      withdraw: function (amount) {
        if (amount > 0 && amount <= balance) {
          balance -= amount;
        }
        return balance;  // Return updated balance after withdrawal
      },
      getBalance: function () {
        return balance;  // Return current balance
      }
    };
  }
  
  // Example usage:
  const account = createBankAccount(100);
  
  console.log(account.deposit(50));     // Output: 150
  console.log(account.withdraw(30));    // Output: 120
  console.log(account.getBalance());    // Output: 120
  