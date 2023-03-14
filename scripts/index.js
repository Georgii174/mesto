// Кнопка сохранить
function saveButtonFormSubmit(evt) {
  evt.preventDefault();
  nameProfail.textContent = nameInputElement.value;
  jobProfail.textContent = jobInputElement.value;
  closePopup(popupElementProfel);
};
//Карточки из масива
function renderCards(initialCards) {
  const cardMas = initialCards.map(function (cardElement) {
    return createCards(cardElement.name, cardElement.link);
  });
  cardContent.append(...cardMas);
};

renderCards(initialCards);

// добавление новой карточки
function addCards() {
  const name = nameCardElement.value;
  const link = linkCardElement.value;
  const cardElement = createCards(name, link);
  cardContent.prepend(cardElement);
};

function createCards(name, link) {
  const cardElement = cardTemp.cloneNode(true);
  const imgCard = cardElement.querySelector('.group__images');
  const nameCard = cardElement.querySelector('.group__name');
  const btDelCard = cardElement.querySelector('.group__button-del');
  const btLikeCard = cardElement.querySelector('.group__button-like');
  imgCard.src = link;
  nameCard.textContent = name;
  imgCard.alt = name;

  // кнопка лайк
  btLikeCard.addEventListener('click', elem => {
    elem.target.classList.toggle('group__button-like_active');
  });
  // удаление карточки
  btDelCard.addEventListener('click', elem => {
    const elemTarget = elem.target.closest('.group__element');
    elemTarget.remove();
  });

  // открытие карточки(попап)
  imgCard.addEventListener('click', elem => {
    imgPopup.src = link;
    titlePopup.textContent = name;
    titlePopup.alt = name;
    popupOpen(popupElementImagesCard);
  });

  return cardElement;
};

function addBtFormSubmit(evt) {
  evt.preventDefault();
  addCards();
  closePopup(popupElementCard);
  evt.target.reset();
};

// открыть попап
function popupOpen(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};
// закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};
//закрытие попап по клавише 'Esc'
function closePopupEsc(evt) {
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
function openPopup() {
  nameInputElement.value = nameProfail.textContent;
  jobInputElement.value = jobProfail.textContent;
  popupOpen(popupElementProfel);
};


popupEditButtonElement.addEventListener('click', openPopup);
popupAddButtonElement.addEventListener('click', function () {
  popupOpen(popupElementCard);
});
closeBtProfel.addEventListener('click', function () {
  closePopup(popupElementProfel);
});
closeBtNewCard.addEventListener('click', function () {
  closePopup(popupElementCard);
});
closeBtImagesCars.addEventListener('click', function () {
  closePopup(popupElementImagesCard);
});
newCardElement.addEventListener('submit', addBtFormSubmit);
formProfelElement.addEventListener('submit', saveButtonFormSubmit);


