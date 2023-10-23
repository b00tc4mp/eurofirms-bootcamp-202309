console.log('%cTEST join', 'color: magenta; font-weight: bold;')

console.log('CASE return the string "Tiger,Lion,Cat" from the array ["Tiger", "Lion", "Cat"]')

var animals = ["Tiger", "Lion", "Cat"]

var animalsString = join(animals)

console.log(animalsString)
// Tiger,Lion,Cat

console.log('CASE return the string "Tiger-Lion-Cat" from the array ["Tiger", "Lion", "Cat"] and "-" as seaparator')

var animals = ["Tiger", "Lion", "Cat"]

var animalsString = join(animals, '-')

console.log(animalsString)
// Tiger-Lion-Cat