function enableValidation(validPopup) {
  const formList = Array.from(document.querySelectorAll(validPopup.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, validPopup);
  });
};

function checkInputValidity(formElement, inputElement, validPopup) {
  if (inputElement.validity.valid === true) {
    hideInputError(formElement, inputElement, validPopup);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, validPopup);
  }
};

function showInputError(formElement, inputElement, errorMessage, validPopup) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validPopup.inputErrorClass);
  errorElement.classList.add(validPopup.errorClass);
  errorElement.textContent = errorMessage;
};

function hideInputError(formElement, inputElement, validPopup) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validPopup.inputErrorClass);
  errorElement.classList.remove(validPopup.errorClass);
  errorElement.textContent = '';
};

function setEventListeners(formElement, validPopup) {
  const inputList = Array.from(formElement.querySelectorAll(validPopup.inputSelector));
  const buttonElement = formElement.querySelector(validPopup.submitButtonSelector);
  toggleBtState(inputList, buttonElement, validPopup);
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleBtState(inputList, buttonElement, validPopup);
    }, );
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validPopup);
      toggleBtState(inputList, buttonElement, validPopup);
    });
  });
};

// function resetError(formElement, validPopup) {
//   const inputList = Array.from(formElement.querySelectorAll(validPopup.inputSelector));
//   // очищаем ошибки валидации
//   inputList.forEach(inputElement => hideInputError(formElement, inputElement, validPopup));
//   // актуализируем состояние кнопки сабмита
//   toggleBtState(formElement, inputList, buttonElement, validPopup);
// };

function toggleBtState(inputList, buttonElement, validPopup) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validPopup.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(validPopup.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};



enableValidation(validPopup);
