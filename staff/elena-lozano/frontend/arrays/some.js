function some(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        var result = callback(element)


        if (result)
            return true
    }
    return false

}

//Este es el some original, no de la funcion que hemos definido arriba:
console.log ('TEST some')
console.log ('CASE check if Jonatan is in array')

var names = ['Martina', 'David', 'Manuel', 'Katerine', 'Isabel', 'Jonatan', 'Eileen', 'Ignacio', 'Elena']
var result = names.some(function (name) {
    if (name === 'Jonatan') return true
    return false
})

console.log (result)
// true
console.log ('CASE check if Jonatan is in array')

var names = ['Martina', 'David', 'Manuel', 'Katerine', 'Isabel', 'Jonatan', 'Eileen', 'Ignacio', 'Elena']
var result = names.some(function (name) {
    if (name === 'Jonatan') return true
    return false
})

console.log (result)

//Y esto si fuese un caso negativo

console.log('CASE check if Kevin is in array')

var names = ['Martina', 'David', 'Manuel', 'Katerine', 'Isabel', 'Jonatan', 'Eileen', 'Ignacio', 'Elena']
var result = names.some(function (name) {
    if (name === 'Kevin') return true
    return false
})

console.log(result)
// false    
