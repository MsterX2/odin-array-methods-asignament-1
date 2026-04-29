

function camelize(str) {
    let breakPhrase = str.split("-");
    if (breakPhrase.lenght === 0) return;
    let result = breakPhrase.reduce(
        (camelCased, word) => {
            let firstChar = word.charAt(0)
            let chars = word.slice(1);
            let result = firstChar.toUpperCase() + chars;
            return camelCased + result;
        }
    )
    console.log(result);
    return result;
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');