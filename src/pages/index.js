import Card from '../components/Card.js';
import {
  initialCards,
  cardContent,
  validPopup,
  formProfelElement,
  formNewCardElement,
  popupEditButtonElement,
  popupAddButtonElement,
  // popupElementCard,
  // popupElementProfel,
  // nameProfail,
  // jobProfail,
  nameInputElement,
  jobInputElement,
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

// валидация форм
const validationFormProfel = new FormValidator(validPopup, formProfelElement);
validationFormProfel.enableValidation();
const validationFormAddNewCards = new FormValidator(validPopup, formNewCardElement);
validationFormAddNewCards.enableValidation();

// попап профеля
const userProfel = new UserInfo({
  nameSelector: '.profail__name',
  jobSelector: '.profail__text',
});

popupEditButtonElement.addEventListener('click', () => {
  openProfilePopup.open();
  const {name, job} = userProfel.getUserInfo();
  nameInputElement.value = name;
  jobInputElement.value = job;
  validationFormProfel.disableSubmitBt();
});

function submitBtProfail(data) {
  userProfel.setUserInfo(data);
  openProfilePopup.close();
};

////////////////////////////////////////////////////////////////////////////////

//// попап добавление новой карточки
popupAddButtonElement.addEventListener('click', () => {
  openAddCardPopup.open();
  validationFormAddNewCards.disableSubmitBt();
});

function submitBtAddCard(data) {
  const card = createCard(data.nameCard, data.linkCard, '.group-template', handleCardClick);
  cardElement.addItem(card);
};
//////////////////////////////////////////////////////////////////////////////////////

// карточки
const createCard = (title, link, templateSelector, openPopup) => {
  const card = new Card(title, link, templateSelector, openPopup);
  return card.generateCard();
};

function renderCards(cardItem) {
  const card = createCard(cardItem.title, cardItem.link, '.group-template', handleCardClick);
  cardElement.addItem(card);
};

const cardElement = new Section({
  data: initialCards,
  renderer: renderCards,
}, '.group');

cardElement.renderItems();
//////////////////////////////////////////////////////////////////////////////////////////////////

//открытие карточки
function handleCardClick(title, link) {
  popupElementPhotoCards.open(title, link);
};

