// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    var result = [];
    var leftLetter = null;
    for (var letter of str.split("")) {
        if (leftLetter === null || leftLetter === " ") {
            result.push(letter.toUpperCase());
        } else {
            result.push(letter);
        }
        leftLetter = letter;
    }
    return result.join("");
}


module.exports = capitalize;

// function capitalize(str) {
//     var words = [];

//     for (var word of str.split(" ")) {
//         words.push(word.charAt(0).toUpperCase() + word.slice(1));
//     }

//     return words.join(" ");

// }