console.log('TEST some')


console.log('CASE check if Jonatan is in array')

var names = ['Martina', 'David', 'Manuel', 'Katerine', 'Isabel', 'Jonatan', 'Eileen', 'Ignacio', 'Elena']
var result = some(names, function (name) {
    if (name === 'Jonatan') return true
    return false
})

console.log(result)
// true

console.log('CASE check if Kevin is in array')

var names = ['Martina', 'David', 'Manuel', 'Katerine', 'Isabel', 'Jonatan', 'Eileen', 'Ignacio', 'Elena']
var result = some(names, function (name) {
    if (name === 'Kevin') return true
    return false
})

console.log(result)
// false    