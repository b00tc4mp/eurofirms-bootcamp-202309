// Obtén todos los elementos de entrada de notas.
const notaInputs = document.querySelectorAll('.notes-1');

// Inicializa un array vacío para almacenar las notas.
const notas = [];

// Recorre todos los elementos de entrada de notas y agrega sus valores al array.
notaInputs.forEach(input => {
    const nota = parseFloat(input.value); // Convierte el valor a número.
    if (!isNaN(nota)) {
        notas.push(nota);
    }
});

// Calcula la suma de las notas.
const sumaNotas = notas.reduce((total, nota) => total + nota, 0);

// Calcula el promedio de las notas.
const promedio = sumaNotas / notas.length;

// Imprime las notas, la suma y el promedio en la consola.
console.log('Notas:', notas);
console.log('Suma de Notas:', sumaNotas);
console.log('Promedio de Notas:', promedio);
