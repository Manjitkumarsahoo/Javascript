function sumfactor(n, i = 1) {
    if (i >= n) return 0

    if (n % i == 0) {
        return i+sumfactor(n,i+1)
    }else{
        return sumfactor(n,i+1)
    }
}
console.log(sumfactor(6));