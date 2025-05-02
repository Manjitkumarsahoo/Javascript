let arr = [7, 8, 4, 9, 7, 2, 5]

function seclargest() {
    let max = arr[0]
    let smax = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            smax = max
            max = arr[i]
        } else if (arr[i] > smax && a[i] !== max) {
            smax = arr[i]
        }
    }
    return max == smax ? "All element are same" : smax
}

console.log(seclargest(arr))