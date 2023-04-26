export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this._nameProfile = document.querySelector(nameSelector);
    this._aboutProfile = document.querySelector(aboutSelector);
    this._avatarProfile = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      about: this._aboutProfile.textContent
    }
  }

  setUserInfo({nameInput, aboutInput, avatarInput}) {
    this._nameProfile.textContent = nameInput;
    this._aboutProfile.textContent = aboutInput;
    this._avatarProfile.src = avatarInput;
  }
}
