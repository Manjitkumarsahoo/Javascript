let arr = [7, 8, 4, 9, 7, 2, 5]

function secsmall(a) {

    let small = a[0]
    let secsmall = a[0]

    for (let i = 1; i < a.length; i++) {
        if (a[i] < small) {
            secsmall = small
            small = a[i]
        } else if (a[i] < secsmall && a[i] !== small) {
            secsmall = a[i]
        }
    }
    return secsmall;
}
console.log(secsmall(arr))
