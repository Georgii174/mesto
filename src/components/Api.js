export default class Api {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _hendleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ой...: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    }).then(this._hendleResponse)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._hendleResponse)
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(this._hendleResponse)
  }

  setUserInfoAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    }).then(this._hendleResponse)
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._hendleResponse)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`,{
      method: 'DELETE',
      headers: this._headers,
    }).then(this._hendleResponse)
  }

  like(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`,{
      method: 'PUT',
      headers: this._headers,
    }).then(this._hendleResponse)
  }

  dislike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`,{
      method: 'DELETE',
      headers: this._headers,
    }).then(this._hendleResponse)
  }

}
