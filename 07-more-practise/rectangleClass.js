class Rectangle {
    constructor(width,height){
        this.width = width,
        this.height = height
    }
    getArea(){
        return this.width * this.height;
    }
    getPerimeter(){
        return this.width * 2 + this.height * 2;
    }
}
let r = new Rectangle(5, 10);

console.log(r.getArea());    
console.log(r.getPerimeter());