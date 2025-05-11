class User{
    #name;
    age;
    Constructor(name, age){
        this.#name = name;
        this.age = age;
    }
    display(){
        console.log('Name: ',this.#name);
        console.log('Age:',this.age);
    }
    get name(){
        return "Name:" +this.#name;

    }
    set name(name){
        if(name == 'code io'){
            this.#name = 'code';
        }
        else{
            this.#name = name;
        }
    }
}
let goms = new User('gomes', 23);
goms.name = 'code io'
console.log(goms.name);
