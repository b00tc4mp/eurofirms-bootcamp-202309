    function reverse(array) {
        // Inicializamos un bucle que recorrerá la mitad del array (Math.floor asegura que sea un número entero redondeado hacia abajo).
        for (var i = 0; i < Math.floor(array.length / 2); i++) {

        // Guardamos las iteraciones del for en una variable "reverse".
        // El valor en la posición i (desde el principio del array hasta la mitad) lo guardamos en "reverse".
        var result = array[i];
    
        // Ahora le vamos asignar, al array desde el inicio, los valores desde el final del array 
        // Es decir, el primer valor en la posición "array.length - 1 - i" desde el final del array se coloca en la posición i[0].
        // Es decir muevo el último valor, o último indice del array, al inicio del array.
        array[i] = array[array.length - 1 -i];
    
        // Ahora asignamos el valor de "result (array[i], que en un primer momento es igual a 0)" al elemento al final del array.
        // El valor temporal "result" (originalmente el primer elemento) se coloca en la posición que originalmente contenía el valor del extremo opuesto, que es array[array.length - 1 - i].
        array[array.length - 1 -i] = result;
    
        // Este proceso se repite para la mitad del array, lo que invierte efectivamente el orden de los elementos.
    
    }
    
    return array
}