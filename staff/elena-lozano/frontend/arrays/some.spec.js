//some comprueba si alguno de los elementos cumple con la función (que el nombre empiece por k)
console.log('TEXT some ')


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
