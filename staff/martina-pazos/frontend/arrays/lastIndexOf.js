function lastIndexOf(array, element) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === element)
            return i
    }

    return -1
}