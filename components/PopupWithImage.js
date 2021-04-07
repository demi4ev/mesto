import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupImg, popupDescription) {
    super(popupSelector);
    this._image = this._popup.querySelector(popupImg);
    this._title = this._popup.querySelector(popupDescription);
  }

  open(link, title) {
    this._image.src = link;
    this._image.alt = title;
    this._title.textContent = title;
    super.open();
  }
}
