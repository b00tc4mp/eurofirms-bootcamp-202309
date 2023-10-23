//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

function pop(array) {
    // Guardamos el último elemento del array en una variable llamada "last".
    var last = array[array.length - 1];

    // Reducimos la longitud del array en 1.
    // Esto simula la eliminación del último elemento del array.
    array.length--;

    // Devolvemos el elemento que eliminamos, que es el último elemento original del array.
    return last;
}
