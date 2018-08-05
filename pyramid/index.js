// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    createLayer(n);
}

function createLayer(n, row = 1) {
    if (row > n) return;

    if (row <= n) {
        console.log(" ".repeat((n - row)) + "#".repeat(row * 2 - 1) + " ".repeat((n - row)));
    }

    createLayer(n, row + 1);
}


module.exports = pyramid;
