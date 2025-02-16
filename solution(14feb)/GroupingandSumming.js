function countCategories(categories) {
    // Step 1: Use reduce() to count occurrences of each category
    const categoryCount = categories.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
  
    return categoryCount;
  }
  
  // Extra Challenge: Sort categories by their counts in descending order
  function sortCategoriesByCount(categoryCount) {
    return Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);
  }
  
  // Example usage:
  const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
  const categoryCount = countCategories(categories);
  console.log(categoryCount);  // Output: { electronics: 2, clothing: 2, toys: 3 }
  
  const sortedCategories = sortCategoriesByCount(categoryCount);
  console.log(sortedCategories);  // Output: [ 'toys', 'electronics', 'clothing' ]
  