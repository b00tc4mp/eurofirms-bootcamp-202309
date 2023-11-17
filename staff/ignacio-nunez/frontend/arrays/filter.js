function filter(array, callback) {
    var arrayResult = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var result = callback(element)

        if (result)
            arrayResult[arrayResult.length] = element
    }

    return arrayResult
}