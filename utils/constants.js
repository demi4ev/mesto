const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
const popupImg = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');
const closeImg = document.querySelector('.popup__close-button');

const ESC_CODE = 'Escape';

const submitButton = formAdd.querySelector('.popup__create-button');

export {
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
};

const profileSelectorData = {
  profileName: '.profile__title',
  profileDescription: '.profile__subtitle'
}
