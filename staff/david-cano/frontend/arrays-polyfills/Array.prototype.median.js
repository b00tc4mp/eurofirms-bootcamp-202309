Array.prototype.median = function (){

    var suma = 0;
    var count = 0;

    for (var i = 0; i < this.length; i++) {
        if (typeof this[i] === 'number') {
            suma += this[i];
            count++;
        } else if (typeof this[i] === 'string') {
            this[i] = parseFloat(this[i])//tb se puede utilizar parseInt, pero solo para enteros
            suma += this[i]; //suma = suma + this[i]
            count++;
        }
    }

    var media = suma / count;
    return media;

}
