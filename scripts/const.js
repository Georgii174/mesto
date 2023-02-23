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

const popupElement = document.querySelector('.popup__profel');
const popupElementCard = document.querySelector('.popup__new-card');
const popupElementImagesCard = document.querySelector('.popup__images-card');
const popupOpenButtonElement = document.querySelector('.profail__edit-button');
const popupAddButtonElement = document.querySelector('.profail__add-button');
const popupImagBtElement = document.querySelector('.group__images')
const closeBtProfel = document.querySelector('.popup__close_profel');
const closeBtNewCard = document.querySelector('.popup__close_new-card');
const closeBtImagesCars = document.querySelector('.popup__close_images-card');
const nameProfail = document.querySelector('.profail__name');
const jobProfail = document.querySelector('.profail__text');
const nameInputElement = popupElement.querySelector('.popup__input_name_block');
const jobInputElement = popupElement.querySelector('.popup__input_text_block');
const nameCardElement = popupElementCard.querySelector('.popup__input_name_card');
const linkCardElement = popupElementCard.querySelector('.popup__input_link_card');
const formElement = document.querySelector('.popup__content-profel');
const newCardElement = document.querySelector('.popup__content_new-cards');
const content = document.querySelector('.content');
const cardGroup = content.querySelector('.group');
const addBt = document.querySelector('.popup__button-add');
const imgPopup = document.querySelector('.popup__images-cards');
const titlePopup = document.querySelector('.popup__name-cards');
const cardTemp = document.querySelector('#group-template').content;
const cardElement = cardTemp.cloneNode(true);
const cardContent = document.querySelector('.group');


