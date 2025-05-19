function x(num){
    if(num<=1)return

    console.log(num-- +2);
    console.log(++num);
    x(--num)
    console.log(++num);
    console.log(num-2);
    
    
}
x(4)