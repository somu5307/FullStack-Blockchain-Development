class Rectangle{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    area(){
        return this.a * this.b;
    }
    area(){
        return this.a * this.a;
    }
}
class Square extends Rectangle{
    constructor(s){
        super(s);
    }
}
let obj1 = new Rectangle(5,5);
let obj2 = new Square(6);
console.log(obj1.area());
console.log(obj2.area());
