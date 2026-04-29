function filterRange(arr, a, b) {
    `>=a, <b`
    return arr.filter(
        (item) => item >=a && item < b
    )
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( {filtered, "result": [3,1]} ); // 3,1 (matching values)

console.log( {arr, "result": [5,3,8,1]},  ); // 5,3,8,1 (not modified)