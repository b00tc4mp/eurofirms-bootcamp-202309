Array.prototype.median = function (callback) {
    if (this.length === 0) {
        return undefined
    }

    // Clone the array and sort 
    var sortedArray = this.slice().sort(function (a, b) {
        return a - b
    });

    if (this.length % 2 !== 0) {
        return sortedArray[Math.floor(this.length / 2)]
    }

    var num1 = sortedArray[(this.length / 2) - 1]
    var num2 = sortedArray[this.length / 2]

    return (num1 + num2) / 2
}
