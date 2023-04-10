// export const popupElementPhotoCards = document.querySelector('.popup_photo');
const popupImages = document.querySelector('.popup__images-cards');
const titlePopup = document.querySelector('.popup__name-cards');

export class Card {
  constructor(data, templateSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.group__element')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const groupImg = this._element.querySelector('.group__images');
    groupImg.src = this._link;
    groupImg.alt = this._name;
    this._element.querySelector('.group__name').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  // _handleOpenPopup() {
  //   this._handleCardClick(popupElementPhotoCards);
  //   popupImages.src = this._link;
  //   titlePopup.alt = this._name;
  //   titlePopup.textContent = this._name;
  // }

  _handleClickLike() {
    this._element.querySelector('.group__button-like').classList.toggle('group__button-like_active');
  }

  _handleDelCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.group__images').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._element.querySelector('.group__button-like').addEventListener('click', () => {
      this._handleClickLike();
    });

    this._element.querySelector('.group__button-del').addEventListener('click', () => {
      this._handleDelCard();
    });
  }
}
