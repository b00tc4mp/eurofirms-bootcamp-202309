// La función 'Container' define un contenedor flexible que puede albergar otros elementos en una interfaz de usuario.
export default function Container(props) {
    // Devuelve un elemento 'div' que actúa como contenedor y puede personalizarse con diferentes propiedades y estilos.
    return <div
        // La clase 'flex flex-col' indica que los elementos dentro del contenedor se colocarán en una columna (uno debajo del otro).
        // Se utiliza la plantilla de cadena para agregar la clase 'items-center' si la propiedad 'align' es 'center'.
        className={`flex flex-col ${props.align === 'center' ? ' items-center' : ''}`}
        // Propiedades adicionales que puede recibir el contenedor, como eventos y otros atributos.
        {...props}
    ></div>;
}
