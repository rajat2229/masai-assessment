// 2. shift & Unshift
// Create an array of numbers. Add 10 at the beginning and remove the first item.
// Return the modified array.



function modifyArray() {
    let numbers = [1, 2, 3, 4, 5]; 
    numbers.unshift(10); 
    numbers.shift(); 
    return numbers; 
}

console.log(modifyArray());