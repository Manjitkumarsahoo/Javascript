//check prime number using two parameter,number & index and return boolean value
function isPrime(n, i) {
    if (n <= 1) return false
    if (i == 1) return true
    if (n % i == 0) return false

    return isPrime(n,i-1);
}
console.log(isPrime(10,Math.trunc(11/2)));