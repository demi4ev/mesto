export default class UserInfo {
  constructor({ profileName, profileDescription, profileAvatar }) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  // getUserInfo() {
  //   return {
  //     name: this._profileName.textContent,
  //     about: this._profileDescription.textContent,
  //     avatar: this._profileAvatar.src
  //   }
  // }

  getUserData() {
    const userValues = {
      name: this._profileName.textContent,
      about: this._profileDescription.textContent,
      avatar: this._profileAvatar.src,
      id: this._userId
    }
    return userValues;
  }

  setUserInfo({ name, about, avatar, _id }) {
    if (name) {
      this._profileName.textContent = name;
    }
    if (about) {
      this._profileDescription.textContent = about;
    }
    if (avatar) {
      this._profileAvatar.src = avatar;
    }
    if (_id) {
      this._userId = _id;
    }
  }

  // getUserId() {
  //   const userId = this._id;
  //   return userId
  // }
}






// export default class UserInfo {
//   constructor({profileName, profileDescription}) {
//     this._profileName = document.querySelector(profileName);
//     this._profileDescription = document.querySelector(profileDescription);
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

