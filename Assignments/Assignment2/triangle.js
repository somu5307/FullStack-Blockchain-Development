function triangle(a,b,c){
    if (a === b & a === c) return "Equilateral Triangle";
    else if (a === b & a !== c) return "Isosceles Triangle";
    else if (a===c & a!==b) return "Isosceles Triangle";
    else if (b===c & b!==a) return "Isosceles Triangle";
    else return "Scalene Triangle";
}

// Test Cases
console.log(triangle(1,2,3));
console.log(triangle(1,1,2));
console.log(triangle(1,2,1));
console.log(triangle(1,2,2));
console.log(triangle(1,1,1));