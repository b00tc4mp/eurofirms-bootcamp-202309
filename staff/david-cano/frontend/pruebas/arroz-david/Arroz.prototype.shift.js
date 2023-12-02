//El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

Arroz.prototype.shift = function () {
    var deletedElement2 = this[0];

    for (var i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
        
    }
    this.length--;

    return deletedElement2;
}