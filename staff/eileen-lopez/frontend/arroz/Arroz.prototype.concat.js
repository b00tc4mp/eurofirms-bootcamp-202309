Arroz.prototype.concat = function (this, that) {
    var result =[]

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        result[i] = element
    }

    for (var i = 0; i < that.length; i++) {
        var element = that[i]

        result [this.length + i] = element
    }

    return result
}