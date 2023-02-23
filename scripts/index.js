// Кнопка сохранить
function saveButtonFormSubmit(evt) {
  evt.preventDefault();
  nameProfail.textContent = nameInputElement.value;
  jobProfail.textContent = jobInputElement.value;
  closePopup();
};

//Карточки из масива
initialCards.forEach(function (elem) {
  const initialCardsElement = cardTemp.cloneNode(true);
  initialCardsElement.querySelector('.group__images').src = elem.link;
  initialCardsElement.querySelector('.group__name').textContent = elem.name;
  initialCardsElement.querySelector('.group__images').alt = elem.name;

  cardContent.append(initialCardsElement);
});

// добавление новой карточки
function addCards(elem) {
  elem.preventDefault();
  cardElement.querySelector('.group__images').src = linkCardElement.value;
  cardElement.querySelector('.group__name').textContent = nameCardElement.value;
  cardElement.querySelector('.group__name').alt = nameCardElement;

  cardContent.prepend(cardElement);
  closePopupNewCard();
};

// открыть.закрыть попап
function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInputElement.value = nameProfail.textContent;
  jobInputElement.value = jobProfail.textContent;
};
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
};
const openPopupNewCard = function () {
  popupElementCard.classList.add('popup_opened');
};
const closePopupNewCard = function () {
  popupElementCard.classList.remove('popup_opened');
};
const openPopupImagesCard = function () {
  popupElementImagesCard.classList.add('popup_opened');
};
const closePopupImagesCard = function () {
  popupElementImagesCard.classList.remove('popup_opened');
};
// кнопка лайк
content.addEventListener('click', elem => {
  if (elem.target.classList.contains('group__button-like')) {
    elem.target.classList.toggle('group__button-like_active');
  }
});
// удаление карточки
content.addEventListener('click', elem => {
  if (elem.target.classList.contains('group__button-del')) {
    const elemTarget = elem.target.closest('.group__element');
    elemTarget.remove();
  }
});
// открытие карточки(попап)
content.addEventListener('click', elem => {
  if (elem.target.classList.contains('group__images')) {
    popupElementImagesCard.classList.add('popup_opened');
    imgPopup.src = elem.target.closest('.group__images').src;
    titlePopup.textContent = elem.target.closest('.group__images').alt;
    titlePopup.alt = elem.target.closest('.group__images').alt;
  }
});

popupOpenButtonElement.addEventListener('click', openPopup);
popupAddButtonElement.addEventListener('click', openPopupNewCard);
closeBtProfel.addEventListener('click', closePopup);
closeBtNewCard.addEventListener('click', closePopupNewCard);
closeBtImagesCars.addEventListener('click', closePopupImagesCard);
newCardElement.addEventListener('submit', addCards);
formElement.addEventListener('submit', saveButtonFormSubmit);
