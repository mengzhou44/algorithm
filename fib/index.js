// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// function fib(n) {
//     const arr = [];
//     for (var i = 0; i <= n; i++) {
//         if (i <= 1) {
//             arr.push(i);
//         } else {
//             const temp = arr[i - 1] + arr[i - 2];
//             arr.push(temp);
//         }
//     }
//     return arr[arr.length - 1];
// }

function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        } else {
            const result = fn.apply(null, args);
            cache[args] = result;
            return result;
        }
    }
}


module.exports = memoize(fib);
