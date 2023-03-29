import { Card, popupElementPhotoCards } from './Card.js';
import {
  initialCards,
  cardContent,
  validPopup,
  formProfelElement,
  newCardElement,
  popupEditButtonElement,
  popupAddButtonElement,
  popupElementCard,
  popupElementProfel,
  nameProfail,
  jobProfail,
  nameInputElement,
  jobInputElement,
  nameCardElement,
  linkCardElement,
  closeBtProfel,
  closeBtNewCard,
  popupCloseButton
} from './constants.js';

import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './utils.js'

// Кнопка сохранить
function saveButtonFormSubmit(evt) {
  evt.preventDefault();
  nameProfail.textContent = nameInputElement.value;
  jobProfail.textContent = jobInputElement.value;
  closePopup(popupElementProfel);
};

// функция профеля
function openProfilePopup() {
  nameInputElement.value = nameProfail.textContent;
  jobInputElement.value = jobProfail.textContent;
  openPopup(popupElementProfel);
};

//valadadion form
const validationFormProfel = new FormValidator(validPopup, formProfelElement);
validationFormProfel.enableValidation();
const validationFormAddNewCards = new FormValidator(validPopup, newCardElement);
validationFormAddNewCards.enableValidation();
const validationFormAddCards = new FormValidator(validPopup, newCardElement);
validationFormAddCards.disableSubmitBt();

// Добавление карточек в DOM
// Карточки из масива
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.group-template', openPopup);
  const cardElement = card.generateCard();
  cardContent.append(cardElement);
});

// Добавление новых карточек из форм
function addBtFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(nameCardElement.value, linkCardElement.value, '.group-template', openPopup);
  const cardElement = newCard.generateCard();
  cardContent.prepend(cardElement);
  closePopup(popupElementCard);
  newCardElement.reset();
};

// слушатели
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
popupCloseButton.addEventListener('click', () => {
  closePopup(popupElementPhotoCards);
  });
