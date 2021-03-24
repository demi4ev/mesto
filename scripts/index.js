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
// const templateEl = document.querySelector('.template');

const popupBigPicture = document.querySelector('.popup_big-picture');
// const popupImg = document.querySelector('.popup__img');
// const popupDescription = document.querySelector('.popup__description');
// const closeImg = popupBigPicture.querySelector('.popup__close-button');

const ESC_CODE = "Escape";

const submitButton = formAdd.querySelector('.popup__create-button');


// function render() {
//   const cardsElements = initialCards
//     .map(createCard)
//     photoContainerEl.append(...cardsElements);
// }

initialCards.forEach((item) => {
  const card = new Card(item, '.template');
  const cardElement = card.createCard();
  photoContainerEl.prepend(cardElement);
});


// function createCard(item) {
//   const newItem = templateEl.content.cloneNode(true);

//   const headerEl = newItem.querySelector('.photo-items__title');
//   headerEl.textContent = item.name;

//   const imgEl = newItem.querySelector('.photo-items__image');
//   imgEl.src = item.link;
//   imgEl.alt = item.name;

//   // const delButton = newItem.querySelector('.photo-items__del-button');
//   // delButton.addEventListener('click', delCard);

//   // newItem.querySelector('.photo-items__like-button').addEventListener('click', function (evt) {
//   //   evt.target.classList.toggle('photo-items__like-button_active');
//   // });

//   const imgButton = newItem.querySelector('.photo-items__img-button');

//   imgButton.addEventListener('click', function() {
//     popupImg.src = item.link;
//     popupDescription.textContent = item.name;
//     openPopup(popupBigPicture);
//   });

//   return newItem;
// }

// render();


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
}

function addCard() {
  const titleInfo = titleInput.value;
  const imgLinkInfo = imgLinkInput.value;
  const cardItem = createCard({name: titleInfo, link: imgLinkInfo});
  photoContainerEl.prepend(cardItem);
  titleInput.value = '';
  imgLinkInput.value = '';
  submitButton.setAttribute('disabled', true);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  addCard();
  closePopup(formAdd);
}

// function delCard(event) {
//   const targetEl = event.target;
//   const targetCard = targetEl.closest('.photo-items__post');
//   targetCard.remove();
// }


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
  if (event.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};


editButton.addEventListener('click', showPopupEdit);
addButton.addEventListener('click', () => { openPopup(formAdd); });
closeEdit.addEventListener('click', () => { closePopup(formEdit); });
closeAdd.addEventListener('click', () => { closePopup(formAdd); });
// closeImg.addEventListener('click', () => { closePopup(popupBigPicture); });

formEdit.addEventListener('submit', handleUserInfoSubmit);
formAdd.addEventListener('submit', handleAddCardSubmit);
