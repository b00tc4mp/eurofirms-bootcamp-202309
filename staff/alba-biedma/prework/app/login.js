const loginForm = document .getElementById('login-form')

loginForm.onsubmit = function(event) {
    event.preventDefault()

   const email = event.target.email.value
   const password = event.target.password.value

    console.log('welcome back', email, password)
    
    alert ('welcome back')

    location.href = 'home.html'

}

