// Variable para almacenar el ID de sesión del usuario (inicialmente nulo)
let sessionUserId = null;

// Crear un elemento raíz de React en el elemento con el ID 'root' en el documento HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación (componente App) en el elemento raíz
root.render(<App />);
