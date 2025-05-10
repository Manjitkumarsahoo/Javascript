function occ(arr) {
    let res = {};

    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (res[e]) {
            res[e] = res[e] + 1;
        } else {
            res[e] = 1;
        }
    }

    return res;
}

let str = "hi my name is xyz and my age is four and bye bye";
let arr = str.split(" ");
console.log(occ(arr));
