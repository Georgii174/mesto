export default class Card {
  constructor(data, templateSelector, openPopup, like, dislike, deleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = openPopup;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._deleteCard = deleteCard;
    this._like = like;
    this._dislike = dislike;
    this._likes = data.likes;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.group__element')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._groupImg = this._element.querySelector('.group__images');
    this._groupTitle = this._element.querySelector('.group__name');
    this._groupImg.src = this._link;
    this._groupImg.alt = this._name;
    this._groupTitle.textContent = this._name;
    this._likeCard = this._element.querySelector('.group__button-like');
    this._likeCheck = this._element.querySelector('.group__like-check');
    this._likeCheck.textContent = `${this._likes.length}`;
    this._deleteBt = this._element.querySelector('.group__button-del');
    this._setEventListeners();
    this._isLiked();
    this.isOwner();
    return this._element;
  }

  // _handleClickLike() {
  //   this._likeCard.classList.toggle('group__button-like_active');
  // }

  like() {
    this._likeCard.classList.add('group__button-like_active');
  }

  dislike() {
    this._likeCard.classList.remove('group__button-like_active');
  }

  setLikeCheck(res) {
    this._likeCheck.textContent = `${this._likes.length}`;
  }

  handleDelCard() {
    this._element.remove();
    this._element = null;
  }

  isOwner() {
    if (this._userId !== this._ownerId) {
      this._deleteBt.remove();
      this._deleteBt = null;
    }
  }

  _isLiked() {
    this._likes.forEach((user) => {
      if (user._id === this._userId) {
        this.like();
      } else {
        this.dislike();
      }
    });
  }

  _setEventListeners() {
    this._groupImg.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._likeCard.addEventListener('click', () => {
      if (this._likeCard.classList.contains('group__button-like_active')) {
        this._dislike();
      } else {
        this.like();
      }
    });

    this._deleteBt.addEventListener('click', () => {
      this._deleteCard(this._id);
    });
  }
}

