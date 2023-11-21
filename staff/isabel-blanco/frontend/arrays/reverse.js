function reverse(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var forwardElement = array[i]

        var backwardElement = array[array.length - 1 - i]

        array[i] = backwardElement

        array[array.length - 1 - i] = forwardElement
    }

    return array
}