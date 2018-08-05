// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = initializeArray(n);


    var counter = 1;
    var startRow = 0;
    var startColumn = 0;
    var endRow = n - 1;
    var endColumn = n - 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        for (var i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = counter;
            counter++;
        }

        startRow++;


        for (var i = startRow; i <= endRow; i++) {
            result[i][endColumn] = counter;
            counter++;
        }
        endColumn--;


        for (var i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;


        for (var i = endRow; i >= startRow; i--) {
            result[i][startColumn] = counter;
            counter++;
        }

        startColumn++;

    }

    return result;

}

function initializeArray(n) {
    const result = [];
    for (var row = 0; row < n; row++) {
        result.push([]);
    }
    return result;
}

module.exports = matrix;

