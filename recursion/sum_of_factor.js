function sunfactor(n, i = 1) {
    if (i >= n) return 0

    if (n % i == 0) {
        return i+sunfactor(n,i+1)
    }else{
        return sunfactor(n,i+1)
    }
}
console.log(sunfactor(6));