// валидация

export class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._formError = config.formError;
    this._formErrorActive = config.formErrorActive;
    this._formLabel = config.formLabel;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }


  // показываем ошибку

  _showError (inputElement, errorMessage) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._formErrorActive);
    this._inputElement.classList.add(this._inputErrorClass);
  }


  // скрываем ошибку

  _hideError (inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    this._errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._formErrorActive);
  };


  _setEventListeners () {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',() => {
        this._checkInputValidity (inputElement)
        this._toggleButtonState()
      })
    })
  };


  _checkInputValidity (inputElement) {
    this._inputElement = inputElement;
    if (!this._inputElement.validity.valid) {
      this._showError(inputElement,inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }


  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }


  // кнопку неактивной

  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this.setSubmit();
    } else {
      this._buttonElement.removeAttribute('disabled');
    }
  }

  setSubmit() {
    this._buttonElement.setAttribute('disabled', true);
  }


  enableValidation () {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._toggleButtonState();
    })
    this._setEventListeners();
  }


  // очистка ошибок

  clearErrors () {
    this._inputList.forEach((formElement) => {
      this._hideError(formElement)
    });
    this._toggleButtonState()
  }
}
