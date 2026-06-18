class PropertyObserver{
    constructor(elementId,obj){
        this.element=document.getElementById(elementId);
        this.element.innerText=obj.number;
        this.element.style.backgroundColor=obj.color;
    }
    update(obj){
        // console.log(obj.number)
        this.element.innerText=obj.number;
        this.element.style.backgroundColor=obj.color;
    }
}