export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(popupSelector);
    this._closeButton = this.popupSelector.querySelector('.popup__close');
  }

  open() {
    this.popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListener(){
    this._closeButton.addEventListener('click', () =>
    this.close());
    this.popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      };
    });
  }
};
