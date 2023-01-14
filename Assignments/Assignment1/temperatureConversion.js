function toCelsius(f){
    c = ((f-32)*5)/9;
    console.log(`${f}'F is ${c}'C`);
}

function toFarenheit(c){
    f = (9*c/5)+32;
    console.log(`${c}'C is ${f}'F`);
    
}

toCelsius(45);
toFarenheit(60);
