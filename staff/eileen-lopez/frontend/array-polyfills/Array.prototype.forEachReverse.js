Array.prototype.forEachReverse = function(callback) {
    for (var i = this.length -1; i > -1; i--) {
        var element = this[i]

        callback(element)
    }
}