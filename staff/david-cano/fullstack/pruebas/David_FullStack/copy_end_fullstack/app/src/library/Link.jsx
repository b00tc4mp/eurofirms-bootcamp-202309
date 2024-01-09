// Creamos un componente llamado 'Link' que representa un enlace o vínculo a otra página.
export default function Link(props) {
    // Devolvemos un elemento 'a' que se utiliza para crear enlaces a otras páginas o recursos en internet.
    return <a
        // Aquí le pasamos todas las propiedades que recibimos a nuestro enlace.
        // Estas propiedades podrían ser cosas como el color o el tamaño del texto.
        href=""
        className='p-[1rem] hover:underline text-blue-500'
        {...props}
    ></a>;
}
