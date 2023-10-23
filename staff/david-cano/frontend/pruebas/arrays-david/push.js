//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

function push(array, element) {
    // Asignamos el elemento proporcionado al final del array.
    // Usamos la propiedad "length" del array para determinar la posición donde agregar el nuevo elemento.
    array[array.length] = element;

    // Devolvemos la nueva longitud del array después de agregar el elemento.
    // Esto refleja el número total de elementos en el array después de la operación "push".
    return array.length;
}
