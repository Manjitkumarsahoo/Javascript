function occ(arr) {
    let res = arr.reduce((acc, e, i) => {
        if (acc[e]) {
            acc[e] = acc[e] + 1;
        } else {
            acc[e] = 1;
        }
        return acc;
    }, {});
    return res
}

let str = "banana"
let arr = str.split("");
console.log(occ(arr));