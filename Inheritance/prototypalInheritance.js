//constructor functions

function Person(){
   
}
 Person.prototype.talk = function(){// this is what is happening in classes
        return "I can talk";
    }

let me = new Person();
let you = new Person();

console.log(me.talk());
console.log(you.talk());


