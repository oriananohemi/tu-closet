var logName = document.getElementById("loginName");
var logPass = document.getElementById("loginPass");
var loginUser = document.getElementById("loginUser");
var logIn = document.getElementById("logIn");
var logOut = document.getElementById("logOut");

function loggedIn() {
  if (localStorage.getItem("name")) {
    loginUser.innerHTML = localStorage.getItem("name");
    logIn.classList.add("hidden");
  }
}

loggedIn();

function logged() {
  let passInput = document.getElementById("loginPass").value;
  if (passInput == 1234) {
    loginUser.innerHTML = logName.value;
    localStorage.setItem("name", logName.value);
    logIn.classList.add("hidden");
  } else {
    alert("Contrasena Incorrecta");
  }
}

function signOff() {
  loginUser.innerHTML = "";
  localStorage.clear();
  logIn.classList.remove("hidden");
  // window.location.href = "/";
}
