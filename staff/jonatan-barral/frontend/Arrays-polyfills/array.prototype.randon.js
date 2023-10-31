Array.prototype.random = function () {
    if (this.length === 0) {
        return undefined; // Handling empty arrays
    }

    var randomIndex = Math.floor(Math.random() * this.length);

    var element = this[randomIndex];

    return element;
}
