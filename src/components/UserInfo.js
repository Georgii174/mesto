export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._nameProfile = document.querySelector(nameSelector);
    this._jobProfile = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      job: this._jobProfile.textContent,
    }
  }

  setUserInfo({nameInput, jobInput}) {
    this._nameProfile.textContent = nameInput;
    this._jobProfile.textContent = jobInput;
  }
}
