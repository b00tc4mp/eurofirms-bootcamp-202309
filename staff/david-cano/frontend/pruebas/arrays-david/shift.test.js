console.log('%cTEST shift', 'color: magenta; font-weight: bold;')

console.log('CASE delete the first element of the array [a, b, c, d, e] and return it')

var chars = ['a', 'b', 'c', 'd', 'e'
]
var deletedElement = shift(chars)

console.log(deletedElement)
//a

console.log(chars)
//['b', 'c', 'd', 'e']