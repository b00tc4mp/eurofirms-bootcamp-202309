// Creamos un componente llamado 'Label' que representa una etiqueta para describir algo.
export default function Label(props) {
    // Devolvemos un elemento 'label' que se utiliza para etiquetar otras cosas, como nuestro cuadro de texto.
    return <label
        // Aquí le pasamos todas las propiedades que recibimos a nuestra etiqueta.
        // Estas propiedades podrían ser cosas como el color o el tamaño del texto.
        className="self-start"
        {...props}
    ></label>;
}
