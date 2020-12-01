let dlina,width;
console.log("ЗАДАЧА 2") 
dlina=prompt("Введите длину прямоугольника (задача 2)", "")
console.log(`Длина прямоугольника = ${dlina}`)
width=prompt("Введите ширину прямоугольника (задача 2)", "")
console.log(`Ширина прямоугольника = ${width}`)
dlina=Number(dlina)
width=Number(width)
perimetr=2*(dlina+width)
ploshad=width*dlina
console.log(`Периметр = ${perimetr}`)
console.log(`Площадь = ${ploshad}`)
console.log(`Отношение периметра к площади = ${perimetr/ploshad}`)