Array.Prototype.Mean = function () {
    if (this.length === 0) {
        return NaN; // Handling empty arrays
    }

    var sum = 0

    for (var i = 0; i < this.length; i++) {
        var number = parseFloat(this[i]); // Number parsing
        if (isNaN(number)) {
            return NaN; // Handling non-numeric elements
        }

        sum += number
    }

    var mean = sum / this.length

    return mean
}
