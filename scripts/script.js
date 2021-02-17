const formEdit = document.querySelector('.popup_profile-edit');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_description');

const formAdd = document.querySelector('.popup_new-place');
const createButton = document.querySelector('.popup__create-button');
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
const closeImg = popupBigPicture.querySelector('.popup__close-button');

const imgEl = document.querySelector('.photo-items__image');
const titleEl = document.querySelector('.photo-items__title');


function render() {
  const html = cardsElements
    .map(createCard)
    photoContainerEl.append(...html);
}


function createCard(item) {
  const newItem = templateEl.content.cloneNode(true);

  const headerEl = newItem.querySelector('.photo-items__title');
  headerEl.textContent = item.name;

  const imgEl = newItem.querySelector('.photo-items__image');
  imgEl.src = item.link;
  imgEl.alt = item.name;

  const delButton = newItem.querySelector('.photo-items__del-button');
  delButton.addEventListener('click', delCard);

  newItem.querySelector('.photo-items__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-items__like-button_active');
  });

  const imgButton = newItem.querySelector('.photo-items__img-button');

  imgButton.addEventListener('click', function() {
    popupImg.src = item.link;
    popupDescription.textContent = item.name;
    showPopupImg();
  });

  return newItem;
}

render();


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


function addInfo() {
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
}

function handleUserInfoSubmit(evt) {
  evt.preventDefault();
  addInfo();
  closePopupEdit();
}

function showPopupEdit() {
  openPopup(formEdit);
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

function showPopupAdd() {
  openPopup(formAdd);
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

function showPopupImg() {
  popupBigPicture.classList.add('popup_opened');
}

function addCard() {
  const titleInfo = titleInput.value;
  const imgLinkInfo = imgLinkInput.value;
  const cardItem = createCard({name: titleInfo, link: imgLinkInfo});
  photoContainerEl.prepend(cardItem);
  titleInput.value = '';
  imgLinkInput.value = '';
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  addCard();
  closePopupAdd();
}

function delCard(event) {
  const targetEl = event.target;
  const targetCard = targetEl.closest('.photo-items__post');
  targetCard.remove();
}


function closePopupEdit() {
  closePopup(formEdit);
}

function closePopupAdd() {
  closePopup(formAdd);
}

function closePopupImg() {
  closePopup(popupBigPicture);
}


editButton.addEventListener('click', showPopupEdit);
addButton.addEventListener('click', showPopupAdd);

closeEdit.addEventListener('click', closePopupEdit);
closeAdd.addEventListener('click', closePopupAdd);
closeImg.addEventListener('click', closePopupImg);

formEdit.addEventListener('submit', handleUserInfoSubmit);
formAdd.addEventListener('submit', handleAddCardSubmit);
