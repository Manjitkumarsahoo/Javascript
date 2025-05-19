function isperfect(n,i=1,sum=0){
    if(i==n){
        return sum==n;
    }
    if(n%i==0){
        sum+=i
    }
    return isperfect(n,i+1,sum)
}

console.log(isperfect(6));
