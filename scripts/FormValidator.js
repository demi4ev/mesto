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

  _showError () {
    const formSectionElement = this._inputElement.closest(this._formLabel);
    this._errorElement = formSectionElement.querySelector(this._formError);
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._errorElement.classList.add(this._formErrorActive);
    this._inputElement.classList.add(this._inputErrorClass);
  }


  // скрываем ошибку

  _hideError () {
    const formSectionElement = this._inputElement.closest(this._formLabel);
    this._errorElement = formSectionElement.querySelector(this._formError);
    this._errorElement.textContent = "";
    this._errorElement.classList.remove(this._formErrorActive);
    this._inputElement.classList.remove(this._inputErrorClass);
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
      this._errorMessage = inputElement.validationMessage;
      this._showError();
    } else {
      this._hideError();
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
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.removeAttribute('disabled');
    }
  }


  enableValidation () {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._toggleButtonState();
    })
    this._setEventListeners();
  }
}
