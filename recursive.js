//recursive functions
// 1.base case
//2.update statement
//3.recursive call xdone


function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));