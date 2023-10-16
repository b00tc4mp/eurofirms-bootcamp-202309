//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

function push(array, element) {
    array[array.length] = element

    return array.length
}