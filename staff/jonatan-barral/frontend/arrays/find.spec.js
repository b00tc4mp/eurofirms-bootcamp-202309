console.log("TEST find")

console.log('CASE find first name with length 5')

var names = ["Manuel", "Isabel", "Martina", "Eileen", "Katherine", "David", "Elena", "Ignacio"]

var found = find(names, function (name) {
    if (name.length === 5) return true
    return false
})
console.log(found)
// David

console.log("CASE returns undefined when no element satisfies the callback condition")

var names = ["Manuel", "Isabel", "Martina", "Eileen", "Katherine", "David", "Elena", "Ignacio"]

var found = find(names, function (name) {
    if (name.length === 50) return true
    return false
})
console.log(found)
// undefined