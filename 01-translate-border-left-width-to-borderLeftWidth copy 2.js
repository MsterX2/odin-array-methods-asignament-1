`
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
`

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