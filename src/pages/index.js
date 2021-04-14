import './index.css'
import Card from '../components/Сard.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {
  initialCards,
  formEdit,
  nameInput,
  jobInput,
  formAdd,
  titleInput,
  imgLinkInput,
  nameInfo,
  jobInfo,
  editButton,
  closeEdit,
  addButton,
  closeAdd,
  photoContainerEl,
  templateEl,
  popupBigPicture,
  popupImg,
  popupDescription,
  closeImg,
  ESC_CODE,
  submitButton
} from '../utils/constants.js'



// рендер карточек

const popupWithImage = new PopupWithImage('.popup_big-picture');
popupWithImage.setEventListeners();

function createCard(item, cardSelector) {
  const newCard = new Card(item, cardSelector, () => {
    popupWithImage.open(item.name, item.link)});
  return newCard.generateCard();
}

const cardsList = new Section({
  items: initialCards,
  renderer: item => {
    const makeCard = createCard(item, '.template');
    cardsList.addItem(makeCard, true);
  }
},'.photo-items');

cardsList.renderItems();



// конфиг валидации

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



// попап редактирование профиля

const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileDescriptionSelector: '.profile__subtitle'
});

const popupEdit = new PopupWithForm({
  popupSelector: '.popup_profile-edit',
  handleSubmitForm: (inputValues) => {
    userInfo.setUserInfo({ name: inputValues.name, description: inputValues.description });
    popupEdit.close();
  }
});

popupEdit.setEventListeners();

editButton.addEventListener('click', () => {
  popupEdit.open();
  editFormValidator.setSubmit();
  nameInput.value = userInfo.getUserInfo().profileName;
  jobInput.value = userInfo.getUserInfo().profileDescription;
});


// отправка попапа добавления карточки

const popupAddCard = new PopupWithForm ({
  popupSelector: '.popup_new-place', handleSubmitForm: (inputValues) => {
    const makeCard = createCard({
      name: inputValues.title,
      link: inputValues.link
    }, '.template');
    cardsList.addItem(makeCard);
    popupAddCard.close();
  }
})

popupAddCard.setEventListeners();

function handleAddCard () {
  popupAddCard.open();
  addFormValidator.setSubmit();
}

addButton.addEventListener('click', handleAddCard);














// const popupAddCard = new PopupWithForm({ popupSelector:'.popup_new-place', handleSubmitForm: () => {
//   const addInputValues = popupAddCard._getInputValues();
//   const newCardDataSet = {
//     name: addInputValues.Name,
//     link: addInputValues.Link
//   }
//   const card = new Card(newCardDataSet,'.template', () => {
//     popupWithImage.open(item.name, item.link)});
//   const cardElement = card.generateCard();
//   photoContainerEl.prepend(cardElement);
//   popupAddCard.close();}
// });
// popupAddCard.setEventListeners();
// addButton.addEventListener('click', () => {
//   popupAddCard.open();
//   addFormValidator.clearErrors();
// });




// function handleAddCardSubmit(evt) {
//   evt.preventDefault();
//   const newCard = new Card({name:titleInput.value, link:imgLinkInput.value},'.template', popupBigPicture);
//   photoContainerEl.prepend(newCard.generateCard());
//   titleInput.value = '';
//   imgLinkInput.value = '';
//   closePopup(formAdd);
// }



// addButton.addEventListener('click', () => {
//   popupAddCard.open();
//   addFormValidator.clearErrors();
// });


// addButton.addEventListener('click', () => { openPopup(formAdd); addFormValidator.clearErrors();});












// closeEdit.addEventListener('click', () => { closePopup(formEdit); });
// closeAdd.addEventListener('click', () => { closePopup(formAdd); });
// closeImg.addEventListener('click', () => { closePopup(popupBigPicture); });

// formEdit.addEventListener('submit', handleUserInfoSubmit);
// formAdd.addEventListener('submit', handleAddCardSubmit);





















// открытие попапа

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
// }


// закрытие попапа

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEsc);
// }

// закрытие по esc

// function closeByEsc(evt) {
//   if (evt.key === ESC_CODE) {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };


// function showPopupEdit() {
//   openPopup(formEdit);
//   nameInput.value = nameInfo.textContent;
//   jobInput.value = jobInfo.textContent;
//   editFormValidator.clearErrors();
// }


// function addCard() {
//   const titleInfo = titleInput.value;
//   const imgLinkInfo = imgLinkInput.value;
//   const cardItem = generateCard({name: titleInfo, link: imgLinkInfo});
//   photoContainerEl.prepend(cardItem);
//   titleInput.value = '';
//   imgLinkInput.value = '';
//   submitButton.setAttribute('disabled', true);
// }
