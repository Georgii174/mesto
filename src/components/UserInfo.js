export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameProfile = document.querySelector(nameSelector);
    this._jobProfile = document.querySelector(jobSelector);
    this._avatarProfile = document.querySelector(avatarSelector);
    this._userId;
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._nameProfile.textContent;
    this._userInfo.job = this._jobProfile.textContent;
    return this._userInfo;
  }

  getUserId() {
    return this._userId;
  }

  setUserInfo(data) {
    this._nameProfile.textContent = data.nameInput;
    this._jobProfile.textContent = data.jobInput;
    this._userId = data._id;
  }

  setUserAvatar(data) {
    this._avatarProfile.src = data.avatarInput;
  }
}


// export default class UserInfo {
//   constructor({ nameSelector, aboutSelector, avatarSelector }) {
//     this._nameProfile = document.querySelector(nameSelector);
//     this._aboutProfile = document.querySelector(aboutSelector);
//     this._avatarProfile = document.querySelector(avatarSelector);
//     this._userId;
//   }

//   getUserInfo() {
//     return {
//       name: this._nameProfile.textContent,
//       about: this._aboutProfile.textContent,
//       avatar: this._avatarProfile.src,
//     }
//   }

//   setUserInfo(data) {
//     this._nameProfile.textContent = data.name;
//     this._aboutProfile.textContent = data.about;
//     this._userId = data._id;
//   }

//   setUserAvatar(data) {
//     this._avatarProfile.src = data.avatar;
//   }
// }
