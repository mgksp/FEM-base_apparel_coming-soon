const btn = document.getElementById("submit-btn");
const emailInput = document.getElementById("email-input");
const errorText = document.getElementById("error-text");

const inputGrp = document.getElementById("input-group");

const showErrorMsg = () => {
  inputGrp.classList.toggle("hero-content__input-group--invalid");

  setTimeout(() => {
    inputGrp.classList.toggle("hero-content__input-group--invalid");
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
    return false;
  }

  return true;
};

btn.addEventListener("click", () => {
  const isValid = validateEmail(emailInput.value);
  if (isValid) {
    window.location.replace("https://www.github.com/mgksp");
  }
});
