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
  validationFormProfel.disableSubmitBt();
 };

//valadadion form
const validationFormProfel = new FormValidator(validPopup, formProfelElement);
validationFormProfel.enableValidation();
const validationFormAddNewCards = new FormValidator(validPopup, newCardElement);
validationFormAddNewCards.enableValidation();

// Добавление карточек в DOM
// функция создания карточки
function createCard(data) {
  const card = new Card(data, '.group-template', openPopup);
  const cardElement = card.generateCard();
  return cardElement
};
// Карточки из масива
initialCards.forEach((data) => {
  const cardElement = createCard(data);
  cardContent.append(cardElement);
});
// Добавление новых карточек из форм
function addBtFormSubmit(evt) {
  evt.preventDefault();
  const data = {
    name: nameCardElement.value,
    link: linkCardElement.value,
  };
  const templateSelector = createCard(data)
  cardContent.prepend(templateSelector);
  validationFormAddNewCards.disableSubmitBt();
  closePopup(popupElementCard);
};
// слушатели
popupEditButtonElement.addEventListener('click', openProfilePopup);
popupAddButtonElement.addEventListener('click', function () {
  openPopup(popupElementCard);
  newCardElement.reset();
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
