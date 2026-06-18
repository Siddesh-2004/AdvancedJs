class NumberModel{
    constructor(){
        this.number=0;
        this.color="red";
        this.observers=[];
    }

    increment(){
        let colors=["red","yellow","black","blue"];
        this.number++;
        this.color=colors[Math.floor(Math.random()*colors.length)];
        this.notifyObservers();
    }

    addObservers(observer){
        this.observers.push(observer);
    }

    notifyObservers(){
        for(let  obs of this.observers){
            obs.update(this);
        }
    }
}