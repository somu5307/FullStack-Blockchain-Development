function isLeapYear(year){
    if(((year%4==0)&&(year%100!=0)) || (year%400==0))
        console.log("Leap Year")
    else 
        console.log("Not a Leap Year")
}
isLeapYear(2000)
isLeapYear(1998)
isLeapYear(1700)
isLeapYear(2022)
isLeapYear(2024)