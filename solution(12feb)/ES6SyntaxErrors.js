const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      // Ensure item price is a valid number
      if (typeof item.price !== 'number' || isNaN(item.price)) {
        console.log("Invalid price.");
        return;
      }
  
      // Add the item and update the total
      this.items.push(item);
      this.total += item.price;
    },
  
    getTotal() {
      // Corrected the string interpolation syntax
      return `Total: $${parseFloat(this.total).toFixed(2)}`;
    }
  };
  
  // Adding valid and invalid items
  checkout.addItem({ name: "Coffee Maker", price: 99.95 }); // Valid item
  checkout.addItem({ name: "Milk", price: 3.50 }); // Valid item
  checkout.addItem({ name: "Invalid Item", price: "20" }); // Invalid item, will be rejected
  
  // Display the total
  console.log(checkout.getTotal()); // Expected output: Total: $103.45
  