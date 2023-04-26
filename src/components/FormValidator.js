export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = formElement.querySelector(this._config.submitButtonSelector);
  }

  _showInputError(inputElement, validationMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid === true) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  disableSubmitBt() {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  _toggleBtState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitBt();
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleBtState();
      });
    });
  }

  resetError() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleBtState();
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleBtState();
  }
}
