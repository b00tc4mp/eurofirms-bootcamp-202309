Array.prototype.middle = function (callback) {
    if (this.length % 2 !== 0)
        return this[Math.floor(this.length / 2)]

    if (this.length % 2 === 0) {
        var num1 = this[(this.length / 2) - 1]
        var num2 = this[(this.length / 2)]

        return (num1 + num2) / 2
    }
}