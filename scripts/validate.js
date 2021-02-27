// валидация

const showError = (inputElement, errorMessage) => {
  const formSectionElement = inputElement.closest('.popup__label');
  const errorElement = formSectionElement.querySelector('.popup__form-error');

  // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__form-error_active');
  inputElement.classList.add('popup__field_type_error');
};

const hideError = (inputElement) => {
  const formSectionElement = inputElement.closest('.popup__label');
  const errorElement = formSectionElement.querySelector('.popup__form-error');

  // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = "";
  errorElement.classList.remove('popup__form-error_active');
  inputElement.classList.remove('popup__field_type_error');
};

const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;

    showError(inputElement, errorMessage);
  } else {
    hideError(inputElement);
  }

}


// кнопку неактивной

const toggleButtonState = (inputList, buttonElement) => {
  const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
  const hasInvalidInput = inputList.some(findAtLeastOneNotValid);

  if (hasInvalidInput) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__submit-button_inactive');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__submit-button_inactive');
  }
}


const setEventListeners = (formElement, inputSelector) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  formElement.addEventListener('submit', handleFormSubmit);

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector('.popup__submit-button');

  const inputListIterator = (inputElement) => {
    const handleInput = () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    };
    inputElement.addEventListener('input', handleInput);
    toggleButtonState(inputList, buttonElement);
  };
  inputList.forEach(inputListIterator);


};

const enableValidation = ({formSelector, inputSelector}) => {
  const formElements = document.querySelectorAll(formSelector);
  const formList = Array.from(formElements);

  formList.forEach((formElement) => {
    setEventListeners(formElement, inputSelector);
  });

};

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  // submitButtonSelector: '.popup__submit-button',
  // inactiveButtonClass: 'popup__button_disabled',
  // inputErrorClass: 'popup__input_type_error',
  // errorClass: 'popup__error_visible'
});
