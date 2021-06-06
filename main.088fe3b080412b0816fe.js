/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var address = _ref.address,
        token = _ref.token;

    _classCallCheck(this, Api);

    this._address = address;
    this._token = token;
  } // получение карточек


  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._address, "/cards"), {
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(this._checkResponseData);
    }
  }, {
    key: "_checkResponseData",
    value: function _checkResponseData(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      }
    } // добавление карточки

  }, {
    key: "addCard",
    value: function addCard(title, link) {
      return fetch("".concat(this._address, "/cards"), {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: title,
          link: link
        })
      }).then(this._checkResponseData);
    } // удаление карточки

  }, {
    key: "removeCard",
    value: function removeCard(id) {
      return fetch("".concat(this._address, "/cards/").concat(id), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(this._checkResponseData);
    } // лайки с сервера

  }, {
    key: "setLike",
    value: function setLike(cardId) {
      return fetch("".concat(this._address, "/cards/likes/").concat(cardId), {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      }).then(this._checkResponseData);
    } // снятиие лайка

  }, {
    key: "removeLike",
    value: function removeLike(cardId) {
      return fetch("".concat(this._address, "/cards/likes/").concat(cardId), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(this._checkResponseData);
    } // получение инфы о юзере

  }, {
    key: "getUserData",
    value: function getUserData() {
      return fetch("".concat(this._address, "/users/me"), {
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      }).then(this._checkResponseData);
    } // изменение инфы о юзере

  }, {
    key: "changeUserInfo",
    value: function changeUserInfo(name, about) {
      return fetch("".concat(this._address, "/users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this._checkResponseData);
    } // смена аватара

  }, {
    key: "updateAvatar",
    value: function updateAvatar(avatarLink) {
      return fetch("".concat(this._address, "/users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          avatar: avatarLink
        })
      }).then(this._checkResponseData);
    }
  }]);

  return Api;
}();



/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// валидация
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);

    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._formError = config.formError;
    this._formErrorActive = config.formErrorActive;
    this._formLabel = config.formLabel;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  } // показываем ошибку


  _createClass(FormValidator, [{
    key: "_showError",
    value: function _showError(inputElement, errorMessage) {
      this._errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      this._errorElement.textContent = errorMessage;

      this._errorElement.classList.add(this._formErrorActive);

      this._inputElement.classList.add(this._inputErrorClass);
    } // скрываем ошибку

  }, {
    key: "_hideError",
    value: function _hideError(inputElement) {
      this._errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      this._errorElement.textContent = '';
      inputElement.classList.remove(this._inputErrorClass);

      this._errorElement.classList.remove(this._formErrorActive);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      this._inputElement = inputElement;

      if (!this._inputElement.validity.valid) {
        this._showError(inputElement, inputElement.validationMessage);
      } else {
        this._hideError(inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    } // кнопку неактивной

  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.disableButton();
      } else {
        this._buttonElement.removeAttribute('disabled');
      }
    }
  }, {
    key: "disableButton",
    value: function disableButton() {
      this._buttonElement.setAttribute('disabled', true);
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener('submit', function (event) {
        event.preventDefault();
      });

      this._setEventListeners();
    } // очистка ошибок

  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;

      this._inputList.forEach(function (formElement) {
        _this2._hideError(formElement);
      });

      this._toggleButtonState();
    }
  }]);

  return FormValidator;
}();

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');

      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');

      document.removeEventListener('keydown', this._handleEscClose);
    } // закрытие по esc

  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popup.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup_opened')) {
          _this.close();
        }

        if (evt.target.classList.contains('popup__close-button')) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupDeleteCard.js":
