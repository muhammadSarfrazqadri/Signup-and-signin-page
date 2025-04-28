function signUpPage() {
  document.getElementById("signup-form").style.display = "flex";
  document.getElementById("login-form").style.display = "none";
}

function signInPage() {
    document.getElementById("login-error").innerText = "";
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
  document.getElementById("login-form").style.display = "flex";
  document.getElementById("signup-form").style.display = "none";
}

let users = {};

function register() {
  let userName = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;

  users[userName] = password;
  signInPage();
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-password").value = "";
}