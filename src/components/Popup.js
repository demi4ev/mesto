import { ESC_CODE } from '../utils/constants.js'

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }


  // закрытие по esc

  _handleEscClose(evt) {
    if (evt.key === ESC_CODE) {
      this.close();
    }
  }


  // закрытие по overlay

  _handleOverlayClose(evt) {
    if (evt.target !== this._popup) return;  {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.close()
      }
    })
  }

}