/*!*******************************************!*\
  !*** ./src/components/PopupDeleteCard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupDeleteCard)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupDeleteCard = /*#__PURE__*/function (_Popup) {
  _inherits(PopupDeleteCard, _Popup);

  var _super = _createSuper(PopupDeleteCard);

  function PopupDeleteCard(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        handleSubmitForm = _ref.handleSubmitForm;

    _classCallCheck(this, PopupDeleteCard);

    _this = _super.call(this, popupSelector);
    _this._handleSubmitForm = handleSubmitForm;
    _this._formButton = _this._popup.querySelector('.popup__submit-button');
    _this._defaultFormButtonText = _this._formButton.textContent;
    return _this;
  }

  _createClass(PopupDeleteCard, [{
    key: "setSubmitAction",
    value: function setSubmitAction(action) {
      this._handleSubmitForm = action;
    } // прелоадер кнопки

  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      var loadingText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Удаление...';

      if (isLoading) {
        this._formButton.textContent = loadingText;
      } else {
        this._formButton.textContent = this._defaultFormButtonText;
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupDeleteCard.prototype), "setEventListeners", this).call(this);

      this._popup.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this2._handleSubmitForm();
      });
    }
  }]);

  return PopupDeleteCard;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        handleSubmitForm = _ref.handleSubmitForm;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._form = _this._popup.querySelector('.popup__container');
    _this._popupInputs = _this._popup.querySelectorAll('.popup__field');
    _this._handleSubmitForm = handleSubmitForm;
    _this._submit = _this._submitForm.bind(_assertThisInitialized(_this));
    _this._formButton = _this._popup.querySelector('.popup__submit-button');
    _this._defaultFormButtonText = _this._formButton.textContent;
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._inputValues = {};

      this._popupInputs.forEach(function (item) {
        _this2._inputValues[item.name] = item.value;
      });

      return this._inputValues;
    }
  }, {
    key: "_submitForm",
    value: function _submitForm(evt) {
      evt.preventDefault();

      this._handleSubmitForm(this._getInputValues());
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', this._submit);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._form.reset();
    } // прелоадер кнопки

  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      var loadingText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Сохранение...';

      if (isLoading) {
        this._formButton.textContent = loadingText;
      } else {
        this._formButton.textContent = this._defaultFormButtonText;
      }
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupImage = _this._popup.querySelector('.popup__img');
    _this._popupTitle = _this._popup.querySelector('.popup__description');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);

      this._popupImage.src = link;
      this._popupImage.alt = name;
      this._popupTitle.textContent = name;
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element, isArray) {
      if (isArray) {
        this._container.append(element);
      } else {
        this._container.prepend(element);
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileName = _ref.profileName,
        profileDescription = _ref.profileDescription,
        profileAvatar = _ref.profileAvatar;

    _classCallCheck(this, UserInfo);

    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
    this._profileAvatar = document.querySelector(profileAvatar);
  } // getUserInfo() {
  //   return {
  //     name: this._profileName.textContent,
  //     about: this._profileDescription.textContent,
  //     avatar: this._profileAvatar.src
  //   }
  // }


  _createClass(UserInfo, [{
    key: "getUserData",
    value: function getUserData() {
      var userValues = {
        name: this._profileName.textContent,
        about: this._profileDescription.textContent,
        avatar: this._profileAvatar.src,
        id: this._userId
      };
      return userValues;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          about = _ref2.about,
          avatar = _ref2.avatar,
          _id = _ref2._id;

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
    } // getUserId() {
    //   const userId = this._id;
    //   return userId
    // }

  }]);

  return UserInfo;
}(); // export default class UserInfo {
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




/***/ }),

