export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }


  // получаем темплэйт

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-items__post')
      .cloneNode(true);
    return cardElement;
  }


  // создаём карточку

  generateCard() {
    this._newItem = this._getTemplate();
    this._imgButton = this._newItem.querySelector('.photo-items__img-button');
    this._likeButton = this._newItem.querySelector('.photo-items__like-button');
    this._delButton = this._newItem.querySelector('.photo-items__del-button');
    this._newItem.querySelector('.photo-items__title').textContent = this._name;
    this._imgEl = this._newItem.querySelector('.photo-items__image');
    this._imgEl.src = this._link;
    this._imgEl.alt = this._name;
    this._setEventListeners();
    return this._newItem;
  }

  _setEventListeners() {
    this._delButton.addEventListener('click', () => {
      this._delCard()
    })
    this._likeButton.addEventListener('click', () => {
      this._likeCard()
    })
    this._imgEl.addEventListener('click', this._handleCardClick);
  }

  _delCard() {
    this._newItem.remove()
  }

  _likeCard() {
    this._likeButton.classList.toggle('photo-items__like-button_active')
  }
}
