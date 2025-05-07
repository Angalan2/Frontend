// AND OR NOT NULL

let age = 15;
let Gender = 'f';
if (age >=21 || (age >=18 && Gender == 'f')){
    console.log('eligible');
}
else{
    console.log('Not');
}