export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
];

const popupElement = document.querySelector('.popup_photo');
const popupImages = document.querySelector('.popup__images-cards');
const popupCloseButton = document.querySelector('.popup__close_images-card');
const titlePopup = document.querySelector('.popup__name-cards');

export class Card {
  constructor(name, link, templateSelector, openPopup) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
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
    this._element.querySelector('.group__images').src = this._link;
    this._element.querySelector('.group__images').alt = this._name;
    this._element.querySelector('.group__name').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _renderCards() {
    initialCards.forEach(function (item) {
      const card = new Card(item);
      const cardElement = card.generateCard();
      document.querySelector('.group').append(cardElement);
    })
  }

  _handleOpenPopup() {
    this._openPopup(popupElement);
    popupImages.src = this._link;
    titlePopup.alt = this._name;
    titlePopup.textContent = this._name;
    // popupElement.classList.add('popup_opened')
  }

  _handleClosePopup() {
    popupImages.src = '';
    popupElement.classList.remove('popup_opened');
  }

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
    // this._element.addEventListener('click', (evt) => {
    //   if (evt.target.classList.contains('group__images')) {

    //   }
    // });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });

    this._element.querySelector('.group__button-like').addEventListener('click', () => {
      this._handleClickLike();
    });

    this._element.querySelector('.group__button-del').addEventListener('click', () => {
      this._handleDelCard();
    });
  }
}

