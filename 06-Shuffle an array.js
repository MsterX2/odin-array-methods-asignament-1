`
Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] 
or [3,1,2] etc, with equal probability of each case.
`
function get_first_n_no_negative_numbers(n) {
    return Math.floor(Math.random() * n)
}
function shuffle(arr) {
    let arrCopy = arr.slice();
    let newArr = [];
    while(arrCopy.length > 0) {
        if (arrCopy.length === 1) {
            newArr.push(arrCopy.pop())
            continue
        }
        let randomIndex = get_first_n_no_negative_numbers(arr.length)
        let randomItem = arrCopy.splice(randomIndex, 1)
        newArr.push(randomItem[0])
    }
    return newArr
}

function shuffle2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

let count2 = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  let newArr = shuffle(array);
  count[newArr.join('')]++;
  shuffle2(array);
  count2[array.join('')]++;
}

// show counts of all possible permutations
console.log({count})
console.log({count2})