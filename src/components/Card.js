export default class Card {
  constructor(name, link, templateSelector, openPopup) {
    this._name = name;
    this._link = link;
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
    this._groupImg = this._element.querySelector('.group__images');
    this._groupTitle = this._element.querySelector('.group__name');
    this._groupImg.src = this._link;
    this._groupImg.alt = this._name;
    this._groupTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _handleClickLike() {
    this._element.querySelector('.group__button-like').classList.toggle('group__button-like_active');
  }

  _handleDelCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._groupImg.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._element.querySelector('.group__button-like').addEventListener('click', () => {
      this._handleClickLike();
    });

    this._element.querySelector('.group__button-del').addEventListener('click', () => {
      this._handleDelCard();
    });
  }
}

