export class FormValidator {
  constructor(formElement, config) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(this._config._inputSelector));
    this._buttonElement = Array.from(formElement.querySelector(this._config._submitButtonSelector));
  }

  _enableValidation() {
    this._setEventListeners();
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid === true) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.errorMessage);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleBtState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners(formElement) {
    this._toggleBtState(this._inputList, this._buttonElement);
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleBtState(this._inputList, this._buttonElement);
      }, );
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleBtState(this._inputList, this._buttonElement);
      });
    });
  }
}
