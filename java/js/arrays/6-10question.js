// 6. ForEach
const array = [1, 2, 3, 4];
array.forEach(element => {
    console.log(element * 2);
});

// 7. Map
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

// 8. Filter
const ages = [10, 25, 18, 30];
const adults = ages.filter(age => age > 18);
console.log(adults);

// 9. Reduce
const prices = [10, 20, 30];
const totalSum = prices.reduce((sum, price) => sum + price, 0);
console.log(totalSum);

// 10. Find
const users = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
const user = users.find(user => user.id === 2);
console.log(user);