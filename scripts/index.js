// Кнопка сохранить
function saveButtonFormSubmit(evt) {
  evt.preventDefault();
  nameProfail.textContent = nameInputElement.value;
  jobProfail.textContent = jobInputElement.value;
  closePopup(popupElement);
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
  cardElement.querySelector('.group__images').src = link;
  cardElement.querySelector('.group__name').textContent = name;
  cardElement.querySelector('.group__images').alt = name;

  // кнопка лайк
  cardContent.addEventListener('click', elem => {
    if (elem.target.classList.contains('group__button-like')) {
      elem.target.classList.toggle('group__button-like_active');
    }
  });
  // удаление карточки
  cardContent.addEventListener('click', elem => {
    if (elem.target.classList.contains('group__button-del')) {
      const elemTarget = elem.target.closest('.group__element');
      elemTarget.remove();
    }
  });
  // открытие карточки(попап)
  cardContent.addEventListener('click', elem => {
    if (elem.target.classList.contains('group__images')) {
      imgPopup.src = elem.target.closest('.group__images').src;
      titlePopup.textContent = elem.target.closest('.group__images').alt;
      titlePopup.alt = elem.target.closest('.group__images').alt;
      popupOpen(popupElementImagesCard);
    };
  });

  return cardElement;
};

function addBtFormSubmit(evt) {
  evt.preventDefault();
  addCards();
  closePopup(popupElementCard);
}

// открыть.закрыть попап
function popupOpen(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
// функция профеля
function openPopup() {
  nameInputElement.value = nameProfail.textContent;
  jobInputElement.value = jobProfail.textContent;
  popupOpen(popupElement);
};


popupOpenButtonElement.addEventListener('click', openPopup);
popupAddButtonElement.addEventListener('click', function () {
  popupOpen(popupElementCard);
});
closeBtProfel.addEventListener('click', function () {
  closePopup(popupElement);
});
closeBtNewCard.addEventListener('click', function () {
  closePopup(popupElementCard);
});
closeBtImagesCars.addEventListener('click', function () {
  closePopup(popupElementImagesCard);
});
newCardElement.addEventListener('submit', addBtFormSubmit);
formElement.addEventListener('submit', saveButtonFormSubmit);
