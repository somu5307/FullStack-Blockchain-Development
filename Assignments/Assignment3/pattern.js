function pattern(n){
    let num = 1;
    let s = '';
    for ( let i = 1; i<=n; i++){
        s='';
        for (let j = 0;j<i;j++){
            s += `${num} `;
            num++;
        }
        console.log(s);
    }
}
pattern(3);