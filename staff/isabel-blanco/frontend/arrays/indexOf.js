function indexOf(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (element === array[i]) return i
    }

    return -1
}