// REGISTER VIEW, div que contiene la página con el formulario de registro
// Almacena una referencia al elemento DOM con el identificador `register-view`. Este elemento contiene la página de registro de la aplicación.
var registerView = document.getElementById('register-view')
// Oculta la página de registro.
registerView.style.display = 'none'

// NAVIGATION TO LOGIN, enlace a la pagina de login
 // Almacena una referencia al enlace a la página de inicio de sesión.
var loginLink = registerView.querySelector('#login-link')
// Adjunta un manejador de eventos al enlace a la página de inicio de sesión.
// Cuando el usuario hace clic en el enlace, se ejecuta la función especificada en el manejador de eventos.
loginLink.onclick = function (event){
    event.preventDefault()
// Oculta la página de registro.
    registerView.style.display = 'none'
    // Muestra la página de inicio de sesión, login
    loginView.style.display = ''
}

// SUBMIT FOR REGISTER, entregar el registro, enviar el registro
// Almacena una referencia al formulario de registro.
var registerForm = registerView.querySelector('#register-form')
// Adjunta un manejador de eventos al formulario de registro.
// Cuando el usuario envía el formulario, se ejecuta la función especificada en el manejador de eventos.
registerForm.onsubmit = function (event){
    event.preventDefault()

    var nameRegister = registerForm.querySelector('#name-register')
    var emailRegister = registerForm.querySelector('#email-register')
    var passwordRegister = registerForm.querySelector('#password-register')
// Obtiene los valores de los campos del formulario.
    var name = nameRegister.value
    var email = emailRegister.value
    var password = passwordRegister.value
// Intenta registrar al usuario.
    try{
        registerUser(name, email, password)
 // Limpia el formulario de registro.
        registerForm.reset()
// Oculta la página de registro.
        registerView.style.display = 'none'
        // Muestra la página de inicio de sesión, login
        loginView.style.display = ''
        //Captura los errores, si los hay, y lanza un error
    }catch (error){
        alert(error.message)
    }
}

