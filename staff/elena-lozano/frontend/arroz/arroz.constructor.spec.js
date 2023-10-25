TEST("Arroz constructor")

CASE("create empty arroz instance")

//Creamos una instancia a partir del objeto constructor (que en este caso es "Arroz" y está definido en arroz.constructor.js)
const a = new Arroz
console.log(a)
console.log(a.length)
// Este nuevo objeto (instancia "a") hereda la propiedad del objeto constructor (length=0)