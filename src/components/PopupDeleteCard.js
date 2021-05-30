import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._formButton = this._popup.querySelector('.popup__submit-button');
  }

  setSubmitAction(action) {
    this._handleSubmitForm = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm()
    })
  }
}
