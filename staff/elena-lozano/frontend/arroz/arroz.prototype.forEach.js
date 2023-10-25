
//La propiedad "prototype" sirve para almacenar los métodos y propiedades de un constructor

Arroz.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element)
    }
}