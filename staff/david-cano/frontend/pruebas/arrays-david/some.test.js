console.log('%cTEXT some', 'color:magenta; font-weight:bold;')


console.log('CASE check if any fruit starts with k')
var fruits = ['mochilo', 'gazpacho', 'pincho', 'twynky', 'kamba', 'alcachofo', 'monues', 'freson', 'gorilon']
// el some evalua una funcion, si cumple devuelve un true, y sino cumple un false. El charAt busca el primer carácter de la palabra.
var result = some(fruits, function (fruit) {
    if (fruit.charAt(0) === 'k')
        return true
    return false

})
console.log(result)
// true

console.log('CASE check if any fruit starts with h')
var fruits = ['mochilo', 'gazpacho', 'pincho', 'twynky', 'kamba', 'alcachofo', 'monues', 'freson', 'gorilon']
// el some evalua una funcion, si cumple devuelve un true, y sino cumple un false. El charAt busca el primer carácter de la palabra.
var result = some(fruits, function (fruit) {
    if (fruit.charAt(0) === 'h')
        return true
    return false

})
console.log(result)
// false

console.log('CASE example use function some')
// Ejemplo de uso de la función some
var numbers = [1, 3, 5, 7, 9];

// Definimos una función de devolución de llamada que verifica si un número es par.
function isEven(element) {
    //% operador módulo en JavaScript. Calcula el resto de la división de element entre 2. Si el resultado es 0, significa que el número es par.
    return element % 2 === 0;
}

console.log("Comprobando si al menos un número es par en el array: ",numbers,);
// Llamamos a la función `some` con el array y la función de devolución de llamada.
var hasEvenNumber = some(numbers, isEven);

if (hasEvenNumber) {
    console.log("Al menos un número par fue encontrado en el array.");
} else {
    console.log("No se encontró ningún número par en el array.");
}
