function binarySearch(arr, ele) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.trunc((left + right) / 2);
        if (ele == arr[mid]) {
            return mid;
        } else if (ele > arr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(binarySearch(arr, 16));
