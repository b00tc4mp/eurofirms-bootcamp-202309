//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

// Definición de la función findIndex
function findIndex(array, callback) {
    // Iniciamos un bucle for para iterar a través del array.
    for (var i = 0; i < array.length; i++) {
        // En cada iteración, guardamos el elemento actual en una variable llamada "element".
        var element = array[i];

        // Llamamos a la función de devolución de llamada (callback) con el "element" como argumento y guardamos el resultado en una variable llamada "result".
        var result = callback(element);

        // Comprobamos el valor de "result" (lo que retorna la función de devolución de llamada).
        if (result) {
            // Si "result" es verdadero (true), retornamos el índice actual "i" y la función findIndex termina.
            return i;
        }
    }
    // Si no se encuentra ningún elemento que cumple la condición, la función findIndex termina y retorna -1.
    return -1;
}
