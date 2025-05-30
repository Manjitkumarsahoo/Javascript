function Sort(arr) {
    if (arr.length == 1) return arr;

    let mid = Math.trunc(arr.length / 2);
    let left = [];
    let right = [];

    for (let i = 0; i < mid; i++) {
        left[i] = arr[i];
    }
    for (let i = mid; i < arr.length; i++) {
        right[right.length] = arr[i];
    }
    Sort(left);
    Sort(right);

    return merge(left, right, arr);
}

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k++] = left[i++]
        } else {
            arr[k++] = right[j++]
        }
    }
    while (i < left.length) {
        arr[k++] = left[i++]
    }
    while (j < right.length) {
        arr[k++] = right[j++]
    }

    return arr;

}

let arr = [2, 5, 7, 3, 9, 11]
console.log(Sort(arr));