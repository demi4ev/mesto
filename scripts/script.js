let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_description');

let nameInfo = document.querySelector('.profile__title');
let jobInfo = document.querySelector('.profile__subtitle');


function addInfo() {
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  addInfo();
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);


let edit = document.querySelector('.profile__edit-button');
function showPopup() {
  formElement.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

edit.addEventListener('click', showPopup);


let close = document.querySelector('.popup__close-button');
function closePopup() {
  formElement.classList.remove('popup_opened');
}

close.addEventListener('click', closePopup);



































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
