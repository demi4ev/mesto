import './index.css'
import Card from '../components/Сard.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupDeleteCard from '../components/PopupDeleteCard'
import UserInfo from '../components/UserInfo.js'
import {
  initialCards,
  formEdit,
  nameInput,
  jobInput,
  formAdd,
  formAddAvatar,
  avatarEditButton,
  avatarInput,
  editButton,
  titlePlaceInput,
  imagePlaceInput,
  addButton,
  ESC_CODE,
  currentUserId
} from '../utils/constants.js'
import Api from '../components/Api.js'

const api = new Api ({
  address: 'https://mesto.nomoreparties.co/v1/cohort-24',
  token: 'bc0f3231-b10d-4903-b46b-c2341808b6fc'
})



// api.getUserData()
// .then((res) => {
//   const currentUserId= res._id;
//   console.log(currentUserId)
// })

Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([cards, data]) => {
    userInfo.setUserInfo(data);
    // currentUserId = userInfo._id;
    const cardsList = new Section({
      items: cards,
      renderer: (item) => {
        const card = createCard(item);
        const cardElement = card.generateCard();
        // const cardElement = createCard(item, '.template');
        cardsList.addItem(cardElement, true);
      }
    },'.photo-items');
    cardsList.renderItems();


    const popupAddCard = new PopupWithForm ({
      popupSelector: '.popup_new-place',
      handleSubmitForm: (inputValues) => {
        popupAddCard.renderLoading(true);
        api.addCard(inputValues.title, inputValues.link)
        .then((newCard) => {
          const card = createCard(newCard);
          const cardElement = card.generateCard();
          cardsList.addItem(cardElement)
          popupAddCard.close()
        })
      },
    })
    popupAddCard.setEventListeners();

    function handleAddCard () {
      popupAddCard.open();
      addFormValidator.clearErrors();
    }

    addButton.addEventListener('click', handleAddCard);
  })

  .catch((err) => {
    console.log(err)
  })


const popupWithImage = new PopupWithImage('.popup_big-picture');
popupWithImage.setEventListeners();


function createCard(item) {
  const card = new Card(item, '.template', () => {
    popupWithImage.open(item.name, item.link)}, currentUserId, () => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmitAction(() => {
        api.removeCard(item._id)
        .then(() => {
          card.delCard();
          popupDeleteCard.close();
          })
        .catch((err) => {
          console.log(err);
        })
      });
    }, () => {
      api.setLike(item._id)
      .then((res) => {
        card.addLikes(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }, () => {
      api.removeLike(item._id)
      .then((res) => {
        card.addLikes(res);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  return card
}


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

const addAvatarFormValidator = new FormValidator(validationConfig, formAddAvatar);
addAvatarFormValidator.enableValidation();


// попап редактирование профиля

const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileDescriptionSelector: '.profile__subtitle',
  profileAvatarSelector: '.profile__avatar-image'
});

const popupEdit = new PopupWithForm({
  popupSelector: '.popup_profile-edit',
  handleSubmitForm: () => {
    popupEdit.renderLoading(true);
    api.changeUserInfo(nameInput.value, jobInput.value)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .then(() => {
      popupEdit.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupEdit.renderLoading(false);
    })
  }
});

popupEdit.setEventListeners();

editButton.addEventListener('click', () => {
  popupEdit.open();
  const info = userInfo.getUserData()
  nameInput.value = info.name;
  jobInput.value = info.about;
  editFormValidator.clearErrors();
});


// попап изменения аватара

const popupAddAvatar = new PopupWithForm ({
  popupSelector:'.popup_new-avatar',
  handleSubmitForm: () => {
    popupAddAvatar.renderLoading(true);
    api.updateAvatar(avatarInput.value)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupAddAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddAvatar.renderLoading(false);
    })
  },
})

popupAddAvatar.setEventListeners();

avatarEditButton.addEventListener('click', () => {
  popupAddAvatar.open();
  addAvatarFormValidator.clearErrors();
})


// попап удаления карточки

const popupDeleteCard = new PopupDeleteCard ({
  popupSelector: '.popup_delete-card',
  handleSubmitForm: (item) => {
    api.removeCard(item._id)
    .then(() => {
      card.delCard();
      popupDeleteCard.close();
      })
    .catch((err) => {
      console.log(err)
    })
  }
})

popupDeleteCard.setEventListeners();
