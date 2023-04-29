import Card from '../components/Card.js';
import {
  //initialCards,
  validPopup,
  formProfelElement,
  formNewCardElement,
  formAvatarElement,
  popupEditButtonElement,
  popupAddButtonElement,
  popupAvatarElement,
  nameInputElement,
  jobInputElement,
  nameProfail,
  aboutProfail,
  cardContent,
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import Api from '../components/Api.js';
import PopupConfirm from '../components/PopupConfirm.js';

let userId;

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

const cardElement = new Section({
  renderer: (data) => {
    const card = createCard(data);
    cardElement.addItem(card)
  }
}, cardContent);

// // карточки
function createCard(data) {
  const card = new Card({
    name: data.name,
    link: data.link,
    likes: data.likes,
    userId,
    ownerId: data.owner._id,
    id: data._id
  }, '#group-template',
  handleCardClick,
    async () => {
      try {
        const res = await api.like(data._id);
        card.like();
        card.setLikeCheck(res);
      } catch (evt) {
        console.warn(evt)
      }
    },
      async () => {
        try {
          const res = await api.dislike(data._id);
          card.dislike();
          card.setLikeCheck(res);
      } catch (evt) {
        console.warn(evt)
      }
      },
    () => {
      confirmPopup.open(card)
    }
  );
return card.generateCard();
};


// попап профеля
const userProfel = new UserInfo({
  nameSelector: '.profail__name',
  jobSelector: '.profail__text',
  avatarSelector: 'profail__avatar',
});

async function submitBtProfail(data) {
  openProfilePopup.renderLoading(true, 'Save...');
  try {
    const res = await api.setUserInfo(data);
    userProfel.setUserInfo(res);
    openProfilePopup.close();
  } catch (evt) {
    console.warn(evt)
  } finally {
    openProfilePopup.renderLoading(false);
  }
}

popupEditButtonElement.addEventListener('click', () => {
  openProfilePopup.open();
  const info = userProfel.getUserInfo();
  // const {data} = userProfel.getUserInfo();
  nameInputElement.value = info.name;
  jobInputElement.value = info.job;
  validationFormProfel.resetError();
  validationFormProfel.disableSubmitBt();
});

// function renderPofilePopup() {
//   nameInputElement.value = nameProfail.textContent;
//   aboutInputElement.value = aboutProfail.textContent;
// };

// function submitBtProfail(data) {
//   userProfel.setUserInfo(data);
//   openProfilePopup.close();
// };

//аватарка профеля
popupAvatarElement.addEventListener('click', () => {
  openAvatarPopup.open();
  validationFormAvatar.resetError();
  validationFormAvatar.disableSubmitBt();
});

async function submitBtAvatar(data) {
  openAvatarPopup.renderLoading(true, 'Save...');
  try {
    const res = await api.setUserInfoAvatar(data);
    userProfel.setUserAvatar(res);
    openAvatarPopup.close();
  } catch (evt) {
    console.warn(evt)
  } finally {
    openAvatarPopup.renderLoading(false);
  }
};

////////////////////////////////////////////////////////////////////////////////


//// попап добавление новой карточки
popupAddButtonElement.addEventListener('click', () => {
  openAddCardPopup.open();
  validationFormAddNewCards.disableSubmitBt();
  validationFormAddNewCards.resetError();
});

async function submitBtAddCard(data) {
  openAddCardPopup.renderLoading(true, 'Save...');
  try {
    const res = await api.addCard(data);
    const card = createCard(res);
    cardElement.addItem(card);
    openAddCardPopup.close();
  } catch (evt) {
    console.warn(evt)
  } finally {
    openAddCardPopup.renderLoading(false);
  }
};
//////////////////////////////////////////////////////////////////////////////////////


// function renderCards(cardItem) {
//   const card = createCard(cardItem.name, cardItem.link, '.group-template', handleCardClick);
//   cardElement.addItem(card);
// };


// cardElement.renderItems(initialCards);
//////////////////////////////////////////////////////////////////////////////////////////////////

//открытие карточки
function handleCardClick(name, link) {
  popupElementPhotoCards.open(name, link);
};


const confirmPopup = new PopupConfirm('.popup_delete-card', async (card) => {
  try {
    await api.deleteCard(card._id);
    card.handleDelCard();
    confirmPopup.close();
  } catch (evt) {
    console.warn(evt)
  }
})
confirmPopup.setEventListener();

/// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '87a6d699-c32c-4dde-9ddf-4290549fb435',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userProfel.setUserInfo(userData);
    cardElement.renderItems(cards.reverse());
  })
  .catch((e) => console.log(e));
