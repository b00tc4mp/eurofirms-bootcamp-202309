// Creamos un componente llamado 'Form' que representa un formulario en nuestra aplicación.
export default function Form(props) {
    // Devolvemos un elemento 'form' que agrupa contenido y tiene algunas características especiales.
    return <form
        // Aquí le pasamos todas las propiedades que recibimos a nuestro formulario.
        // Estas propiedades podrían ser cosas como funciones que se ejecutan cuando enviamos el formulario.
        className="flex flex-col box-content gap-[0.5rem] items-center"
        {...props}
    ></form>;
}
