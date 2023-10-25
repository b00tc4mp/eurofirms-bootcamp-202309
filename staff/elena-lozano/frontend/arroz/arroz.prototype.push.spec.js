TEST("Arroz prototype push")

CASE("push horse in arroz farm")

var farm = new Arroz
farm[0] = "pig"
farm[1] = "goat"
farm[2] = "sheep"
farm.length = 3

//Añade el elemento "horse" al final del array, con lo cual el length ahora sería 4
var length = farm.push("horse")

console.log(length)

console.log(farm)
