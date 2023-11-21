// Consulta si dentro del array (Arroz) está el elemento que se busca y devuelve true o false en función del resultado

Arroz.prototype.includes = function (searchElement) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        if (element === searchElement)
            return true
    }

    return false
}