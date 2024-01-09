// Aquí estamos importando un componente llamado 'Button' desde otro archivo llamado 'Button'.
import Button from './Button';

// Esta función define un componente llamado 'Feedback', que mostrará mensajes en la pantalla.
export default function Feedback(props) {
    // Devolvemos un elemento 'div' que actuará como la ventana emergente de mensaje.
    return <div
        // La clase 'fixed top-0 bg-gray-400 w-full flex gap-2 justify-center items-center p-10 opacity-80 rounded-3xl'
        // le da estilo a la ventana emergente para que se vea bonita y centrada en la parte superior de la pantalla.
        className="fixed top-0 bg-gray-400 w-full flex gap-2 justify-center items-center p-10 opacity-80 rounded-3xl"
    >
        {/* Aquí mostramos el mensaje que se pasa como propiedad al componente. */}
        <strong
            // La clase 'text-center text-red-500 underline decoration-blue-500/30 opacity-1' le da estilo al mensaje.
            // Por ejemplo, el color del texto es rojo, y hay un subrayado azul debajo del texto.
            className="text-center text-red-500 underline decoration-blue-500/30 opacity-1"
        >
            {props.message}
        </strong>
        {/* Este es un botón que se muestra junto con el mensaje y se activa cuando lo hacemos clic. */}
        <Button
            // La función 'onClick={props.onAccept}' significa que cuando hacemos clic en el botón, ejecutará la función que se pasa como propiedad 'onAccept'.
            onClick={props.onAccept}
        >
            {/* El texto en el botón es 'Accept', y es como decir "Sí" o "OK". */}
            Accept
        </Button>
    </div>;
}
