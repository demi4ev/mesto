export default class UserInfo {
  constructor({profileNameSelector, profileDescriptionSelector}) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
  }

  getUserInfo() {
    // this._userInfo = {
    //   profileName: this._profileName.textContent,
    //   profileDescription: this._profileDescription.textContent
    // };
    // return this._userInfo;
    return {
      profileName: this._profileName.textContent,
      profileDescription: this._profileDescription.textContent
    };
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
