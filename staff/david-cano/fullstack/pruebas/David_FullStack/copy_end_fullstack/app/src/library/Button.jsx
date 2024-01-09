// Definición de la función 'Button' que representa un botón en la interfaz de usuario.
export default function Button(props) {
    // Devuelve un elemento 'button' con diferentes propiedades y estilos.
    return <button
        // Clase de fondo azul y bordes redondeados.
        className='bg-[blue] rounded-[5px] leading-[1rem] m-[2px] border-[1px] border-solid border-transparent hover:border-black p-[5px] text-white'
        // Propiedades adicionales que puede recibir el botón, como eventos y otros atributos.
        {...props}
    ></button>;
}
