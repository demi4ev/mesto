export default class Popup {
  constructor(popupSelector) {
    // this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_CODE) {
      // const openedPopup = document.querySelector('.popup_opened');
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close());
  }

}
