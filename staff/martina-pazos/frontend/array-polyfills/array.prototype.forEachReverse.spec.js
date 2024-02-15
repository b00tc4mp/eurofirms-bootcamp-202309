//el Método forEach: El método forEach() ejecuta la función indicada una vez por cada elemento del array.Este es el forEachReverse, por lo tanto es llamar a cada elemento uno por uno y pintar en consola el último elemento

TEST('Array prototype forEachReverse')

CASE('print chars in reverse way')// pintar los caractéres en modo reverso

var chars = ['A', 'B', 'C']

chars.forEachReverse(function (char) {
    console.log(char)
})
// C
// B
// A

CASE('print nums in reverse way multiplied by 10')

var nums = [10, 20, 30]

nums.forEachReverse(function (num) {
    console.log(num * 10)
})
// 300
// 200
// 100



