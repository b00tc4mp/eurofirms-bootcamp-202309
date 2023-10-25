// vamos a darle color para que se vea en la consola
console.log('%cTEST filter', 'color: magenta; font-weight: bold;')
// vamos a usar el método filter, crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
console.log("CASE filter names with length 6")
// definimos una variable con los elementos de la array
var names = ["Manuel", "Isabel", "Martina", "Eileen", "Katherine", "David", "Elena", "Ignacio", "Jonatan"]
// creamos otra variable que a través del método filter, busque names, en la function name
var filtered = filter(names, function (name) {
    if (name.length === 6) return true
    return false
})
console.log(filtered)
// [Manuel, Isabel, Eileen] 

console.log("CASE filter names with length 7")

var names = ["Manuel", "Isabel", "Martina", "Eileen", "Katherine", "David", "Elena", "Ignacio", "Jonatan"]

var filtered = filter(names, function (name) {
    if (name.length === 7) return true
    return false
})
console.log(filtered)
// [Martina, Ignacio, Jonatan]




