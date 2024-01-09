// Importar la biblioteca React para utilizarla en el componente
import React from "react"

// Definir el componente funcional llamado Logo
export default function Logo() {
    // Imprimir un mensaje en la consola cuando el componente se renderiza
    console.log('Logo')

    // Crear referencias para los elementos de audio del caballo y del tweet
    const horseAudioRef = React.useRef()
    const tweetAudioRef = React.useRef()

    // Función que se ejecuta cuando el mouse se sitúa sobre el logo
    function handleMouseOverLogo() {
        // Reproducir el sonido del tweet al pasar el mouse sobre el logo
        tweetAudioRef.current.play()
    }

    // Devolver la estructura del componente, que incluye un logo SVG y elementos de audio
    return (
        <div>
            {/* Elemento SVG que representa un logo */}
            <svg version="1.1" width="30" height="30" xmlns="http://www.w3.org/2000/svg" onMouseOver={handleMouseOverLogo}>
                {/* Rectángulo rojo que forma el fondo del logo */}
                <rect width="30" height="30" fill="tomato" />

                {/* Círculo amarillo en el centro del logo */}
                <circle cx="15" cy="15" r="8" fill="yellow" />

                {/* Triángulo azul que representa una forma en el logo */}
                <polygon points="25,6 5,40 45,40" fill="dodgerblue" />
            </svg>

            {/* Elemento de audio para el sonido del tweet (actualmente oculto) */}
            <audio className='hidden' id="tweet-audio" controls ref={tweetAudioRef}>
                <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.ogg" type="audio/ogg" />
                <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}
