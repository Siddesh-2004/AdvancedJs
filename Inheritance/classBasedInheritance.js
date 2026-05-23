//do this in browser console
//refer the notion notes

class Person{
    talk(){
        return "I can talk";
    }
}
const me =new Person();
const you = new Person();
console.log(me.talk());
console.log(you.talk());
console.log(me)

//[[Prototype]] and prototype


console.log(me.__proto__===Person.prototype);
console.log(me.__proto__ === you.__proto__);
console.log(me.talk===you.talk)

//changing the talk function

    //directly changing without using prototype

Person.talk = function(){
    return "Talked is improved";
}
console.log(me.talk());//no changes in the object

    //using prototype
Person.prototype.talk = function(){
    return "Talked is improved";
}
console.log(me.talk());//changes in the object

