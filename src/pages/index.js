import { Card} from '../components/Card.js';
import {
  initialCards,
  cardContent,
  validPopup,
  formProfelElement,
  newCardElement,
  popupEditButtonElement,
  popupAddButtonElement,
  // popupElementCard,
  // popupElementProfel,
  // nameProfail,
  // jobProfail,
  // nameInputElement,
  // jobInputElement,
  // nameCardElement,
  // linkCardElement,
  // closeBtProfel,
  // closeBtNewCard,
  // popupCloseButton
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
//import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const openProfilePopup = new PopupWithForm('.popup_profel', submitBtProfail);
openProfilePopup.setEventListener();

const openAddCardPopup = new PopupWithForm('.popup_new-card', submitBtAddCard);
openAddCardPopup.setEventListener();

const popupElementPhotoCards = new PopupWithImage('.popup_photo');
popupElementPhotoCards.setEventListener();

const validationFormProfel = new FormValidator(validPopup, formProfelElement);
validationFormProfel.enableValidation();
const validationFormAddNewCards = new FormValidator(validPopup, newCardElement);
validationFormAddNewCards.enableValidation();

const userProfel = new UserInfo({
  nameSelector: '.profail__name',
  jobSelector: '.profail__text',
})

popupEditButtonElement.addEventListener('click', () => {
  openProfilePopup.open();
  const {name, job} = UserInfo.getUserInfo();
  formProfelElement.name.value = name;
  formProfelElement.job.value = job;
  validationFormProfel.disableSubmitBt();
});

function submitBtProfail(data) {
  userProfel.setUserInfo(data);
  openProfilePopup.close();
};

popupAddButtonElement.addEventListener('click', () => {
  openAddCardPopup.open();
  validationFormAddNewCards.disableSubmitBt();
});

function submitBtAddCard(data) {
  const card = createCard(data._name, data._link, '.group-template', handleCardClick);
  cardContent.addItem(card);
};

function handleCardClick(name, link) {
  popupElementPhotoCards.open(name, link);
};

function createCard(data) {
  const card = new Card(data, '.group-template', openPopup);
  return card.generateCard();
};

function renderCards(cardItem) {
  const card = createCard(cardItem._name, cardItem._link, '.group-template', handleCardClick);
  cardContent.addItem(card);
};

const cardElement = new Section({
  data: initialCards,
  renderer: renderCards,
}, '.group');

cardElement.renderedItems();
