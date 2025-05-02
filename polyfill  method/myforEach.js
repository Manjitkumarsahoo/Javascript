Array.prototype.myforEach = function (fn) {
    if (typeof fn !== "function") {
        throw new TypeError(`${fn} is not a function`)
    }

    for (i = 0; i < this.length; i++) {
        fn(this[i], i, this)
    }
    return;
}

let a = [10, 20, 30, 40, 50, 60, 70]
a.myforEach((e,i) => {
    console.log(e)
    console.log(i);
    
})