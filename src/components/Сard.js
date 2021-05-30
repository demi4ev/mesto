export default class Card {
  constructor(data, cardSelector, handleCardClick, currentUserId, deleteSubmitCard, toggleLike, removeLike) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes.length;
    this._myLike = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._currentUserId = currentUserId;
    console.log('this._currentUserId', this._currentUserId)
    this._deleteSubmitCard = deleteSubmitCard;
    this._toggleLike = toggleLike;
    this._removeLike = removeLike;
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

  // _getTemplate() {
  //   const elementTemplate = document.querySelector(this._cardSelector).content
  //   const cardElement = elementTemplate
  //   .querySelector('.photo-items__post')
  //   .cloneNode(true);
  //   return cardElement;
  // }



  _setLike() {
    this._likeCounter = this._newItem.querySelector('.photo-items__like-counter');
    this._setLikesCount(this._likes);
    this._updateLikeView();
  }

  _setLikesCount(likesCount) {
    this._likeCounter.textContent = likesCount;
  }


  // создаём карточку

  generateCard() {
    this._newItem = this._getTemplate();
    this._imgButton = this._newItem.querySelector('.photo-items__img-button');
    this._likeButton = this._newItem.querySelector('.photo-items__like-button');
    this._delButton = this._newItem.querySelector('.photo-items__del-button');
    this._newItem.querySelector('.photo-items__title').textContent = this._name;
    this._likesCounter = this._newItem.querySelector('.photo-items__like-counter');
    this._imgEl = this._newItem.querySelector('.photo-items__image');
    this._imgEl.src = this._link;
    this._imgEl.alt = this._name;
    if (this._cardOwnerId === this._currentUserId) {
      this._delButton.classList.add('popup_opened');
    }
    this._setLike();
    // this._addDelButton();
    this._setEventListeners();

    return this._newItem;
  }


  // добавляем кнопку удаления

  // _addDelButton() {
  //   if (this._isCardOwner()) {
  //     this._delButton.classList.add('popup_opened');
  //   }
  // }

  // _isCardOwner() {
  //   if (this._cardOwnerId === this._userId);
  // }

  _setEventListeners() {
    this._delButton.addEventListener('click', () => {
      // this._delCard()
      this._deleteSubmitCard(this._cardId)
    })
    // this._likeButton.addEventListener('click', () => {
    //   this._likeCard()
    // })
    this._likeButton.addEventListener('click', () => {
      if (this._checkLikeId()) {
        this._removeLike()
      } else {
        this._toggleLike();
      }
    })
    this._imgEl.addEventListener('click', this._handleCardClick);
  }

  delCard() {
    this._newItem.remove();
    this._newItem = null;
  }

  // _likeCard() {
  //   this._likeButton.classList.toggle('photo-items__like-button_active')
  // }

  handleLikes(data) {
    this._myLike = data.likes;
    this._setLikesCount(this._myLike.length);
    this._updateLikeView();
  }

  _checkLikeId() {
    return this._myLike.find(el => el._id === this._currentUserId)
  }

  _updateLikeView() {
    if (this._checkLikeId()) {
      this._likeButton.classList.add('photo-items__like-button_active');
    }
    else {
      this._likeButton.classList.remove('photo-items__like-button_active');
    }
  }

}
