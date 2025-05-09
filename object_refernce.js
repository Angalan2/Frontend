const a = {
    name : "angal",
    age : 23,
};
a.age = 17;
console.log(a);

let User={
    name : "angal",
    age : 23,
    h : 6
};
for (key in User){
    console.log(key+'-'+User[key]);
}
