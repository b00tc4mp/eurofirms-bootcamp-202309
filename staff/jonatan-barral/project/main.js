// Obtenemos referencias a elementos HTML por su ID
var loginView = document.getElementById('login-view') // La vista de inicio de sesión
var reprisesView = document.getElementById('reprises-view') // La vista de reprises
var eventsView = document.getElementById('events-view') // La vista de eventos
var headView = document.getElementById('head-view') // La vista principal
var dressageView = document.getElementById('dressage-view')
var paralimpicView = document.getElementById('paralimpic-view')

// Ocultamos todas las vistas excepto la de inicio de sesión
loginView.style.display = ''
reprisesView.style.display = 'none'
eventsView.style.display = 'none'
headView.style.display = 'none'
dressageView.style.display = 'none'
paralimpicView.style.display = 'none'

// Datos de usuarios
var users = [
    { name: 'JuezC', password: '123123123' },
    { name: 'secretaria', password: '123123123' }
]

// Obtenemos el formulario de inicio de sesión dentro de la vista de inicio de sesión
var loginForm = loginView.querySelector('#login-form')
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var usernameInput = loginForm.querySelector('#user')
    var passwordInput = loginForm.querySelector('#password-login')

    var username = usernameInput.value
    var password = passwordInput.value

    var foundUser = null

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.name === username) {
            foundUser = user
            break
        }
    }

    if (foundUser === null || foundUser.password !== password) {
        alert('Credenciales incorrectas')
        return
    }

    usernameInput.value = ''
    passwordInput.value = ''

    loginView.style.display = 'none'
    headView.style.display = ''
}

// Gestión de enlaces y botones para cambiar de vistas
var reprisesLink = headView.querySelector('#reprises-link')
reprisesLink.onclick = function (event) {
    event.preventDefault()
    headView.style.display = 'none'
    reprisesView.style.display = ''
}

var dressageLink = reprisesView.querySelector('#dressage-link')
dressageLink.onclick = function (event) {
    event.preventDefault()
    reprisesView.style.display = 'none'
    dressageView.style.display = ''
}

var goBackDressage = dressageView.querySelector('#go-back')
goBackDressage.onclick = function (event) {
    event.preventDefault()
    dressageView.style.display = 'none'
    reprisesView.style.display = ''
}

var paralimpicLink = reprisesView.querySelector('#paralimpic-link')
paralimpicLink.onclick = function (event) {
    event.preventDefault()
    reprisesView.style.display = 'none'
    paralimpicView.style.display = ''
}

var goBackParalimpic = paralimpicView.querySelector('#go-back')
goBackParalimpic.onclick = function (event) {
    event.preventDefault()
    paralimpicView.style.display = 'none'
    reprisesView.style.display = ''
}
var eventsLink = document.getElementById('events-link')
eventsLink.onclick = function(event) {
    event.preventDefault()

    headView.style.display = 'none'
    eventsLink.style.display = ''
}
