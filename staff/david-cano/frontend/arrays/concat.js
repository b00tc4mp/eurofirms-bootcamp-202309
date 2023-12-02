//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

// Definición de la función concat
function concat(array1, array2) {
    // Creamos un arreglo vacío llamado "result" para almacenar la concatenación de los dos arreglos.
    var result = [];

    // Usamos un bucle for para copiar los elementos del primer arreglo (array1) al arreglo "result".
    for (var i = 0; i < array1.length; i++) {
        // Paso 3: En cada iteración, guardamos el elemento actual del primer arreglo en "result" en la misma posición.
        result[i] = array1[i];
    }

    // Usamos otro bucle for para copiar los elementos del segundo arreglo (array2) al arreglo "result" a partir de la posición donde termina el primer arreglo.
    for (var i = 0; i < array2.length; i++) {
        // En cada iteración, guardamos el elemento actual del segundo arreglo en "result" en la posición adecuada.
        result[array1.length + i] = array2[i];
    }

    // Retornamos el arreglo "result" que contiene la concatenación de ambos arreglos.
    return result;
}
