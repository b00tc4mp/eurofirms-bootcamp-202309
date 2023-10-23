//El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

// Definición de la función at
function at(array, index) {
    // Obtenemos el valor del elemento en la posición "index" del arreglo y lo guardamos en una variable llamada "value".
    var value = array[index];

    // Retornamos el valor obtenido.
    return value;
}
