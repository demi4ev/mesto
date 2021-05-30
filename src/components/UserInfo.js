export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
    this._profileNameSelector = document.querySelector(profileNameSelector);
    this._profileDescriptionSelector = document.querySelector(profileDescriptionSelector);
    this._profileAvatarSelector = document.querySelector(profileAvatarSelector);
  }

  // getUserInfo() {
  //   return {
  //     name: this._profileNameSelector.textContent,
  //     about: this._profileDescriptionSelector.textContent,
  //     avatar: this._profileAvatarSelector.src
  //   }
  // }

  getUserData() {
    const userValues = {
      name: this._profileNameSelector.textContent,
      about: this._profileDescriptionSelector.textContent,
      avatar: this._profileAvatarSelector.src
    }
    return userValues;
  }

  // getUserInfo() {
  //   this._userInfo.name = this._profileName.textContent,
  //   this._userInfo.description = this._profileDescription.textContent,
  //   this._userInfo.avatar = this._profileAvatar.textContent
  //   };
  // }

  setUserInfo({ name, about, avatar }) {
    if (name) {
      this._profileNameSelector.textContent = name;
    }
    if (about) {
      this._profileDescriptionSelector.textContent = about;
    }
    if (avatar) {
      this._profileAvatarSelector.src = avatar;
    }
  }
}






// export default class UserInfo {
//   constructor({profileNameSelector, profileDescriptionSelector}) {
//     this._profileName = document.querySelector(profileNameSelector);
//     this._profileDescription = document.querySelector(profileDescriptionSelector);
//   }

//   getUserInfo() {
//     return {
//       profileName: this._profileName.textContent,
//       profileDescription: this._profileDescription.textContent
//     };
//   }

//   setUserInfo({ name, description }) {
//     this._profileName.textContent = name;
//     this._profileDescription.textContent = description;
//   }
// }

