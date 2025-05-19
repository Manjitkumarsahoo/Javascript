function linear(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            return i
        }
    }
    return -1
}

console.log(linear([1, 5, 8, 7, 2, 9], 9));
