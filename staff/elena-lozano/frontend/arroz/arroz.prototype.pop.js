//Devuelve el ultimo elemento y lo elimina del array (Arroz)

Arroz.prototype.pop = function () {
    var last = this[this.length - 1]

    //No son dos guiones, son dos signos de restar porque al length se le resta un valor
    this.length--

    delete this[this.length]
//Devuelve el último y lo elimina del array
    return last
}
