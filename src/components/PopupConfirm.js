import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._saveButton = this.popup.querySelector('.popup__button-save');
  }

  open(card) {
    this._card = card;
    super.open();
  }

  setEventListener() {
    super.setEventListener();
    this._saveButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._card);
    });
  }
}
