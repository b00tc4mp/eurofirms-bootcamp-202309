const registerForm = document.getElementById('login-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

   const email = event.target.email.value
   const password = event.target.password.value   

    console.log('hello login', email, password)

    alert('login successful')

    location.href = 'home.html'


}