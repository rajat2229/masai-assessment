// 16. Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 17. Transform Names
function transformNamesToUppercase(names) {
    return names.map(name => name.toUpperCase());
}
console.log(transformNamesToUppercase(["john", "jane", "doe"]));

// 18. Count Occurrences
function countOccurrences(arr, target) {
    return arr.filter(item => item === target).length;
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "apple"], "apple"));

// 19. Find Max Number
function findMaxNumber(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), -Infinity);
}
console.log(findMaxNumber([5, 12, 8, 20, 1]));

// 20. Group by Age
function groupByAge(people) {
    return Object.values(
        people.reduce((groups, person) => {
            if (!groups[person.age]) {
                groups[person.age] = [];
            }
            groups[person.age].push(person);
            return groups;
        }, {})
    );
}
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];
console.log(groupByAge(people));