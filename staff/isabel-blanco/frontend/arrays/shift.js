function shift(array) {
    var deletedElement = array[0]

    for (var i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }

    array.length--

    return deletedElement
}