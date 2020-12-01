console.log("ЗАДАЧА 5")
let chislo1;
let chislo2;
chislo1=Number(prompt("Введите 1-ое число", ""))
chislo2=Number(prompt("Введите 2-ое число", ""))
console.log(`Вы ввели два числа: ${chislo1} и ${chislo2}`)
resultat=(chislo1==10 || chislo2==10 || chislo1+chislo2==10) ? true: false;
console.log(`Проверка чисел прошла успешно. Результат проверки: ${resultat}`)