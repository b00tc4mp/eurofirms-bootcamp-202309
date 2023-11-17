Array.prototype.none = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let element = this[i]
        let result = callback(element)
        if (result)
            return false
    }
    return true
}