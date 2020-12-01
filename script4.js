console.log("ЗАДАЧА 4")
let year;
let god;
year=prompt("Какой сейчас год?", "")
god=(year%4==0 && year%100!=0 || year%400==0) ? true : false;
console.log(`${year} - високосный год? ${god}`)