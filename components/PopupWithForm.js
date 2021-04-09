import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    this._popupInputs = this._popup.querySelectorAll('.popup__field');
    this._inputValues = {};
    this._popupInputs.forEach(input => {
      this._inputValues[input.name] = input.value
    })
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    })

  }

  close() {
    super.close();
    this._popup.reset();
  }
}

// function handleUserInfoSubmit(evt) {
//   evt.preventDefault();
//   addInfo();
//   closePopup(formEdit);
// }
