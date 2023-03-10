const enableValidation = (validPopup) => {
  const formList = Array.from(document.querySelectorAll(validPopup.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, validPopup);
  });
};

const checkInputValidity = (formElement, inputElement, validPopup) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validPopup);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage, validPopup) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validPopup.inputErrorClass);
  errorElement.classList.add(validPopup.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, validPopup) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validPopup.inputErrorClass);
  errorElement.classList.remove(validPopup.errorClass);
  errorElement.textContent = '';
};


function setEventListeners(formElement, validPopup) {
  const inputList = Array.from(formElement.querySelectorAll(validPopup.inputSelector));
  const buttonElement = formElement.querySelector(validPopup.submitButtonSelector);
  toggleBtState(inputList, buttonElement, validPopup);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validPopup);
      toggleBtState(inputList, buttonElement, validPopup);
    });
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  });
};

const toggleBtState = (inputList, buttonElement, validPopup) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validPopup.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(validPopup.inactiveButtonClass);
    buttonElement.removeAttribute("disabled", true);
  }
};

enableValidation(validPopup);
