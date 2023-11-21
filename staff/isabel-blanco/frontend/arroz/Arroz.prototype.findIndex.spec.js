TEST('Arroz prototype findIndex')

CASE('Example use funcion findIndex')

const numbersExample = new Arroz

numbersExample[0] = 1
numbersExample[1] = 2
numbersExample[2] = 3
numbersExample[3] = 4
numbersExample[4] = 5

numbersExample.length = 5

const targetNumber = 3

console.log("Search the index in the number " + targetNumber + " in numbersExample {1, 2, 3, 4, 5}")

const indexExample = numbersExample.findIndex(function (element) {
    return element === targetNumber
})

console.log(indexExample, 'Expect to be 2')
// 2

CASE('Find index of first element that is lower than 20 from numbersFindIndex')

const numbersFindIndex = new Arroz

numbersFindIndex[0] = 45
numbersFindIndex[1] = 29
numbersFindIndex[2] = 23
numbersFindIndex[3] = 19
numbersFindIndex[4] = 41

numbersFindIndex.length = 5

const index = numbersFindIndex.findIndex(function (number) {
    return number < 20
})

console.log(index)
// 3 (value 9)

CASE('Find index of the first number greater than 100')

const numbers2FindIndex = new Arroz

numbers2FindIndex[0] = 95
numbers2FindIndex[1] = 49
numbers2FindIndex[2] = 63
numbers2FindIndex[3] = 99
numbers2FindIndex[4] = 31

numbers2FindIndex.length = 5

const index2 = numbersFindIndex.findIndex(function (number) {
    if (number > 100)
        return true
    return false
})

console.log(index2)
// -1