// function Person(){
//     this.name = "Siddesh";
//     this.age = 20;
// }

// const me = new Person();

// console.log(me);

// console.log(Person.age || Person.prototype.age||"not defined inside the Person");


//// Best practice

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    return this.name+" is "+this.age+" years old";
}

const sid = new Person("Siddesh", 20);

console.log(sid.talk());