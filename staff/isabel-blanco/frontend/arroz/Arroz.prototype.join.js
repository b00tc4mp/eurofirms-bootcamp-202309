Arroz.prototype.join = function (separator = ',') {
    const result = ''

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (i !== 0) {
            result = result + separator + element
        }
        else {
            result = element
        }
    }
    return result
}