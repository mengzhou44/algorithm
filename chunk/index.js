// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let result = [];
//     let item = [];
//     for (let num of array) {

//         item.push(num);

//         if (item.length === size) {
//             result.push(item.slice(0));
//             item = [];
//         }

//     }

//     if (item.length > 0) {
//         result.push(item);
//     }
//     return result;
// }

// function chunk(array, size) {

//     const chunked = [];

//     for (var num of array) {

//         var lastElement = chunked[chunked.length - 1];

//         if (!lastElement || lastElement.length === size) {
//             chunked.push([num]);
//         } else {
//             lastElement.push(num);
//         }
//     }

//     return chunked;
// }

function chunk(array, size) {
    const chunked = [];

    for (var index = 0; index < array.length; index = index + size) {
        chunked.push(array.slice(index, index + size));
    }
    return chunked;
}


module.exports = chunk;
