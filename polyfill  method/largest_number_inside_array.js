let arr = [7, 8, 4, 9, 7, 2, 5]

let res = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (res < arr[i]) {
        res = arr[i]
    }
}

console.log(res);