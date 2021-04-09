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
  submitButton,
  profileSelectorData
} from '../utils/constants.js'



// рендерим карточки

// initialCards.forEach((item) => {
//   photoContainerEl.prepend(createUserCard(item));
// });

// function createUserCard(item) {
//   const card = new Card(item, '.template');
//   const newCard = card.createCard();
//   return newCard;
// };



const popupWithImage = new PopupWithImage({ popupSelector: '.popup__img' });
popupWithImage.setEventListeners();

function createUserCard(item) {
  const newCard = new Card(item, cardTemplate, {
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link)
    }
  })

  const newUserCard = newCard.createCard();
  console.log(item)
  return newUserCard;
}

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const newCard = createUserCard(cardItem)
    cardList.addItem(newCard);
  }

}, photoContainerEl);
cardList.renderItems();




// отправка попапа редактирования профиля

// function addInfo() {
//   nameInfo.textContent = nameInput.value;
//   jobInfo.textContent = jobInput.value;
// }

// function handleUserInfoSubmit(evt) {
//   evt.preventDefault();
//   addInfo();
//   closePopup(formEdit);
// }



// попап редактирование профиля

const newUser = new UserInfo({ profileName:'.profile__title', profileDescription: '.profile__subtitle' });

const popupEdit = new PopupWithForm({ formEdit, handleSubmitForm: (values) => {
  newUser.setUserInfo({ name:values.Author, job:values.Profile })
}
});
popupEdit.setEventListeners();


const userInfo = new UserInfo(profileSelectorData)

editButton.addEventListener('click', () => {
  console.log('click');
  popupEdit.open();
  const newInfo = userInfo.getUserInfo();
  nameInput.value = newInfo.name;
  jobInput.value = newInfo.description;
  editFormValidator.clearErrors();
})



// отправка попапа добавления карточки

// function handleAddCardSubmit(evt) {
//   evt.preventDefault();
//   const newCard = new Card({name:titleInput.value, link:imgLinkInput.value},'.template', popupBigPicture);
//   photoContainerEl.prepend(newCard.createCard());
//   titleInput.value = '';
//   imgLinkInput.value = '';
//   closePopup(formAdd);
// }


// const popupAddCard = new PopupWithForm({popupSelector:'.popup_new-place', handleSubmitForm: () => {
//   const addInputValues = popupAddCard._getInputValues();
//   const newCardDataSet = {
//     name: addInputValues.Name,
//     link: addInputValues.Link
//   }

//   const card = new Card(newCardDataSet,templateEl, () => {
//     popupOpenImage.open(item.name, item.link)
//   });

//   const cardElement = card.createCard();
//   photoContainerEl.prepend(cardElement);
//   popupAddCard.close();
// }
// });
// popupAddCard.setEventListeners();



addButton.addEventListener('click', () => {
  popupAddCard.open();
  addFormValidator.clearErrors();
});


// addButton.addEventListener('click', () => { openPopup(formAdd); addFormValidator.clearErrors();});





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



// кнофиг валидации

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
//   const cardItem = createCard({name: titleInfo, link: imgLinkInfo});
//   photoContainerEl.prepend(cardItem);
//   titleInput.value = '';
//   imgLinkInput.value = '';
//   submitButton.setAttribute('disabled', true);
// }
