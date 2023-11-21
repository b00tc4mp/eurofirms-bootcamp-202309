Arroz.prototype.shift = function () {
    const deletedElement2 = this[0]

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }

    this.length--

    return deletedElement2
}