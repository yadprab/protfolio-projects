//get id function message

function getId(input) {
  //get input id
  const inputId = input.id;
  return `${inputId}`;
}

//input validation
function inputValidation(input) {
  //checking input is empty or not
  if (input.value.trim === "") {
    showError(input, `${getId(input)} is required`);
  }
  //checking input is greater than 10
  else if (input.value.length > 10) {
    showError(input, `${getId(input)}must be maximum 10 characters`);
  } //checking input is less than 6
  else if (input.value.length < 6) {
    showError(input, `${getId(input)}must be minimum 6 characters`);
  } else {
    showSuccess(input);
  }
}

//showSuccessFn
function showSuccess(input) {
  //add success class
  input.classList.add("success");

  //get input parent
  const inputParent = input.parentElement;
  //get small-tag
  const small = inputParent.querySelector("small");
  //small text-content
  small.textContent = "";
}

function showError(input, message) {
  //get input parent
  const inputParent = input.parentElement;
  //get small-tag
  const small = inputParent.querySelector("small");
  //add error class
  input.classList.add("error");
  input.classList.remove("success");
  //add message to small
  small.textContent = message;
}

function userNameValidation(input) {
  if (input.value.trim === "") {
    showError(input, `${getId(input)} is required`);
  } else if (input.value.length > 10) {
    showError(input, `${getId(input)}must be maximum 10 characters`);
  } else if (input.value.length < 6) {
    showError(input, `${getId(input)}must be minimum 6 characters`);
  } else {
    showSuccess(input);
  }
}
function emailValidation(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getId(input)} is not valid`);
  }
}

function passwordValidation(input) {
  const inpId = input.id;
  const inpType = input.type;
  if (inpId == "password" && inpType == "password") {
    inputValidation(input);
  } else {
    const password = document.querySelector("#password");
    passwordCheck(password, input);
  }
}

//password-check
function passwordCheck(input1, input2) {
  if (
    input1.value.length !== input2.value.length &&
    input1.value !== input2.value
  ) {
    showError(input2, `password doesn't match  `);
  } else {
    showSuccess(input2);
  }
}
export {
  showError,
  showSuccess,
  getId,
  userNameValidation,
  emailValidation,
  passwordValidation,
  passwordCheck,
};
