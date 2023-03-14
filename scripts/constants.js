// Объявление переменных
const initialCards = [
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
// popup
const popupElementProfel = document.querySelector('.popup_profel');
const popupElementCard = document.querySelector('.popup_new-card');
const popupElementImagesCard = document.querySelector('.popup_photo');
// button open popup
const popupEditButtonElement = document.querySelector('.profail__edit-button');
const popupAddButtonElement = document.querySelector('.profail__add-button');
// close popups
const closeBtProfel = document.querySelector('.popup__close_profel');
const closeBtNewCard = document.querySelector('.popup__close_new-card');
const closeBtImagesCars = document.querySelector('.popup__close_images-card');
// input
const nameProfail = document.querySelector('.profail__name');
const jobProfail = document.querySelector('.profail__text');
const nameInputElement = popupElementProfel.querySelector('.popup__input_name_block');
const jobInputElement = popupElementProfel.querySelector('.popup__input_text_block');
const nameCardElement = popupElementCard.querySelector('.popup__input_name_card');
const linkCardElement = popupElementCard.querySelector('.popup__input_link_card');
// form
const formProfelElement = document.querySelector('.popup__form-profel');
const newCardElement = document.querySelector('.popup__form_new-cards');
// template
const imgPopup = document.querySelector('.popup__images-cards');
const titlePopup = document.querySelector('.popup__name-cards');
const cardTemp = document.querySelector('#group-template').content;
const cardContent = document.querySelector('.group');
// valadadion form
const validPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


// Большое вам спасибо за ваши советы.
