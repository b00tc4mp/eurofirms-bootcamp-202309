// calcularSuma.js

// Función para calcular la suma de las puntuaciones
function calcularSumaPuntuaciones() {
    const inputs = document.querySelectorAll('input[type="number"][min="1"][max="10"]');
    let suma = 0;

    inputs.forEach(function(input) {
        const valor = parseFloat(input.value) || 0; // Convertir a decimal o establecer como 0 si no es válido
        suma += valor;
    });

    // Actualizar el valor en el elemento HTML
    document.getElementById('totalPoints').textContent = suma.toFixed(2); // Mostrar hasta 2 decimales
}

// Escuchar el evento 'submit' del formulario
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('notes');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        calcularSumaPuntuaciones(); // Calcular la suma cuando
