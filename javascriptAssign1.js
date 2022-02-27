//Calculating area of rectangle
class Shape {                           //Parent class
    constructor(width,height ) {
        this.width = width;
        this.height = height;     
    }
    getShape() {
        return this.width,this.height;
    }
}
class Rectangle extends Shape {         //Rectangle inheriting Shape,.child class
    constructor( width, height ) {
        super(width,height );
    }
    getArea() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle( 7, 8 );
console.log( "Area of rectangle:\t\t" + rectangle.getArea() );