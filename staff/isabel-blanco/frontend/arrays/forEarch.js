function forEach(array, callback) {
    //iterate each elemente in array
    //call callback with each element
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element)
    }
}