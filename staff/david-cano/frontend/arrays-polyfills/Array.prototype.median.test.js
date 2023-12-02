TEST('Array prototype median')

CASE('calculate the median value on the array [10,20,30,40,50]')

var numbers = [10, 20, 30, 40, 50]

var result = numbers.median()

console.log(result)
//30


CASE('return NaN on array with a string [10,20, hola mundo, 40,50]')

var items = [10, 20, 'hola mundo', 40, 50]

var result2 = items.median()

console.log(result2)
//NaN

CASE('return 42,44 on array with a string [20.2, 20.8, "30.5", 60.3, 80.4]')

var numbers2 = [20.2, 20.8, '30.5', 60.3, 80.4]

var result3 = numbers2.median()

console.log(result3)
//42.440000000000005

CASE('return NaN on array with a string [10.5, 20, "30.2", 40, "hola mundo",50.9')

var example = [10.5, 20, '30.2', 40, 'hola mundo', 50.9]

var result4 = example.median()

console.log(result4)
//NaN
//Si quitamos el 'hola mundo' nos devuelve 30.32

