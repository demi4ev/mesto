export default class UserInfo {
  constructor({ profileName, profileDescription }) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent
    };
    return userInfo;
  }

  setUserInfo({ name, description }) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }
}


// function handleUserInfoSubmit(evt) {
//   evt.preventDefault();
//   addInfo();
//   closePopup(formEdit);
// }

// function showPopupEdit() {
//   openPopup(formEdit);
//   nameInput.value = nameInfo.textContent;
//   jobInput.value = jobInfo.textContent;
//   editFormValidator.clearErrors();
// }
