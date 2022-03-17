//Calculating area of rectangle
class Shape {                           //Parent class
    constructor(name,width,height) {
        this.nameValue=name;
        this.widthValue = width;
        this.heightValue = height;     
    }
    getShape() {
        return ("Name:"+this.nameValue+","+"Width:"+this.widthValue+","+"Height:"+this.heightValue)
    }
}
class Rectangle extends Shape {         //Rectangle inheriting Shape,.child class
    constructor( name,width, height ) {
        super(name,width,height);
    }
    getArea() {
        return this.widthValue * this.heightValue;
    }
}
let rectangle = new Rectangle( "Rectangle",7, 8 );
console.log("Shape information is "+rectangle.getShape());
console.log( "Area of rectangle:\t" + rectangle.getArea() );
