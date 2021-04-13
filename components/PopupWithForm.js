import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__container');
    this._popupInputs = this._popup.querySelectorAll('.popup__field');
    this._handleSubmitForm = handleSubmitForm;
    this._submit = this._submitForm.bind(this);

  }

  _getInputValues() {

    this._inputValues = {};
    this._popupInputs.forEach(item => this._inputValues[item.name] = item.value);
    return this._inputValues;
  }

  _submitForm(evt) {
    evt.preventDefault();
    this._handleSubmitForm(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
