var h1 = React.createElement('h1', null, 'Login')

var emailLabel = React.createElement('label', { className: 'label', htmlFor: 'email-input' }, 'E-mail')
var emailInput = React.createElement('input', { className: 'input', type: 'email', id: 'email-input' })

var passwordLabel = React.createElement('label', { className: 'label', htmlFor: 'password-input' }, 'Password')
var passwordInput = React.createElement('input', { className: 'input', type: 'password', id: 'password-input' })

var submitButton = React.createElement('button', { className: 'button', type: 'submit' }, 'Login')

var form = React.createElement('form', { className: 'form' }, [emailLabel, emailInput, passwordLabel, passwordInput, submitButton])

var a = React.createElement('a', null, 'Register')

var loginView = React.createElement('div', { className: 'view' }, [h1, form, a])

var root = ReactDOM.createRoot(document.getElementById('root'))
root.render(loginView)