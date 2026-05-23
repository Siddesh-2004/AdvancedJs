//pure object 

// const person={
//     talk: function(){
//         return "I can talk";
//     }
// }
// const me=Object.create(person);


// set prototype

const person={
    talk: function(){
        return "I can talk";
    }
}

const me={}

Object.setPrototypeOf(me,person);

console.log(me.talk());