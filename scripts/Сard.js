export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
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

  createCard() {
    this._newItem = this._getTemplate();
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
    this._newItem.querySelector('.photo-items__del-button').addEventListener('click', this._delCard)
    this._newItem.querySelector('.photo-items__like-button').addEventListener('click', this._likeCard)
    this._newItem.querySelector('.photo-items__img-button').addEventListener('click', this._imgButton)
  }

  _delCard = () => {
    this._newItem.remove()
  }

  _likeCard = () => {
    this._newItem.querySelector('.photo-items__like-button').classList.toggle('photo-items__like-button_active')
  }

  _imgButton = () => {
    popupImg.src = this._link;
    popupDescription.textContent = this._name;
    openPopup(popupBigPicture);
  }
}

const popupBigPicture = document.querySelector('.popup_big-picture');
const popupImg = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');
const closeImg = popupBigPicture.querySelector('.popup__close-button');

const ESC_CODE = "Escape";

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

// закрытие попапа

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}


// закрытие по esc

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

closeImg.addEventListener('click', () => { closePopup(popupBigPicture); });
