export class FormValidator {
  constructor(formElement, config) {
    this._from = formElement;
    this._inputSelector = config.inputSelector;
    this._button = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._from.querySelector(this._button);
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
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners() {
    this._toggleBtState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleBtState();
      });
    });
  }

  _enableValidation() {
    this._from.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    // this._toggleBtState(this._inputList, this._buttonElement)
  }
}
