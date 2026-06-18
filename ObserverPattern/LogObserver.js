function LogObserver(){}

LogObserver.prototype.update=(obj)=>{
    console.log(`The Number is ${obj.number} and the Color is ${obj.color}`);
}