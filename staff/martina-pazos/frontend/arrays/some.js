function some(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        var result = callback(element)


        if (result)
            return true
    }
    return false

}