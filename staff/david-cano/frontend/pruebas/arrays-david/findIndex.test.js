console.log("TEST findIndex")

console.log ("CASE find index of first element that is lower than 20")
//findIndex dice en qué posición está el primer elemento que cumple con la condición de la función

var numbers = [40, 60, 200, 15235, 13, 11, 20]

//Find the index of the first number<20


var index = findIndex(numbers, function (number){
		if(number < 20) return true
		return false
})

console.log(index)
//4 (valor 13)


console.log("CASE find index of the first number > 1 000 000")
// Si ningún valor cumple la condición devuelve -1
var numbers = [40, 60, 200, 15235, 13, 11, 20]

//Find the index of the first number > 1 000 000

var index = findIndex(numbers, function (number){
		if(number > 1000000) return true
		return false
})

console.log(index)
//-1


