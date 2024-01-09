// Creamos un componente llamado 'Input' que representa un cuadro donde se pueden escribir cosas.
export default function Input(props) {
    // Devolvemos un elemento 'input' que permite escribir texto.
    return <input
        // Aquí le pasamos todas las propiedades que recibimos a nuestro cuadro de texto.
        // Estas propiedades podrían ser cosas como el color de fondo o funciones que se ejecutan cuando escribimos algo.
        className="bg-[lightgray] border-0 rounded-[5px] leading-[1.5rem] pl-[5px]"
        {...props}
    />;
}
