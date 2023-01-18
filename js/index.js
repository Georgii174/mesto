const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.profail__info_edit-button');
const closePopupButtons = document.querySelector('.popup__close');
//const saveButtonsFormElement = document.querySelector('.popup__content_button-save');
const nameProfail = document.querySelector('.profail__info_name')
const jobProfail = document.querySelector('.profail__info_text')
const nameInputElement = document.querySelector('.popup__content_name');
const jobInputElement = document.querySelector('.popup__content_text');

openPopupButtons.forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup__open');
    document.querySelector('.popup__content_name').value = document.querySelector('.profail__info_name').textContent;
    document.querySelector('.popup__content_text').value = document.querySelector('.profail__info_text').textContent;
  })
});

closePopupButtons.addEventListener('click', () => {
  popup.classList.remove('popup__open');
})

document.addEventListener('click', (e) => {
  if(e.target === popup) {
    popup.classList.remove('popup__open');
  }
});

const formElement = document.querySelector('.popup__conteiner');

function saveButtonsFormSubmit (evt) {
  evt.preventDefault();
  nameProfail.textContent = nameInputElement.value;
  jobProfail.textContent = jobInputElement.value;
  closeFormsElement('.popup__open');
}

formElement.addEventListener('submit', saveButtonsFormSubmit);
