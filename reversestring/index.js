// function reverse(text) {
//     if (text.length < 2) return text;

//     const firstLetter = text.substring(0, 1);

//     const newText = text.substring(1);

//     return reverse(newText) + firstLetter;
// }


// function reverse(text) {
//     return text.split("").reverse().join("");
// }


// function reverse(text) {
//     let reversed = "";
//     for (let letter of text) {
//         reversed = letter + reversed;
//     }
//     return reversed;
// }


function reverse(text) {
    debugger;
    return text.split("").reduce((res, char) => char + res);

}

reverse("12345");

module.exports = reverse;