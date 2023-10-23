// Definición de la función some
function some(array, callback) {
    // Iniciamos un bucle for para iterar a través del array.
    for (var i = 0; i < array.length; i++) {
        // En cada iteración, guardamos el elemento actual en una variable llamada "element".
        var element = array[i];

        // Llamamos a la función de devolución de llamada (callback) con el "element" como argumento y guardamos el resultado en una variable llamada "result".
        var result = callback(element);

        // Comprobamos el valor de "result" (lo que retorna la función de devolución de llamada).
        if (result) {
            // Si "result" es verdadero (true), significa que se ha encontrado al menos un elemento que cumple la condición, por lo que retornamos true y la función some termina.
            return true;
        }
    }
    // Si no se encuentra ningún elemento que cumpla la condición después de iterar por todo el array, la función some termina y retorna false.
    return false;
}
