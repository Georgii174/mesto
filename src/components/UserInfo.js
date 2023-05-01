export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameProfile = document.querySelector(nameSelector);
    this._aboutProfile = document.querySelector(jobSelector);
    this._avatarProfile = document.querySelector(avatarSelector);
    this._userId;
  }

  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      about: this._aboutProfile.textContent,
    }
  }

  setUserInfo(data) {
    this._nameProfile.textContent = data.name;
    this._aboutProfile.textContent = data.about;
    this._userId = data._id;
  }

  setUserAvatar(data) {
    this._avatarProfile.src = data.avatar;
  }
}
