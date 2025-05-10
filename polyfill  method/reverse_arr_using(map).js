function rev(arr) {
    let res = arr.map((e, i, a) => {
        return a[a.length - 1 - i]
    })
    return res
}

console.log(rev(['a', 'b', 'c']))

