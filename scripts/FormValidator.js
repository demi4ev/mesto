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



  // _setEventListeners () {
  //   this._handleFormSubmit = (event) => {
  //     event.preventDefault();
  //   };
  //   this._formElement.addEventListener('submit', this._handleFormSubmit);

  //   this._inputList.forEach((inputElement) => {
  //     inputElement.addEventListener('input',() => {
  //       this._checkInputValidity (inputElement)
  //       this._toggleButtonState()
  //     })
  //   })

  //   const inputListIterator = (inputElement) => {
  //     const handleInput = () => {
  //       this._checkInputValidity(formElement, inputElement, inputErrorClass, formErrorActive, formLabel, formError);
  //       toggleButtonState(inputList, buttonElement);
  //     };
  //     inputElement.addEventListener('input', handleInput);
  //     toggleButtonState(inputList, buttonElement);
  //   };
  //   inputList.forEach(inputListIterator);
  // };


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

  // const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError }) => {
  //   const formElements = document.querySelectorAll(formSelector);
  //   const formList = Array.from(formElements);

  //   formList.forEach((formElement) => {
  //     setEventListeners(formElement, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError);
  //   });
  // };

  enableValidation () {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._toggleButtonState();
    })
    this._setEventListeners();
  }
}










// const showError = (inputElement, errorMessage, inputErrorClass, formErrorActive, formLabel, formError) => {
//   const formSectionElement = inputElement.closest(formLabel);
//   const errorElement = formSectionElement.querySelector(formError);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(formErrorActive);
//   inputElement.classList.add(inputErrorClass);
// };

// const hideError = (inputElement, inputErrorClass, formErrorActive, formLabel, formError) => {
//   const formSectionElement = inputElement.closest(formLabel);
//   const errorElement = formSectionElement.querySelector(formError);
//   errorElement.textContent = "";
//   errorElement.classList.remove(formErrorActive);
//   inputElement.classList.remove(inputErrorClass);
// };

// const checkInputValidity = (formElement, inputElement, inputErrorClass, formErrorActive, formLabel, formError) => {
//   const isInputNotValid = !inputElement.validity.valid;
//   if (isInputNotValid) {
//     const errorMessage = inputElement.validationMessage;

//     showError(inputElement, errorMessage, inputErrorClass, formErrorActive, formLabel, formError);
//   } else {
//     hideError(inputElement, inputErrorClass, formErrorActive, formLabel, formError);
//   }
// }


// кнопку неактивной

// const toggleButtonState = (inputList, buttonElement) => {
//   const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
//   const hasInvalidInput = inputList.some(findAtLeastOneNotValid);

//   if (hasInvalidInput) {
//     buttonElement.setAttribute('disabled', true);
//     // buttonElement.classList.add(inactiveButtonClass);
//   } else {
//     buttonElement.removeAttribute('disabled');
//     // buttonElement.classList.remove(inactiveButtonClass);
//   }
// }


// const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError) => {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//   };
//   formElement.addEventListener('submit', handleFormSubmit);

//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);

//   const inputListIterator = (inputElement) => {
//     const handleInput = () => {
//       checkInputValidity(formElement, inputElement, inputErrorClass, formErrorActive, formLabel, formError);
//       toggleButtonState(inputList, buttonElement);
//     };
//     inputElement.addEventListener('input', handleInput);
//     toggleButtonState(inputList, buttonElement);
//   };
//   inputList.forEach(inputListIterator);
// };

// const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError }) => {
//   const formElements = document.querySelectorAll(formSelector);
//   const formList = Array.from(formElements);

//   formList.forEach((formElement) => {
//     setEventListeners(formElement, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError);
//   });
// };

// enableValidation({
//   formSelector: '.popup__container',
//   inputSelector: '.popup__field',
//   submitButtonSelector: '.popup__submit-button',
//   inputErrorClass: 'popup__field_error',
//   formError: '.popup__form-error',
//   formErrorActive: 'popup__form-error_active',
//   formLabel: '.popup__label'
// });
