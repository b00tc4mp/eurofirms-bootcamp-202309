//Push añade uno o más elementos

Arroz.prototype.push = function (element) {
    this[this.length] = element
    this.length++

    return this.length
}
