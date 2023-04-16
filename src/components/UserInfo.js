export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._nameProfail = document.querySelector(nameSelector);
    this._jobProfail = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameProfail.textContent,
      job: this._jobProfail.textContent,
    }
  }

  setUserInfo({name, job}) {
    this._nameProfail.textContent = name;
    this._jobProfail.textContent = job;
  }

  // setUserInfo(data) {
  //   if (data.name) this._nameProfail.textContent = data.name;
  //   if (data.job) this._jobProfail.textContent = data.job;
  // }
}
