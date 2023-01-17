function factorial(n){
    if (n==0) return 1;
    if(n == 1) return n;
    return n * factorial(n-1);
}
function head(n){
    let total = 0,dup = n;
    while (n > 0){
        rem = n % 10;
        total += factorial(rem);
        n = Math.floor(n/10);
    }
    if ( total === dup) console.log("Special Number");
    else console.log("Not a Special Number");
}
//TestCases
head(145);
head(1);
head(120);