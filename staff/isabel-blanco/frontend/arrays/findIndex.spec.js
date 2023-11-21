console.log('TEST findIndex')

console.log("CASE find index of first element that is lower than 20")

var number = [40, 60, 200, 15235, 13, 11, 20]

var index = findIndex(numbers, function (number) {
    if (number < 20)
        return true
    return false
})

console.log(index)
//4 (valor 13)

console.log("CASE find index of the first number > 1 000 000")
var numbers = [40]

var number = [40, 60, 200, 15235, 13, 11, 20]

var index = findIndex(numbers, function (number) {
    if (number > 1000000)
        return true
    return false

})

console.log(index)
//-1

console.log('CASE example use function findIndex')

var numbers = [1, 2, 3, 4, 5]

var targetNumber = 3

console.log("Buscando el índice del número", targetNumber, "en el array:");

var index = findIndex(numbers, function (element) {
    return element === targetNumber;
})

if (index !== -1) {
    console.log("El número", targetNumber, "se encuentra en el índice", index, "del array.")
}
else {
    ("El número", targetNumber, "no se encuentra en el array.");
}