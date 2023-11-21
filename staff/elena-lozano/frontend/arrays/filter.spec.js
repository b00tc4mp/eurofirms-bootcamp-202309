console.log("TEST filter")

console.log("CASE filter names with length 6")

var names = ["Manuel", "Isabel", "Martina", "Eileen", "Katherine", "David", "Elena", "Ignacio", "Jonatan"]

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