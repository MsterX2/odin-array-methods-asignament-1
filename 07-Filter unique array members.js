`Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:
`

function unique(arr) {
  /* your code */
  let uniqueStrings = []
  for (let string of arr) {
    if (!uniqueStrings.includes(string)) uniqueStrings.push(string)
  }
  return uniqueStrings
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O