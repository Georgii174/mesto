const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profail__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const nameProfail = document.querySelector('.profail__name')
const jobProfail = document.querySelector('.profail__text')
const nameInputElement = popupElement.querySelector('.popup__content_name');
const jobInputElement = popupElement.querySelector('.popup__content_text');
const formElement = document.querySelector('.popup__container');

const openPopup = function (event) {
  popupElement.classList.add('popup_is-opened');
  nameInputElement.value = nameProfail.textContent;
  jobInputElement.value = jobProfail.textContent;
};

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened');
};

const closePopupByClickOnOverlay = function(event) {
  if(event.target !== event.currentTarget){
    return;
  }

  closePopup();
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);


function saveButtonFormSubmit (evt) {
  evt.preventDefault();
  nameProfail.textContent = nameInputElement.value;
  jobProfail.textContent = jobInputElement.value;
  closePopup();
};


formElement.addEventListener('submit', saveButtonFormSubmit);




// openPopupButton.forEach((buttons) => {
//   buttons.addEventListener('click', (e) => {
//     e.preventDefault();
//     popup.classList.add('.popup_is-opened');
//     document.querySelector('.popup__content_name').value = document.querySelector('.profail__info_name').textContent;
//     document.querySelector('.popup__content_text').value = document.querySelector('.profail__info_text').textContent;
//   })
// });

// closePopupButton.addEventListener('click', () => {
//   popup.classList.remove('.popup__opened');
// });

// document.addEventListener('click', (e) => {
//   if(e.target === popup) {
//     popup.classList.remove('.popup__opened');
//   }
// });

