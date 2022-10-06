const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messagerContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  //using constraint api
  isValid = form.checkValidity();
  // Style main message for error
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messagerContainer.style.borderColor = "red";
    return;
  }
  //check if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messagerContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // if vaild and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messagerContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // do something
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
  //submit if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

//Listeners
form.addEventListener("submit", processFormData);
