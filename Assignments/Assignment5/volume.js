class Cylinder {
    constructor(r,h){
        this.radius = r;
        this.height = h;
    }
    getVolume(){
        return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
    }
}
class Sphere {
    constructor(r){this.radius = r;}
    getVolume(radius){
        return ((4/3) * Math.PI * this.radius * this.radius * this.radius).toFixed(4);
    }
}
class Cone {
    constructor(r,h){this.radius = r,this.height=h};
    getVolume(){
        return ((Math.PI * this.radius * this.radius * this.height) / 3).toFixed(4);
    }
}
let cylinder_obj = new Cylinder(5,10);
console.log(cylinder_obj.getVolume());
let sphere_obj = new Sphere(5);
console.log(sphere_obj.getVolume());
let cone_obj = new Cone(5,10);
console.log(cone_obj.getVolume());

