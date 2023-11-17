TEST('Árray prototype median')

CASE('calculate the median value on the array [10,20,30,40,50]')

const numbers = [10, 20, 30, 40, 50]

const result = numbers.median()

console.log(result)
//30


CASE('return NaN on array with a string [10,20, hola mundo, 40,50]')

const items = [10, 20, 'hola mundo', 40, 50]

const result2 = numbers.median()

console.log(result2)
//NaN

CASE('return NaN on array with a string [10,20, "30", 40,50]')

const numbers2 = [10, 20, '30', 40, 50]

const result3 = numbers.median()

console.log(result3)
//30