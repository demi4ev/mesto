import { Card } from './Сard.js'
import { FormValidator } from './FormValidator.js'

const formEdit = document.querySelector('.popup_profile-edit');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_description');

const formAdd = document.querySelector('.popup_new-place');
const titleInput = document.querySelector('.popup__field_type_title');
const imgLinkInput = document.querySelector('.popup__field_type_link-image');

const nameInfo = document.querySelector('.profile__title');
const jobInfo = document.querySelector('.profile__subtitle');

const editButton = document.querySelector('.profile__edit-button');
const closeEdit = formEdit.querySelector('.popup__close-button');

const addButton = document.querySelector('.profile__add-button');
const closeAdd = formAdd.querySelector('.popup__close-button');

const photoContainerEl = document.querySelector('.photo-items');
const templateEl = document.querySelector('.template');

const popupBigPicture = document.querySelector('.popup_big-picture');
// const popupImg = document.querySelector('.popup__img');
// const popupDescription = document.querySelector('.popup__description');
const closeImg = popupBigPicture.querySelector('.popup__close-button');

const ESC_CODE = "Escape";

const submitButton = formAdd.querySelector('.popup__create-button');


initialCards.forEach((item) => {
  photoContainerEl.prepend(createUserCard(item));
});

function createUserCard(item) {
  const card = new Card(item, '.template');
  const newCard = card.createCard();
  return newCard;
};


// открытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}


// закрытие попапа

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}


function addInfo() {
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
}

function handleUserInfoSubmit(evt) {
  evt.preventDefault();
  addInfo();
  closePopup(formEdit);
}

function showPopupEdit() {
  openPopup(formEdit);
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  editFormValidator.clearErrors();
}

// function addCard() {
//   const titleInfo = titleInput.value;
//   const imgLinkInfo = imgLinkInput.value;
//   const cardItem = createCard({name: titleInfo, link: imgLinkInfo});
//   photoContainerEl.prepend(cardItem);
//   titleInput.value = '';
//   imgLinkInput.value = '';
//   submitButton.setAttribute('disabled', true);
// }

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card({name:titleInput.value, link:imgLinkInput.value},'.template', popupBigPicture);
  photoContainerEl.prepend(newCard.createCard());
  titleInput.value = '';
  imgLinkInput.value = '';
  closePopup(formAdd);
}


// закрытие по overlay

formEdit.addEventListener('mousedown', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(formEdit);
  }
});

formAdd.addEventListener('mousedown', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(formAdd);
  }
});

popupBigPicture.addEventListener('mousedown', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupBigPicture);
  }
});


// закрытие по esc

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};


const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__field_error',
  formError: '.popup__form-error',
  formErrorActive: 'popup__form-error_active',
  formLabel: '.popup__label'
}


const editFormValidator = new FormValidator(validationConfig, formEdit);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, formAdd);
addFormValidator.enableValidation();


editButton.addEventListener('click', showPopupEdit);
addButton.addEventListener('click', () => { openPopup(formAdd); addFormValidator.clearErrors();});
closeEdit.addEventListener('click', () => { closePopup(formEdit); });
closeAdd.addEventListener('click', () => { closePopup(formAdd); });
closeImg.addEventListener('click', () => { closePopup(popupBigPicture); });

formEdit.addEventListener('submit', handleUserInfoSubmit);
formAdd.addEventListener('submit', handleAddCardSubmit);
