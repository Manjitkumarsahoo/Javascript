let arr = [7, 8, 4, 9, 7, 2, 5]

function small(arr) {
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (res > arr[i]) {
            res = arr[i]
        }
    }
    return res
}
console.log(small(arr))