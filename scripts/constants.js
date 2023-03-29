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

// Объявление переменных
// popup
export const popupElementProfel = document.querySelector('.popup_profel');
export const popupElementCard = document.querySelector('.popup_new-card');
// button open popup
export const popupEditButtonElement = document.querySelector('.profail__edit-button');
export const popupAddButtonElement = document.querySelector('.profail__add-button');
// close popups
export const closeBtProfel = document.querySelector('.popup__close_profel');
export const closeBtNewCard = document.querySelector('.popup__close_new-card');
export const popupCloseButton = document.querySelector('.popup__close_images-card');
// input
export const nameProfail = document.querySelector('.profail__name');
export const jobProfail = document.querySelector('.profail__text');
export const nameInputElement = popupElementProfel.querySelector('.popup__input_name_block');
export const jobInputElement = popupElementProfel.querySelector('.popup__input_text_block');
export const nameCardElement = popupElementCard.querySelector('.popup__input_name_card');
export const linkCardElement = popupElementCard.querySelector('.popup__input_link_card');
// form
export const formProfelElement = document.querySelector('.popup__form-profel');
export const newCardElement = document.querySelector('.popup__form_new-cards');
// template
export const imgPopup = document.querySelector('.popup__images-cards');
export const titlePopup = document.querySelector('.popup__name-cards');
export const cardContent = document.querySelector('.group');
// valadadion form
export const validPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
