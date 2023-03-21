import {
  initialCards,
  Card
} from './Card.js';

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
// valadadion form
export const validPopup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
// Кнопка сохранить
function saveButtonFormSubmit(evt) {
  evt.preventDefault();
  nameProfail.textContent = nameInputElement.value;
  jobProfail.textContent = jobInputElement.value;
  closePopup(popupElementProfel);
};
// открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};
// закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};
//закрытие попап по клавише 'Esc'
export function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
};
// закрытия попап по клику на пустую область
const popup = document.querySelectorAll('.popup').forEach(item => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    };
  });
});
// функция профеля
function openProfilePopup() {
  nameInputElement.value = nameProfail.textContent;
  jobInputElement.value = jobProfail.textContent;
  openPopup(popupElementProfel);
};
// Добавление карточек в DOM
// Карточки из масива
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.group-template');
  const cardElement = card.generateCard();
  document.querySelector('.group').append(cardElement);
});
// Добавление новых карточек из форм
function addBtFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(nameCardElement.value, linkCardElement.value, '.group-template');
  const cardElement = newCard.generateCard();
  document.querySelector('.group').append(cardElement);
  closePopup(popupElementCard);
  evt.target.reset();
};

popupEditButtonElement.addEventListener('click', openProfilePopup);
popupAddButtonElement.addEventListener('click', function () {
  openPopup(popupElementCard);
});
closeBtProfel.addEventListener('click', function () {
  closePopup(popupElementProfel);
});
closeBtNewCard.addEventListener('click', function () {
  closePopup(popupElementCard);
});
newCardElement.addEventListener('submit', addBtFormSubmit);
formProfelElement.addEventListener('submit', saveButtonFormSubmit);
