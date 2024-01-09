// Aquí estamos importando dos componentes llamados 'Input' y 'Label' desde otros archivos.
import Input from './Input';
import Label from './Label';

// Esta función define un componente llamado 'Field' que agrupa un campo de entrada (Input) con su etiqueta (Label).
export default function Field(props) {
    // Devolvemos dos elementos, un 'Label' y un 'Input', agrupados dentro de un fragmento de React ('<> ... </>').
    return <>
        {/* Este es el componente 'Label' que etiquetará nuestro campo de entrada. */}
        <Label htmlFor={props.id}>
            {/* El contenido de la etiqueta ('props.children') es lo que se mostrará dentro de la etiqueta. */}
            {props.children}
        </Label>
        {/* Este es el componente 'Input' que representa el campo donde podemos escribir algo. */}
        <Input
            // Aquí le pasamos algunas propiedades al componente 'Input', como el tipo, el id, el título y si es obligatorio.
            type={props.type}
            id={props.id}
            title={props.title}
            required={props.required}
        />
    </>;
}
