export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(res => this._checkServer(res))
  }

  getUserInfo() {
    return fetch (`${this._url}/users/me`, {
        headers: this._headers
    })
      .then(res => this._checkServer(res))
  }

  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
        .then(res => this._checkServer(res))
  }

  patchUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ 
        avatar: data.avatar 
      })
    })
      .then(res => this._checkServer(res))
  }

  postNewCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        link: data.link
        })
    })
        .then(res => this._checkServer(res))
  }

  deleteCard(data) {
    return fetch(`${this._url}/cards/${data}`, {
        method: 'DELETE',
        headers: this._headers
    })
      .then(res => this._checkServer(res));
  }

  putLikeCard(data) {
    return fetch(`${this._url}/cards/${data}/likes`, {
      method: 'PUT',
      headers: this._headers
  })
    .then(res => this._checkServer(res));
  }

  deleteLikeCard(data){
    return fetch(`${this._url}/cards/${data}/likes`, {
      method: 'DELETE',
      headers: this._headers
  })
    .then(res => this._checkServer(res));
  }
  
  _checkServer(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}
}