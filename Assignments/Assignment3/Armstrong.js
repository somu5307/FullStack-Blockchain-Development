function armstrong(n){
    let total = 0,dup = n;
    while(n>0){
        rem = n % 10;
        total += (rem * rem * rem);
        n = Math.floor(n / 10); 
    }
    if (dup === total) console.log("Armstrong Number");
    else console.log("Not An Armstrong Number"); 
}
// TestCases
armstrong(153);
armstrong(1034);
armstrong(1);
