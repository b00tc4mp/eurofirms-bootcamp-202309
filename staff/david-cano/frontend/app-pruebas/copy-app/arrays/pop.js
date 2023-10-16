//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

function pop(array) {
    var last = array[array.length - 1]

    array.length--

    return last
}