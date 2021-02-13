let formEdit = document.querySelector('.popup__profile-edit');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_description');

let formAdd = document.querySelector('.popup__new-place');

let nameInfo = document.querySelector('.profile__title');
let jobInfo = document.querySelector('.profile__subtitle');

let edit = document.querySelector('.profile__edit-button');
let close = document.querySelector('.popup__close-button');

let add = document.querySelector('.profile__add-button');


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

const photoContainerEl = document.querySelector('.photo-items')

function render() {
  const html = initialCards
    .map(getItemHTML)
    .join('')
    photoContainerEl.insertAdjacentHTML("afterbegin", html)
}

function getItemHTML(item) {
  return `<article class="photo-items__post">
          <img class="photo-items__image" src="${item.link}" alt="${item.name}">
          <div class="photo-items__description">
            <h2 class="photo-items__title">${item.name}</h2>
            <button type="button" class="photo-items__like-button"></button>
          </div>
          </article>`
}

render();



function addInfo() {
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  addInfo();
  closePopup();
}

function showPopup() {
  formEdit.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

function showPopup() {
  formAdd.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

function closePopup() {
  formEdit.classList.remove('popup_opened');
}

function closePopup() {
  formAdd.classList.remove('popup_opened');
}


edit.addEventListener('click', showPopup);
add.addEventListener('click', showPopup);
close.addEventListener('click', closePopup);
formEdit.addEventListener('submit', formSubmitHandler);








// function addCards() {
//   const html = initialCards
//   .map(addEl)
//   itemsTemplate.append(...html);
// }

// const templateElement = document.querySelector('#photo-items-template');

// function addEl(item) {
//   // const newElement = document.querySelector('#photo-items-template').content;
//   const newElement = templateElement.content.cloneNode(true);
//   const titleElement = newElement.querySelector('.photo-items__title');
//   const imageElement = newElement.querySelector('.photo-items__image');
//   titleElement.textContent = item.name;
//   imageElement.src = item.link;
//   imageElement.alt = item.name;
//   return newElement;
// }


// function addEl(item) {
//   const itemsTemplate = document.querySelector('#photo-items-template').content;
//   const itemsElement = itemsTemplate.cloneNode(true);
//   itemsElement.querySelector('.photo-items__image').textContent = itemsImage;
//   itemsElement.querySelector('.photo-items__title').textContent = itemsTitle;
//   photoItems.append(itemsElement);
// }

// addCards();




























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
