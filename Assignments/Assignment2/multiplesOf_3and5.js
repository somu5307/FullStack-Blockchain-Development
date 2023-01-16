let total = 0,total1 = 0;
function multipleOfThree(){
    for (let i = 1; i<=1000;i++){
        if (i % 3 == 0) total+=i;
    }
}
function multipleOfFive(){
    for (let j = 1; j<=1000;j++){
        if (j % 5 == 0) total1+=j;
    }
}
multipleOfThree();
multipleOfFive();
// sum of multiples of 3
console.log(total);
//sum of multiples of 5
console.log(total1);