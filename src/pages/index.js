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
////////////////////////////////////////////
//создание карт//////////////////////////
const cardElement = new Section({
  renderer: (data) => {
    const card = createCard(data);
    cardElement.addItem(card)
  }
}, cardContent);
//карточки
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
//////////////////////////////////////////
// валидация форм////////////////////////
const validationFormProfel = new FormValidator(validPopup, formProfelElement);
validationFormProfel.enableValidation();
const validationFormAddNewCards = new FormValidator(validPopup, formNewCardElement);
validationFormAddNewCards.enableValidation();
const validationFormAvatar = new FormValidator(validPopup, formAvatarElement);
validationFormAvatar.enableValidation();
//////////////////////////////////////////
// попап профеля/////////////////////////
const popupEditProfile = new PopupWithForm('.popup_profel', submitBtProfail);
popupEditProfile.setEventListener();

const userProfel = new UserInfo({
  nameSelector: '.profail__name',
  jobSelector: '.profail__text',
  avatarSelector: '.profail__avatar-images',
});

async function submitBtProfail(data) {
  popupEditProfile.renderLoading(true, 'Save...');
  api.setUserInfo(data)
    .then(res => {
      userProfel.setUserInfo(res);
      userProfel.setUserAvatar(res);
      popupEditProfile.close();
    })
    .catch((evt) => {
      console.warn(evt)
    }).finally(
      () => {
        popupEditProfile.renderLoading(false);
      }
    )
};

popupEditButtonElement.addEventListener('click', () => {
  popupEditProfile.open();
  const info = userProfel.getUserInfo();
  nameInputElement.value = info.name;
  jobInputElement.value = info.about;
  validationFormProfel.resetError();
  validationFormProfel.disableSubmitBt();
});
/////////////////////////////////////////
//аватарка профеля//////////////////////
const popupAvatar = new PopupWithForm('.popup_avatar', submitBtAvatar);
popupAvatar.setEventListener();

popupAvatarElement.addEventListener('click', () => {
  popupAvatar.open();
  validationFormAvatar.resetError();
  validationFormAvatar.disableSubmitBt();
});

async function submitBtAvatar(data) {
  popupAvatar.renderLoading(true, 'Save...');
  api.setUserInfoAvatar(data)
    .then(res => {
      userProfel.setUserAvatar(res);
      popupAvatar.close();
    })
    .catch((evt) => {
      console.warn(evt)
    })
    .finally(
      () => {
        popupAvatar.renderLoading(false);
      }
    )
};
/////////////////////////////////////////
//попап добавление новой карточки///////
const popupAddCard = new PopupWithForm('.popup_new-card', submitBtAddCard);
popupAddCard.setEventListener();

popupAddButtonElement.addEventListener('click', () => {
  popupAddCard.open();
  validationFormAddNewCards.disableSubmitBt();
  validationFormAddNewCards.resetError();
});

async function submitBtAddCard(data) {
  popupAddCard.renderLoading(true, 'Save...');
  api.addCard(data)
    .then(res => {
      const card = createCard(res);
      cardElement.addItem(card);
      popupAddCard.close();
    })
    .catch((evt) => {
      console.warn(evt)
    })
    .finally(
      () => {
        popupAddCard.renderLoading(false);
      }
    )
};
/////////////////////////////////////////
//открытие карточки/////////////////////
const popupElementPhotoCards = new PopupWithImage('.popup_photo');
popupElementPhotoCards.setEventListener();

function handleCardClick(name, link) {
  popupElementPhotoCards.open(name, link);
};
/////////////////////////////////////////
//удаление карточки/////////////////////
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
/////////////////////////////////////////
/// API//////////////////////////////////
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
    userProfel.setUserAvatar(userData);
    cardElement.renderItems(cards.reverse());
  })
  .catch((e) => console.log(e));
/////////////////////////////////////////
