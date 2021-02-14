const formEdit = document.querySelector('.popup__profile-edit');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_description');

const formAdd = document.querySelector('.popup__new-place');
const createButton = document.querySelector('.popup__create-button');
const titleInput = document.querySelector('.popup__field_type_title');
const imgLinkInput = document.querySelector('.popup__field_type_link-image');

const popupBigPicture = document.querySelector('.popup__big-picture');
const popupImg = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');

const nameInfo = document.querySelector('.profile__title');
const jobInfo = document.querySelector('.profile__subtitle');

const editButton = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__close-button');

const addButton = document.querySelector('.profile__add-button');

const imgButton = document.querySelector('.photo-items__img-button');


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

const photoContainerEl = document.querySelector('.photo-items');
const templateEl = document.querySelector('.template');


function render() {
  const html = initialCards
    .map(getItem)
    photoContainerEl.append(...html);
}


function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);

  const headerEl = newItem.querySelector('.photo-items__title');
  headerEl.textContent = item.name;

  const imgEl = newItem.querySelector('.photo-items__image');
  imgEl.src = item.link;
  imgEl.alt = item.name;

  return newItem;
}

render();

function addInfo() {
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  addInfo();
  closePopupEdit();
}

function showPopupEdit() {
  formEdit.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

function showPopupAdd() {
  formAdd.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

function addCard() {
  const titleInfo = titleInput.value;
  const imgLinkInfo = imgLinkInput.value;
  const cardItem = getItem({name: titleInfo, link: imgLinkInfo});
  photoContainerEl.prepend(cardItem);
  titleInput.value = '';
  imgLinkInput.value = '';
}

function formSubmitHandler2(evt) {
  evt.preventDefault();
  addCard();
  closePopupAdd();
}

function showPopupImg() {
  popupBigPicture.classList.add('popup_opened');
  const imgEl = document.querySelector('.photo-items__image');
  const titleEl = document.querySelector('.photo-items__title');
  imgEl.src = popupImg.src;
  titleEl.alt = popupImg.alt;
  titleEl.value = popupDescription.textContent;
}

function closePopupEdit() {
  formEdit.classList.remove('popup_opened');
}

function closePopupAdd() {
  formAdd.classList.remove('popup_opened');
}

function closePopupImg() {
  popupBigPicture.classList.remove('popup_opened');
}



editButton.addEventListener('click', showPopupEdit);
addButton.addEventListener('click', showPopupAdd);
// imgButton.addEventListener('click', showPopupImg);

// createButton.addEventListener('click', addCard);

close.addEventListener('click', closePopupEdit);
close.addEventListener('click', closePopupAdd);
// close.addEventListener('click', closePopupImg);
formEdit.addEventListener('submit', formSubmitHandler);

formAdd.addEventListener('submit', formSubmitHandler2);













// function getItem(item) {
//   return `<article class="photo-items__post">
//           <img class="photo-items__image" src="${item.link}" alt="${item.name}">
//           <div class="photo-items__description">
//             <h2 class="photo-items__title">${item.name}</h2>
//             <button type="button" class="photo-items__like-button"></button>
//           </div>
//           </article>`
// }






// let formElement = document.querySelector('.popup');
// let nameInput = formElement.querySelector('.popup__field_type_name');
// let jobInput = formElement.querySelector('.popup__field_type_description');
// let profileContainer = document.querySelector('.profile__info');


// let edit = document.querySelector('.profile__edit-button');
// function showPopup() {
//   formElement.classList.add('popup_opened');
// }

// edit.addEventListener('click', showPopup);


// let close = document.querySelector('.popup__close-button');
// function closePopup() {
//   formElement.classList.remove('popup_opened');
// }

// close.addEventListener('click', closePopup);





// function formSubmitHandler(evt) {
//   evt.preventDefault();
//   let name = nameInput.querySelector(('.popup__field_type_name').value);
//   let job = jobInput.querySelector(('.popup__field_type_description').value);


//   let nameInfo = document.querySelector('.profile__title');
//   let jobInfo = document.querySelector('.profile__subtitle');

//   profileContainer.insertAdjacentHTML('beforeend', `
//         <div class="profile__name">
//           <h1 class="profile__title">${name.value}</h1>
//           <button type="button" class="profile__edit-button"></button>
//         </div>
//         <p class="profile__subtitle">${job.value}</p>
//     `);

//     formElement.addEventListener('submit', function () {
//       console.log('Форма отправлена');
//   });

// }

// function addPlaceholder() {
//   nameInfo = nameInput.value.textContent;
// }



// formElement.addEventListener('submit', formSubmitHandler);
