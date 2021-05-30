export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }


  // получение карточек

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(this._checkResponseData)
  }


  _checkResponseData(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }


  // добавление карточки

  addCard(data) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkResponseData)
  }


  // удаление карточки

  removeCard(id) {
    return fetch(`${this._address}/cards/${id}`,{
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponseData)
  }


  // лайки с сервера

  setLike(cardId) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization:this._token
      }
    })
    .then(this._checkResponseData)
  }


  // снятиие лайка

  removeLike(cardId) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponseData)
  }


  // получение инфы о юзере

  getUserData() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(this._checkResponseData)
  }


  // изменение инфы о юзере

  changeUserInfo(name, about) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      }),
    })
    .then(this._checkResponseData)
  }


  // смена аватара

  updateAvatar(avatarLink) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
    .then(this._checkResponseData)
  }











}

