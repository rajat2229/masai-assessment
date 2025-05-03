// 11. Some
// Check if at least one number in [2, 4, 6, 8, 9] is odd.
const numbers1 = [2, 4, 6, 8, 9];
const hasOdd = numbers1.some(num => num % 2 !== 0);
console.log("At least one number is odd:", hasOdd);

// 12. Every
// Check if all numbers in [10, 20, 30, 40] are greater than 5.
const numbers2 = [10, 20, 30, 40];
const allGreaterThanFive = numbers2.every(num => num > 5);
console.log("All numbers are greater than 5:", allGreaterThanFive);

// 13. Sort
// Sort [5, 1, 9, 2, 7] in ascending order.
const numbers3 = [5, 1, 9, 2, 7];
const sortedNumbers = numbers3.sort((a, b) => a - b);
console.log("Sorted in ascending order:", sortedNumbers);

// 14. Reverse
// Reverse ["a", "b", "c", "d"].
const letters = ["a", "b", "c", "d"];
const reversedLetters = letters.reverse();
console.log("Reversed array:", reversedLetters);

// 15. Flat
// Flatten [[1, 2], [3, 4], 5] into a single array.
const nestedArray = [[1, 2], [3, 4], 5];
const flattenedArray = nestedArray.flat();
console.log("Flattened array:", flattenedArray);