/***/ "./src/components/Сard.js":
/*!********************************!*\
  !*** ./src/components/Сard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(data, cardSelector, handleCardClick, userId, deleteSubmitCard, toggleLike, removeLike) {
    _classCallCheck(this, Card);

    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._myLike = data.likes;
    this._likes = data.likes.length;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._userId = userId;
    this._deleteSubmitCard = deleteSubmitCard;
    this._toggleLike = toggleLike;
    this._removeLike = removeLike;
  } // получаем темплэйт


  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector('.photo-items__post').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_setLike",
    value: function _setLike() {
      this._likeCounter = this._newItem.querySelector('.photo-items__like-counter');

      this._setLikesCount(this._likes);

      this._updateLikes();
    }
  }, {
    key: "_setLikesCount",
    value: function _setLikesCount(likesCount) {
      this._likeCounter.textContent = likesCount;
    } // создаём карточку

  }, {
    key: "generateCard",
    value: function generateCard() {
      this._newItem = this._getTemplate();
      this._imgButton = this._newItem.querySelector('.photo-items__img-button');
      this._likeButton = this._newItem.querySelector('.photo-items__like-button');
      this._delButton = this._newItem.querySelector('.photo-items__del-button');
      this._newItem.querySelector('.photo-items__title').textContent = this._name;
      this._likesCounter = this._newItem.querySelector('.photo-items__like-counter');
      this._imgEl = this._newItem.querySelector('.photo-items__image');
      this._imgEl.src = this._link;
      this._imgEl.alt = this._name;

      if (this._cardOwnerId === this._userId) {
        this._delButton.classList.add('popup_opened');
      }

      this._setLike();

      this._setEventListeners();

      return this._newItem;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._delButton.addEventListener('click', function () {
        _this._deleteSubmitCard(_this._cardId);
      });

      this._likeButton.addEventListener('click', function () {
        if (_this._checkLikeId()) {
          _this._removeLike();
        } else {
          _this._toggleLike();
        }
      });

      this._imgEl.addEventListener('click', this._handleCardClick);
    }
  }, {
    key: "delCard",
    value: function delCard() {
      this._newItem.remove();

      this._newItem = null;
    }
  }, {
    key: "addLikes",
    value: function addLikes(data) {
      this._myLike = data.likes;

      this._setLikesCount(this._myLike.length);

      this._updateLikes();
    }
  }, {
    key: "_checkLikeId",
    value: function _checkLikeId() {
      var _this2 = this;

      return this._myLike.find(function (el) {
        return el._id === _this2._userId;
      });
    }
  }, {
    key: "_updateLikes",
    value: function _updateLikes() {
      if (this._checkLikeId()) {
        this._likeButton.classList.add('photo-items__like-button_active');
      } else {
        this._likeButton.classList.remove('photo-items__like-button_active');
      }
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "formEdit": () => (/* binding */ formEdit),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "formAdd": () => (/* binding */ formAdd),
/* harmony export */   "formAddAvatar": () => (/* binding */ formAddAvatar),
/* harmony export */   "avatarEditButton": () => (/* binding */ avatarEditButton),
/* harmony export */   "avatarInput": () => (/* binding */ avatarInput),
/* harmony export */   "editButton": () => (/* binding */ editButton),
/* harmony export */   "titlePlaceInput": () => (/* binding */ titlePlaceInput),
/* harmony export */   "imagePlaceInput": () => (/* binding */ imagePlaceInput),
/* harmony export */   "addButton": () => (/* binding */ addButton),
/* harmony export */   "validationConfig": () => (/* binding */ validationConfig)
/* harmony export */ });
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var formEdit = document.querySelector('.popup_profile-edit');
var nameInput = document.querySelector('.popup__field_type_name');
var jobInput = document.querySelector('.popup__field_type_description');
var formAdd = document.querySelector('.popup_new-place');
var formAddAvatar = document.querySelector('.popup_new-avatar');
var avatarEditButton = document.querySelector('.profile__avatar-edit-button');
var avatarInput = document.querySelector('.popup__field_type_link-avatar-image');
var editButton = document.querySelector('.profile__edit-button');
var titlePlaceInput = document.querySelector('popup__field_type_title');
var imagePlaceInput = document.querySelector('popup__field_type_link-image');
var addButton = document.querySelector('.profile__add-button');
var validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__field_error',
  formError: '.popup__form-error',
  formErrorActive: 'popup__form-error_active',
  formLabel: '.popup__label'
};


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_ard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Сard.js */ "./src/components/Сard.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupDeleteCard */ "./src/components/PopupDeleteCard.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_9__.default({
  address: 'https://mesto.nomoreparties.co/v1/cohort-24',
  token: 'bc0f3231-b10d-4903-b46b-c2341808b6fc'
});
var userId; // api.getUserData()
// .then((res) => {
//   const userId = res._id;
//   console.log(userId)
// })

