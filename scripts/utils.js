// открыть попап
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};
// закрыть попап
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};
//закрытие попап по клавише 'Esc'
export function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
};
// закрытия попап по клику на пустую область
export const popup = document.querySelectorAll('.popup').forEach(item => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    };
  });
});
