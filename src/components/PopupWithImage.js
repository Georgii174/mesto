import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImages = this.popup.querySelector('.popup__images-cards');
    this._titlePopup = this.popup.querySelector('.popup__name-cards');
  }

  open(name, link) {
    super.open();
    this._popupImages.src = link;
    this._popupImages.alt = name;
    this._titlePopup.textContent = name;
  }
}
