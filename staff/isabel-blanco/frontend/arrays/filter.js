function filter(array, callback) {
    var arrayResult = []

    for (let i = 0; i < array.length; i++)
        var element = array[i]

    var results = callback(element)

    if (result) {
        arrayResult[arrayResult.length] = element
    }

    return arrayResult
}