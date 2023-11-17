Array.prototype.median = function () {
    var suma = 0;

    for (var i = 0; i < this.length; i++) {
        var number = parseFloat(this[i])//tb se puede utilizar parseInt, pero solo para enteros
        if (isNaN(number))
            return NaN

        suma += number; 
    }

    var media = suma / this.length;

    return media;
}
