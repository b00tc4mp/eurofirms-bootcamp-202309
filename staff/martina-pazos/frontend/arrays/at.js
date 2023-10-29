function at(array, index) {
    if (index >= 0) {
        var value = array[index]

        return value
    }

    var value = array[array.length + index]

    return value
}

