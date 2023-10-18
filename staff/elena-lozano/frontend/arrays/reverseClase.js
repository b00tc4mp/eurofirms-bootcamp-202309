//iteraciones con arrays impares
// [10, 20, 30, 40, 50]
// [50, 20, 30, 40, 10]
// [50, 40, 30, 20, 10]

//iteraciones con arrays pares
// [10, 20, 30, 40, 50, 60]
// [60, 20, 30, 40, 50, 10]
// [60, 50, 30, 40, 20, 10]
// [60, 50, 40, 30, 20, 10]

//Se redondea hacia abajo para que el valor no supere la mitad; que no se pase.

function reverse(array) {
    // Inicializamos un bucle que recorrerá la mitad del array (array.length / 2, el Math.floor nos asegura que sea un número entero redondeado hacia abajo).

    for (var i = 0; i < Math.floor(array.length / 2); i++) {

        // Guardamos las iteracciones del for hacia la derecha, desde el indice 0 hasta la mitad del array (la primera mitad del array), en una variable "firstHalf=>primera mitad"
    
        var firstHalf = array[i];

        // Guardamos las iteracciones del for hacia la izqierda, desde el último indice -1 (la segunda mitad del array), en una variable "secondtHalf=>segunda mitad"
        var secondHalf = array[array.length - 1 - i];

        // Aquí le asignamos el valor de secondtHalf (que tiene guardada la segunda mitad del array) a la parte inicial del array (a la primera mitad del array).
        array[i] = secondHalf;

        // Aquí hacemos lo contrario, le asignamos el valor de firstHalf (que tiene guardada la primera mitad del array) a la parte final del array (a la segunda mitad del array).
        array[array.length - 1 - i] = firstHalf;
    }

    return array
} 