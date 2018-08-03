
// function palindrome(text) {
//     if (text.length <= 1) {
//         return true;
//     }
//     var firstLetter = text.split("")[0];
//     var lastLetter = text.split("")[text.length - 1];

//     if (firstLetter != lastLetter) {
//         return false;
//     }

//     if (text.length == 2) {
//         return true;
//     }

//     const newText = text.slice(1).slice(-1);

//     return palindrome(newText);
// }

// function palindrome(text) {
//     var reversed = text.split("").reduce((rev, char) => char + rev);

//     return text == reversed;
// }

function palindrome(text) {
    return text.split("").every((char, i) => {
        if (i > (text.length - 1 - i)) {
            return true;
        }
        return char === text[text.length - 1 - i];
    })
}

module.exports = palindrome;