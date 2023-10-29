// vamos a darle color y tamaño para que se vea en la consola
console.log('%cTEST concat', 'color: magenta; font-weight: bold; font-size:20px')
//vamos a usar el método concat, se usa para unir dos o màs arrays.Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
console.log('CASE concat arrays ["a","b","c"] and ["d","e","f"]')
//definimos dos arrays 
var chars1 = ["a", "b", "c"]
var chars2 = ["d", "e", "f"]
//creamos una variable para aplicar el método concat
var chars3 = concat(chars1, chars2)
// esto es lo que esperramos que salga en la consola
console.log(chars3)
// ["a", "b", "c", "d","e","f"]

// vamos a poner otro caso
console.log('CASE concat arrays [10,20,30] and [40, 50,]')
var nums1 = [10, 20, 30]
var nums2 = [40, 50]

var nums3 = concat(nums1, nums2)

console.log(nums3)
//[10,20,30,40,50]