Promise.all([api.getInitialCards(), api.getUserData()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      cards = _ref2[0],
      data = _ref2[1];

  userInfo.setUserInfo(data);
  userId = data._id;
  var cardsList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.default({
    items: cards,
    renderer: function renderer(item) {
      var card = createCard(item);
      var cardElement = card.generateCard(); // const cardElement = createCard(item, '.template');

      cardsList.addItem(cardElement, true);
    }
  }, '.photo-items');
  cardsList.renderItems();
  var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.default({
    popupSelector: '.popup_new-place',
    handleSubmitForm: function handleSubmitForm(inputValues) {
      popupAddCard.renderLoading(true);
      api.addCard(inputValues.title, inputValues.link).then(function (newCard) {
        var card = createCard(newCard);
        var cardElement = card.generateCard();
        cardsList.addItem(cardElement);
        popupAddCard.close();
      })["catch"](function (err) {
        console.log(err);
      })["finally"](function () {
        popupAddCard.renderLoading(false);
      });
    }
  });
  popupAddCard.setEventListeners();

  function handleAddCard() {
    popupAddCard.open();
    addFormValidator.resetValidation();
  }

  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.addButton.addEventListener('click', handleAddCard);
})["catch"](function (err) {
  console.log(err);
});
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.default('.popup_big-picture');
popupWithImage.setEventListeners();

function createCard(item) {
  var card = new _components_ard_js__WEBPACK_IMPORTED_MODULE_1__.default(item, '.template', function () {
    popupWithImage.open(item.name, item.link);
  }, userId, function () {
    popupDeleteCard.open();
    popupDeleteCard.setSubmitAction(function () {
      api.removeCard(item._id).then(function () {
        card.delCard();
        popupDeleteCard.close();
      })["catch"](function (err) {
        console.log(err);
      });
    });
  }, function () {
    api.setLike(item._id).then(function (res) {
      card.addLikes(res);
    })["catch"](function (err) {
      console.log(err);
    });
  }, function () {
    api.removeLike(item._id).then(function (res) {
      card.addLikes(res);
    })["catch"](function (err) {
      console.log(err);
    });
  });
  return card;
}

var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.validationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formEdit);
editFormValidator.enableValidation();
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.validationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formAdd);
addFormValidator.enableValidation();
var addAvatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.validationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formAddAvatar);
addAvatarFormValidator.enableValidation(); // попап редактирование профиля

var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.default({
  profileName: '.profile__title',
  profileDescription: '.profile__subtitle',
  profileAvatar: '.profile__avatar-image'
});
var popupEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.default({
  popupSelector: '.popup_profile-edit',
  handleSubmitForm: function handleSubmitForm() {
    popupEdit.renderLoading(true);
    api.changeUserInfo(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.nameInput.value, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.jobInput.value).then(function (res) {
      userInfo.setUserInfo(res);
    }).then(function () {
      popupEdit.close();
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      popupEdit.renderLoading(false);
    });
  }
});
popupEdit.setEventListeners();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.editButton.addEventListener('click', function () {
  popupEdit.open();
  var info = userInfo.getUserData();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.nameInput.value = info.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.jobInput.value = info.about;
  editFormValidator.resetValidation();
}); // попап изменения аватара

var popupAddAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.default({
  popupSelector: '.popup_new-avatar',
  handleSubmitForm: function handleSubmitForm() {
    popupAddAvatar.renderLoading(true);
    api.updateAvatar(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.avatarInput.value).then(function (res) {
      userInfo.setUserInfo(res);
      popupAddAvatar.close();
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      popupAddAvatar.renderLoading(false);
    });
  }
});
popupAddAvatar.setEventListeners();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.avatarEditButton.addEventListener('click', function () {
  popupAddAvatar.open();
  addAvatarFormValidator.resetValidation();
}); // попап удаления карточки

var popupDeleteCard = new _components_PopupDeleteCard__WEBPACK_IMPORTED_MODULE_6__.default({
  popupSelector: '.popup_delete-card',
  handleSubmitForm: function handleSubmitForm(item) {
    popupDeleteCard.renderLoading(true);
    api.removeCard(item._id).then(function () {
      card.delCard();
      popupDeleteCard.close();
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      popupDeleteCard.renderLoading(false);
    });
  }
});
popupDeleteCard.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=main.088fe3b080412b0816fe.js.map