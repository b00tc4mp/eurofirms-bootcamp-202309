// La función concat toma dos arrays, array1 y array2, y los une en un nuevo array resultante.
function concat(array1, array2) {
    // Inicializamos un array vacío llamado "result" para almacenar el resultado.
    var result = [];

    // Iteramos a través de los elementos del primer array (array1).
    for (var i = 0; i < array1.length; i++) {
        // Guardamos el elemento actual del array1 en una variable llamada "element".
        var element = array1[i];

        // Asignamos el "element" al nuevo array "result" en la misma posición.
        result[i] = element;
    }

    // Continuamos iterando a través de los elementos del segundo array (array2).
    for (var i = 0; i < array2.length; i++) {
        // Guardamos el elemento actual del array2 en una variable llamada "element".
        var element = array2[i];

        // Para evitar sobrescribir los elementos del primer array, asignamos el "element" al nuevo array "result"
        // comenzando desde la posición después de los elementos de array1.
        result[array1.length + i] = element;
    }

    // Devolvemos el nuevo array "result" que contiene la concatenación de array1 y array2.
    return result;
}
