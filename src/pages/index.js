import Card from '../components/Card.js';
import {
  initialCards,
  validPopup,
  formProfelElement,
  formNewCardElement,
  formAvatarElement,
  popupEditButtonElement,
  popupAddButtonElement,
  popupAvatarElement,
  nameInputElement,
  aboutInputElement,
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '87a6d699-c32c-4dde-9ddf-4290549fb435',
    'Content-Type': 'application/json'
  }
})

const openProfilePopup = new PopupWithForm('.popup_profel', submitBtProfail);
openProfilePopup.setEventListener();

const openAddCardPopup = new PopupWithForm('.popup_new-card', submitBtAddCard);
openAddCardPopup.setEventListener();

const openAvatarPopup = new PopupWithForm('.popup_avatar', submitBtAvatar);
openAvatarPopup.setEventListener();

const popupElementPhotoCards = new PopupWithImage('.popup_photo');
popupElementPhotoCards.setEventListener();

// валидация форм
const validationFormProfel = new FormValidator(validPopup, formProfelElement);
validationFormProfel.enableValidation();
const validationFormAddNewCards = new FormValidator(validPopup, formNewCardElement);
validationFormAddNewCards.enableValidation();
const validationFormAvatar = new FormValidator(validPopup, formAvatarElement);
validationFormAvatar.enableValidation();

// попап профеля
const userProfel = new UserInfo({
  nameSelector: '.profail__name',
  aboutSelector: '.profail__text',
  avatarSelector: 'profail__avatar',
});

popupEditButtonElement.addEventListener('click', () => {
  openProfilePopup.open();
  const {name, about} = userProfel.getUserInfo();
  nameInputElement.value = name;
  aboutInputElement.value = about;
  validationFormProfel.resetError();
  validationFormProfel.disableSubmitBt();

});

function submitBtProfail(data) {
  userProfel.setUserInfo(data);
  openProfilePopup.close();
};

//аватарка профеля
popupAvatarElement.addEventListener('click', () => {
  openAvatarPopup.open();
  validationFormAvatar.resetError();
  validationFormAvatar.disableSubmitBt();
});

function submitBtAvatar(data) {
  userProfel.setUserInfo(data);
  openAvatarPopup.close();
};



////////////////////////////////////////////////////////////////////////////////

//// попап добавление новой карточки
popupAddButtonElement.addEventListener('click', () => {
  openAddCardPopup.open();
  validationFormAddNewCards.disableSubmitBt();
  validationFormAddNewCards.resetError();
});

function submitBtAddCard(data) {
  const card = createCard(data.nameCard, data.linkCard, '.group-template', handleCardClick);
  cardElement.addItem(card);
};
//////////////////////////////////////////////////////////////////////////////////////

// карточки
const createCard = (name, link, templateSelector, openPopup) => {
  const card = new Card(name, link, templateSelector, openPopup);
  return card.generateCard();
};

function renderCards(cardItem) {
  const card = createCard(cardItem.name, cardItem.link, '.group-template', handleCardClick);
  cardElement.addItem(card);
};

const cardElement = new Section({
  data: initialCards,
  renderer: renderCards,
}, '.group');

cardElement.renderItems(initialCards);
//////////////////////////////////////////////////////////////////////////////////////////////////

//открытие карточки
function handleCardClick(name, link) {
  popupElementPhotoCards.open(name, link);
};

