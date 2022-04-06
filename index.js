const btn = document.getElementById("submit-btn");
const emailInput = document.getElementById("email-input");
const errorText = document.getElementById("error-text");
const errorIcon = document.getElementById("error-icon");

const showErrorMsg = () => {
  errorText.style.bottom = "-2rem";
  emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
  errorIcon.style.opacity = "1";

  setTimeout(() => {
    errorText.style.bottom = "2rem";
    emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
    errorIcon.style.opacity = "0";
  }, 1000);
};

const validateEmail = (email) => {
  const emailRe =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let error = "";

  if (email === "") {
    error = "email address can't be empty";
  } else if (!emailRe.test(email)) {
    error = "enter a valid email address";
  }

  if (error !== "") {
    errorText.textContent = error;
    showErrorMsg();
  }
};

btn.addEventListener("click", () => {
  validateEmail(emailInput.value);
});
