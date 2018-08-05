// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = str.split("");
    var charMap = {};

    for (let char of chars) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] = charMap[char] + 1;
        }

    }
    var maxChar = null;
    var max = 0;

    for (var char in charMap) {
        if (charMap[char] > max) {
            maxChar = char;
            max = charMap[char];
        }
    }

    return maxChar;
}



module.exports = maxChar;
