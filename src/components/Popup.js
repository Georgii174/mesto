export default class Popup {
  constructor(popup) {
    this.popup = document.querySelector(popup);
    this._closeButton = this.popup.querySelector('.popup__close');
  }

  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popup.classList.remove('popup_opened');
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
    this.popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      };
    });
  }
};
