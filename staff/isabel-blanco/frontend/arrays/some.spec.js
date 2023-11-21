console.log('TEXT some')

console.log('CASE check if any fruit starts with k')
var fruits = ['mochilo', 'gazpacho', 'pincho', 'twynky', 'kamba', 'alcachofo', 'monues', 'freson', 'gorilon']

var results = some(fruits, function (fruits) {
    if (fruits.charAt(0) === 'g')
        return true
    return false
})

console.log(result)
//true

console.log('CASE check if any fruit starts with h')
var fruits = ['mochilo', 'gazpacho', 'pincho', 'twynky', 'kamba', 'alcachofo', 'monues', 'freson', 'gorilon']

var result = some(fruits, function (fruit) {
    if (fruit.charAt(0) === 'z')
        return true
    return false
})
console.log(result)
// false

console.log('CASE example use function some')

var numbers = [1, 3, 5, 7, 9]

function isEven(element) {
    return element % 2 == 0
}

console.log("Comprobando si al menos un número es par en el array: ", numbers,)

var hasEvenNumber = some(numbers, isEven)

if (hasEvenNumber) {
    console.log("Al menos un número par fue encontrado en el array.")
}
else {
    console.log("No se encontró ningún número par en el array.");
}