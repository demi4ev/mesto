// валидация

const showError = (inputElement, errorMessage, inputErrorClass, formErrorActive, formLabel, formError) => {
  const formSectionElement = inputElement.closest(formLabel);
  const errorElement = formSectionElement.querySelector(formError);

  // выбор через id
  // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(formErrorActive);
  inputElement.classList.add(inputErrorClass);
};

const hideError = (inputElement, inputErrorClass, formErrorActive, formLabel, formError) => {
  const formSectionElement = inputElement.closest(formLabel);
  const errorElement = formSectionElement.querySelector(formError);

  // выбор через id
  // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = "";
  errorElement.classList.remove(formErrorActive);
  inputElement.classList.remove(inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, formErrorActive, formLabel, formError) => {
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;

    showError(inputElement, errorMessage, inputErrorClass, formErrorActive, formLabel, formError);
  } else {
    hideError(inputElement, inputErrorClass, formErrorActive, formLabel, formError);
  }

}


// кнопку неактивной

const toggleButtonState = (inputList, buttonElement) => {
  const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
  const hasInvalidInput = inputList.some(findAtLeastOneNotValid);

  if (hasInvalidInput) {
    buttonElement.setAttribute('disabled', true);
    // buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    // buttonElement.classList.remove(inactiveButtonClass);
  }
}


const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  formElement.addEventListener('submit', handleFormSubmit);

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  const inputListIterator = (inputElement) => {
    const handleInput = () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, formErrorActive, formLabel, formError);
      toggleButtonState(inputList, buttonElement);
    };
    inputElement.addEventListener('input', handleInput);
    toggleButtonState(inputList, buttonElement);
  };
  inputList.forEach(inputListIterator);


};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError }) => {
  const formElements = document.querySelectorAll(formSelector);
  const formList = Array.from(formElements);

  formList.forEach((formElement) => {
    setEventListeners(formElement, inputSelector, submitButtonSelector, inputErrorClass, formErrorActive, formLabel, formError);
  });

};

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__field_error',
  formError: '.popup__form-error',
  formErrorActive: 'popup__form-error_active',
  formLabel: '.popup__label'
});
