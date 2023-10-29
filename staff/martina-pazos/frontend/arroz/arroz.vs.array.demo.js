console.log('with Arroz')

var n = new arroz

m[0] = 'hello'
m[1] = 'world'
m[2] = '!'
m.length = 3

m.forEach(function (element) {
    console.log(element)
})

console.log('with Array')

var n = new array

n[0] = 'hello'
n[1] = 'world'
n[2] = '!'
n.length = 3

n.forEach(function (element) {
    console.log(element)
})


// VM1377:1 with arroz
// VM1377:11 hello
// VM1377:11 world
// VM1377:11 !

// VM1377:14 with array
// VM1377:24 hello
// VM1377:24 world
// VM1377:24 !