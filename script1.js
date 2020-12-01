console.log("ЗАДАЧА 1")
let chislo;
let stroka;
let logika;
let pusto;
chislo=10;
stroka="строка"
logika=true;
pusto=null;
console.log(`число "${chislo}" + строка "${stroka}" = "${chislo+stroka}"`); // число к строке, строка к строке
console.log(`число "${chislo}" + булевый "${logika}" = "${chislo+logika}"`); // число к числу, булевый true к 1 
console.log(`число "${chislo}" + null "${pusto}" = "${chislo+pusto}"`); // число к числу, null к числу 0
console.log(`строка "${stroka}" + булевый "${logika}" = "${stroka+logika}"`); // строка к строке, булевый к строке 
console.log(`строка "${stroka}" + null "${pusto}" = "${stroka+pusto}"`); // строка к строке, null к строке "null"
console.log(`булевый "${logika}" + null "${pusto}" = "${logika+pusto}"`); // булевый true к 1, null к числу 0 