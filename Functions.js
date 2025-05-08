let a =12; b=24;
function sum(a,b){
    let c = a+b;
    return c;

}
console.log(sum(2,3));



// callback

function operation (op, a, b){
    return op(a,b)
}
let add = (a,b) => a+b;
let sub = (a,b) => a-b;
console.log (operation(sub,2,3));