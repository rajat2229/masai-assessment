function processProducts(products) {
    // Step 1: Use map() to create an array of product names
    const productNames = products.map(product => product.name);
  
    // Step 2: Use forEach() to log messages based on the price
    products.forEach(product => {
      if (product.price > 50) {
        console.log(`${product.name} is above $50`);
      } else {
        console.log(`${product.name} is below $50`);
      }
    });
  }
  
  // Example usage:
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  processProducts(products);
  