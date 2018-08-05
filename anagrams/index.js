// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {

    var cleared1 = clearString(stringA);
    var cleared2 = clearString(stringB);

    return cleared1 === cleared2;
}

function clearString(text) {
    return text.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
}

console.log(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard'));

module.exports = anagrams;

// function anagrams(stringA, stringB) {

//     const dict1 = createCharMap(stringA);
//     const dict2 = createCharMap(stringB);

//     if (Object.keys(dict1).length !== Object.keys(dict2).length) {
//         return false;
//     }

//     for (var char in dict1) {
//         if (dict1[char] !== dict2[char]) {
//             return false;
//         }
//     }


//     return true;
// }

// function createCharMap(text) {
//     var charMap = {};
//     var array = text.toLowerCase().split("");
//     for (var char of array) {
//         if (char === " " || char === "!" || char === ",") continue;

//         if (!charMap[char]) {
//             charMap[char] = 1;
//         } else {
//             charMap[char]++;
//         }
//     }

//     return charMap;
// }
