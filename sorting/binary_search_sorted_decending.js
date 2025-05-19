function binarySearchDescending(arr, ele) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.trunc((left + right) / 2);

        if (ele == arr[mid]) {
            return mid;
        } else if (ele < arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    return -1;
}


let arr = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2];
console.log(binarySearchDescending(arr, 16)); // Output: 2

