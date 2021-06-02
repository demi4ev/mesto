import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._formButton = this._popup.querySelector('.popup__submit-button');
    this._defaultFormButtonText = this._formButton.textContent;
  }

  setSubmitAction(action) {
    this._handleSubmitForm = action;
  }

  // прелоадер кнопки

  renderLoading(isLoading, loadingText = 'Удаление...') {
    if (isLoading) {
      this._formButton.textContent = loadingText;
    } else {
      this._formButton.textContent = this._defaultFormButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm()
    })
  }
}
