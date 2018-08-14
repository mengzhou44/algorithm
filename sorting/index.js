// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }
    return arr;
}

function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        var indexofmin = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[indexofmin] > arr[j]) {
                indexofmin = j;
            }
        }
        if (i !== indexofmin) {
            var temp = arr[i];
            arr[i] = arr[indexofmin];
            arr[indexofmin] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    var center = Math.floor(arr.length / 2);
    var left = arr.slice(0, center);
    var right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
 
}

function merge(left, right) {
    var merged = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }


    return [...merged, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
