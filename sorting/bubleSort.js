function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

//let arr = [2, 6, 4, 7, 9, 5, 1]
let arr=["banana","apple","cherry"]
console.log(bubleSort(arr));
