// Definimos la clase JWT (JSON Web Token)
class JWT {
    // Constructor de la clase que recibe un token como parámetro
    constructor(token) {
        // Guardamos el token como propiedad de la instancia
        this.token = token

        // Descomponemos el token en sus partes: encabezado, carga útil (payload) y firma
        const [header64, payload64, signature] = token.split('.')

        // Decodificamos y parseamos el encabezado en formato JSON
        const headerJSON = atob(header64)
        const header = JSON.parse(headerJSON)
        // Guardamos el encabezado como propiedad de la instancia
        this.header = header

        // Decodificamos y parseamos la carga útil (payload) en formato JSON
        const payloadJSON = atob(payload64)
        const payload = JSON.parse(payloadJSON)
        // Guardamos la carga útil como propiedad de la instancia
        this.payload = payload

        // Guardamos la firma como propiedad de la instancia
        this.signature = signature
    }

    // Método que verifica si el token ha expirado
    isExpired() {
        // Obtenemos el tiempo actual en segundos
        const now = Math.round(Date.now() / 1000)
        // Comparamos la fecha de expiración de la carga útil con el tiempo actual
        return this.payload.exp - now < 0
    }
    
    // Método que devuelve el sujeto (subject) de la carga útil
    getSubject() {
        return this.payload.sub
    }
}

// Exportamos la clase JWT para que pueda ser utilizada en otros archivos
export default JWT
