// 3. Concat
// Merge two arrays: ["a", "b", "c"] and [1, 2, 3].
// Return the new combined array.


function mergeArrays() {
    const array1 = ["a", "b", "c"];
    const array2 = [1, 2, 3];
    const combinedArray = array1.concat(array2);
    return combinedArray;
}

console.log(mergeArrays());