function quicksort(arr, start, end) {
    if (start >= end) return;

    let i = start;
    let j = end;
    let pivot = arr[Math.trunc((start + end) / 2)];

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    quicksort(arr, start, j);
    quicksort(arr, i, end);

    return arr; // added this line
}

let arr = [2, 3, 1, 5, 9, 10, 8];
quicksort(arr, 0, arr.length - 1);
console.log(arr); // logs the sorted array
