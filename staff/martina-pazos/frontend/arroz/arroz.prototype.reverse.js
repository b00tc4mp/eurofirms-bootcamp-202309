//El método reverse() invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.

Arroz.prototype.reverse = function () {
    for (var i = 0; i < Math.floor(this.length / 2); i++) {
        var forwardElement = this[i];

        var backwardElement = this[this.length - 1 - i];

        this[i] = backwardElement;

        this[this.length - 1 - i] = forwardElement;
    }

    return this;

}