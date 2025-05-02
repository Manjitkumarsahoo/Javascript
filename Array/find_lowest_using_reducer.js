let arr = [1, 7, 3, 4, 5, 6]

let max = arr.reduce((acc, ele) => {
    if (ele < acc) {
        return ele
    }
    else {
        return acc
    }
})
console.log(max)