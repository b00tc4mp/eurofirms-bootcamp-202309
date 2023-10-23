//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

console.log('%cTEST findIndex', 'color: magenta; font-weight: bold;')

console.log ("CASE find index of first element that is lower than 20")

var numbers = [40, 60, 200, 15235, 13, 11, 20]



var index = findIndex(numbers, function (number){
		if(number < 20) return true
		return false
})

console.log(index)
//4 (valor 13)


console.log("CASE find index of the first number > 1 000 000")
var numbers = [40, 60, 200, 15235, 13, 11, 20]

var index = findIndex(numbers, function (number){
		if(number > 1000000) return true
		return false
})

console.log(index)
//-1

console.log('CASE example use function findIndex')
// Ejemplo de uso de la función findIndex
var numbers = [1, 2, 3, 4, 5];
var targetNumber = 3;

console.log("Buscando el índice del número", targetNumber, "en el array:");

// Llamamos a la función findIndex con el array "numbers" y una función de devolución de llamada que verifica si el elemento es igual al número objetivo.
var index = findIndex(numbers, function(element) {
    // La función de devolución de llamada recibe cada elemento del array y verifica si es igual al número objetivo.
    return element === targetNumber;
});

// Mostramos el índice encontrado o -1 si el número no se encuentra en el array.
if (index !== -1) {
    console.log("El número", targetNumber, "se encuentra en el índice", index, "del array.");
} else {
    console.log("El número", targetNumber, "no se encuentra en el array.");
}

