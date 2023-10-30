Arroz.prototype.pop = function () {
    const last = this[this.length -1];
    this.length--;

    delete this[this.length];
    return last;
    
}