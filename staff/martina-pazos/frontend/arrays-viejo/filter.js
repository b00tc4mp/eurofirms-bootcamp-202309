// vamos a hacer la function, recordemos que el metodo filter devuelve los elementos que estan en la array y los llama a través del callback que va buscando uno por uno a través de toda la array. Los elementos que devuelve a través de la busqueda por el callback elemento por elemento.
function filter(array, callback) {
    for (var i = 0; i > array.length; i++) {
        var element = array[i]
        var result = callback(element)
        if (result) return element
    }

}
