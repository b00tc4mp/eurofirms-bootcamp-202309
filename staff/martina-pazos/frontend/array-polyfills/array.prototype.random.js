//el Math.round, sirve para extraer un valor aleatorio entre 0 y 0,99 periodico dentro de una array

//La función Math.round() retorna el valor de un número redondeado al entero más cercano

Array.prototype.random = function () {
    var randomIndex = Math.round((this.length - 1) * Math.random())

    var element = this[randomIndex]

    return element
}
