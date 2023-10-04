const loginform = document.getElementById("login-form");

loginform.onsubmit = function (event) {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  console.log("hello register", email, password);

  alert("user login");

  location.href = "home.html";
};
