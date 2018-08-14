// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');

function levelWidth(root) {

    var counters = [0];
    var array = [root, 's'];
    var count = 0;

    while (array.length > 1) {
        var node = array.shift();

        if (node !== 's') {
            array.push(...node.children);
            counters[counters.length - 1]++;
        } else {
            array.push('s');
            counters.push(0);
        }
    }
    return counters;
}


module.exports = levelWidth;
