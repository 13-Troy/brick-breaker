/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './client/components/Avatar/Avatar.tsx':
      /*!*********************************************!*\
  !*** ./client/components/Avatar/Avatar.tsx ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/components/Avatar/style.tsx");\n\n\n\nvar Avatar = function Avatar(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.AvatarSt, {\n    size: props.size,\n    onClick: props.onClick,\n    editable: !!props.onClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.AvatarImgSt, {\n    backgroundImage: props.backgroundImage\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);\n\n//# sourceURL=webpack://test/./client/components/Avatar/Avatar.tsx?'
        );

        /***/
      },

    /***/ './client/components/Avatar/index.ts':
      /*!*******************************************!*\
  !*** ./client/components/Avatar/index.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./client/components/Avatar/Avatar.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Avatar/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Avatar/style.tsx':
      /*!********************************************!*\
  !*** ./client/components/Avatar/style.tsx ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AvatarImgSt": () => (/* binding */ AvatarImgSt),\n/* harmony export */   "AvatarSt": () => (/* binding */ AvatarSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar AvatarSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.attrs(function (props) {\n  return {\n    size: props.size,\n    role: \'button\',\n    editable: props.editable\n  };\n})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  background-color: ", ";\\n  border-radius: 50%;\\n  cursor: pointer;\\n  position: relative;\\n  width: ", ";\\n  height: ", ";\\n\\n  ", "\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.grey;\n}, function (_ref2) {\n  var size = _ref2.size;\n  return size ? "".concat(size, "px") : \'130px\';\n}, function (_ref3) {\n  var size = _ref3.size;\n  return size ? "".concat(size, "px") : \'130px\';\n}, function (_ref4) {\n  var editable = _ref4.editable;\n  return editable && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n      ::after {\\n        position: absolute;\\n        top: 0px;\\n        content: \'\\u041F\\u043E\\u043C\\u0435\\u043D\\u044F\\u0442\\u044C \\u0430\\u0432\\u0430\\u0442\\u0430\\u0440\';\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        background-color: ", ";\\n        opacity: 0;\\n        color: ", ";\\n        font-size: 13px;\\n        width: 100%;\\n        height: 100%;\\n        border-radius: 50%;\\n        transition: opacity ", ";\\n      }\\n\\n      &:hover {\\n        &::after {\\n          opacity: 0.4;\\n        }\\n      }\\n    "])), function (_ref5) {\n    var theme = _ref5.theme;\n    return theme.allColors.black;\n  }, function (_ref6) {\n    var theme = _ref6.theme;\n    return theme.allColors.white;\n  }, function (_ref7) {\n    var theme = _ref7.theme;\n    return theme.skillsStartAnim;\n  });\n});\nvar AvatarImgSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.attrs(function (props) {\n  return {\n    src: props.backgroundImage ? "https://ya-praktikum.tech/api/v2/resources".concat(props.backgroundImage) : \'/images/default_avatar.png\'\n  };\n})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  border-radius: 50%;\\n  height: 100%;\\n  width: 100%;\\n"])));\n\n//# sourceURL=webpack://test/./client/components/Avatar/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Button/index.ts':
      /*!*******************************************!*\
  !*** ./client/components/Button/index.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./client/components/Button/style.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_style__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Button/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Button/style.tsx':
      /*!********************************************!*\
  !*** ./client/components/Button/style.tsx ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: ", ";\\n  background-color: ", ";\\n  color: ", ";\\n  font-weight: ", ";\\n  font-size: 14px;\\n  border: none;\\n  border-radius: ", ";\\n  padding: 10px;\\n  cursor: pointer;\\n  transition: ", " all;\\n  &:hover {\\n    background-color: ", ";\\n    color: ", ";\\n  }\\n  margin: 0 auto;\\n  display: block;\\n"])), function (_ref) {\n  var fullWidth = _ref.fullWidth;\n  return fullWidth ? \'100%\' : \'auto\';\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.colors.bgBtn;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.colors.fontBtn;\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.fonts.black;\n}, function (_ref5) {\n  var theme = _ref5.theme;\n  return theme.borderRadius;\n}, function (_ref6) {\n  var theme = _ref6.theme;\n  return theme.skillsStartAnim;\n}, function (_ref7) {\n  var theme = _ref7.theme;\n  return theme.colors.bgBtnHover;\n}, function (_ref8) {\n  var theme = _ref8.theme;\n  return theme.colors.fontBtnHover;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://test/./client/components/Button/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/ButtonSettings/index.ts':
      /*!***************************************************!*\
  !*** ./client/components/ButtonSettings/index.ts ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./client/components/ButtonSettings/style.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_style__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/ButtonSettings/index.ts?'
        );

        /***/
      },

    /***/ './client/components/ButtonSettings/style.tsx':
      /*!****************************************************!*\
  !*** ./client/components/ButtonSettings/style.tsx ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ButtonSettings = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  display: block;\\n  text-align: center;\\n  margin-bottom: 10px;\\n  color: ", ";\\n  font-size: 12px;\\n  background: none;\\n  border: none;\\n  border-bottom: 1px solid ", ";\\n  cursor: pointer;\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.white;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.allColors.white;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonSettings);\n\n//# sourceURL=webpack://test/./client/components/ButtonSettings/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/ChangeAvatarModal/ChangeAvatarModal.tsx':
      /*!*******************************************************************!*\
  !*** ./client/components/ChangeAvatarModal/ChangeAvatarModal.tsx ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input */ "./client/components/Input/index.ts");\n/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/user/actions */ "./client/store/user/actions.ts");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar ChangeAvatarModal = function ChangeAvatarModal() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      avatar = _useState2[0],\n      setAvatar = _useState2[1];\n\n  var changeAvatar = function changeAvatar() {\n    if (!avatar) {\n      return; // если аватара нет, то и менять нечего\n    }\n\n    var formData = new FormData();\n    formData.append(\'avatar\', avatar);\n    dispatch((0,_store_user_actions__WEBPACK_IMPORTED_MODULE_4__.updateProfileAvatar)(formData));\n  };\n\n  var handleChange = function handleChange(e) {\n    if (!e.target.files) {\n      return;\n    }\n\n    setAvatar(e.target.files[0]);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    h: 4\n  }, \'загрузите файл\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'avatar\',\n    type: \'file\',\n    placeholder: \'file\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    fullWidth: true,\n    onClick: changeAvatar\n  }, \'поменять\'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeAvatarModal);\n\n//# sourceURL=webpack://test/./client/components/ChangeAvatarModal/ChangeAvatarModal.tsx?'
        );

        /***/
      },

    /***/ './client/components/ChangeAvatarModal/index.ts':
      /*!******************************************************!*\
  !*** ./client/components/ChangeAvatarModal/index.ts ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ChangeAvatarModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeAvatarModal */ "./client/components/ChangeAvatarModal/ChangeAvatarModal.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ChangeAvatarModal__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/ChangeAvatarModal/index.ts?'
        );

        /***/
      },

    /***/ './client/components/ChangePasswordModal/ChangePasswordModal.tsx':
      /*!***********************************************************************!*\
  !*** ./client/components/ChangePasswordModal/ChangePasswordModal.tsx ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input */ "./client/components/Input/index.ts");\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/const */ "./client/services/const.tsx");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar ChangePasswordModal = function ChangePasswordModal() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    oldPassword: \'\',\n    newPassword: \'\',\n    repeatNewPassword: \'\'\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var changePassword = function changePassword() {\n    if (password.newPassword === password.repeatNewPassword) {\n      fetch("".concat(_services_const__WEBPACK_IMPORTED_MODULE_4__.UrlSite.URL, "/user/password"), {\n        credentials: \'include\',\n        method: \'PUT\',\n        headers: {\n          Accept: \'application/json\',\n          \'Content-Type\': \'application/json\'\n        },\n        body: JSON.stringify(password)\n      });\n    }\n  };\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setPassword(function (prevPassword) {\n      return _objectSpread(_objectSpread({}, prevPassword), {}, _defineProperty({}, name, value));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    h: 4\n  }, \'изменить пароль\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'oldPassword\',\n    type: \'password\',\n    placeholder: \'старый пароль\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'newPassword\',\n    type: \'password\',\n    placeholder: \'новый пароль\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'repeatNewPassword\',\n    type: \'password\',\n    placeholder: \'повторить пароль\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    fullWidth: true,\n    onClick: changePassword\n  }, \'сохранить\'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordModal);\n\n//# sourceURL=webpack://test/./client/components/ChangePasswordModal/ChangePasswordModal.tsx?'
        );

        /***/
      },

    /***/ './client/components/ChangePasswordModal/index.ts':
      /*!********************************************************!*\
  !*** ./client/components/ChangePasswordModal/index.ts ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ChangePasswordModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePasswordModal */ "./client/components/ChangePasswordModal/ChangePasswordModal.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/ChangePasswordModal/index.ts?'
        );

        /***/
      },

    /***/ './client/components/ChangeProfileDataModal/ChangeProfileDataModal.tsx':
      /*!*****************************************************************************!*\
  !*** ./client/components/ChangeProfileDataModal/ChangeProfileDataModal.tsx ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input */ "./client/components/Input/index.ts");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/user/actions */ "./client/store/user/actions.ts");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar ChangeProfileDataModal = function ChangeProfileDataModal() {\n  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.user;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    first_name: user.first_name,\n    second_name: user.second_name,\n    display_name: user.display_name,\n    login: user.login,\n    email: user.email,\n    phone: user.phone\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var changeData = function changeData() {\n    dispatch((0,_store_user_actions__WEBPACK_IMPORTED_MODULE_5__.updateProfileData)(data));\n  };\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setData(function (prevData) {\n      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, name, value));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    h: 4\n  }, \'изменить данные\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'email\',\n    type: \'email\',\n    placeholder: \'почта\',\n    onChange: handleChange,\n    value: data.email\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'login\',\n    type: \'text\',\n    placeholder: \'логин\',\n    onChange: handleChange,\n    value: data.login\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'first_name\',\n    type: \'text\',\n    placeholder: \'имя\',\n    onChange: handleChange,\n    value: data.first_name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'second_name\',\n    type: \'text\',\n    placeholder: \'фамилия\',\n    onChange: handleChange,\n    value: data.second_name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'display_name\',\n    type: \'text\',\n    placeholder: \'ник\',\n    onChange: handleChange,\n    value: data.display_name ? data.display_name : \'\'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'phone\',\n    type: \'tel\',\n    placeholder: \'телефон\',\n    onChange: handleChange,\n    value: data.phone\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    fullWidth: true,\n    onClick: changeData\n  }, \'сохранить\'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeProfileDataModal);\n\n//# sourceURL=webpack://test/./client/components/ChangeProfileDataModal/ChangeProfileDataModal.tsx?'
        );

        /***/
      },

    /***/ './client/components/ChangeProfileDataModal/index.ts':
      /*!***********************************************************!*\
  !*** ./client/components/ChangeProfileDataModal/index.ts ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ChangeProfileDataModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeProfileDataModal */ "./client/components/ChangeProfileDataModal/ChangeProfileDataModal.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ChangeProfileDataModal__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/ChangeProfileDataModal/index.ts?'
        );

        /***/
      },

    /***/ './client/components/CreatePostModal/CreatePostModal.tsx':
      /*!***************************************************************!*\
  !*** ./client/components/CreatePostModal/CreatePostModal.tsx ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modal */ "./client/components/Modal/index.ts");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Input */ "./client/components/Input/index.ts");\n/* harmony import */ var _components_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Textarea */ "./client/components/Textarea/index.ts");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n\n\n\n\n\n\nvar CreatePostModal = function CreatePostModal(_ref) {\n  var isShown = _ref.isShown,\n      toggleVisible = _ref.toggleVisible,\n      headerText = _ref.headerText,\n      handleAdd = _ref.handleAdd,\n      handleChange = _ref.handleChange;\n\n  if (!isShown) {\n    return null;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    isShown: isShown,\n    hide: toggleVisible,\n    headerText: headerText\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    name: \'name\',\n    type: \'text\',\n    placeholder: \'название\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Textarea__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    name: \'content\',\n    placeholder: \'текст поста\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    onClick: handleAdd\n  }, "\\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePostModal);\n\n//# sourceURL=webpack://test/./client/components/CreatePostModal/CreatePostModal.tsx?'
        );

        /***/
      },

    /***/ './client/components/CreatePostModal/index.ts':
      /*!****************************************************!*\
  !*** ./client/components/CreatePostModal/index.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CreatePostModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePostModal */ "./client/components/CreatePostModal/CreatePostModal.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CreatePostModal__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/CreatePostModal/index.ts?'
        );

        /***/
      },

    /***/ './client/components/DataLine/DataLine.tsx':
      /*!*************************************************!*\
  !*** ./client/components/DataLine/DataLine.tsx ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/components/DataLine/style.tsx");\n\n\n\nvar DataLine = function DataLine(_ref) {\n  var title = _ref.title,\n      value = _ref.value;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.DataLineSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.TitleSt, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, value));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataLine);\n\n//# sourceURL=webpack://test/./client/components/DataLine/DataLine.tsx?'
        );

        /***/
      },

    /***/ './client/components/DataLine/index.ts':
      /*!*********************************************!*\
  !*** ./client/components/DataLine/index.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DataLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataLine */ "./client/components/DataLine/DataLine.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DataLine__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/DataLine/index.ts?'
        );

        /***/
      },

    /***/ './client/components/DataLine/style.tsx':
      /*!**********************************************!*\
  !*** ./client/components/DataLine/style.tsx ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "DataLineSt": () => (/* binding */ DataLineSt),\n/* harmony export */   "TitleSt": () => (/* binding */ TitleSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar DataLineSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  border-bottom: 1px solid #eaeaea;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  position: relative;\\n  padding: 12px 0;\\n  min-height: 44px;\\n"])));\nvar TitleSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  position: absolute;\\n  left: 0;\\n  color: ", ";\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.fontBtn;\n});\n\n//# sourceURL=webpack://test/./client/components/DataLine/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/ErrorPageTemplate/ErrorPageTemplate.tsx':
      /*!*******************************************************************!*\
  !*** ./client/components/ErrorPageTemplate/ErrorPageTemplate.tsx ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./client/components/ErrorPageTemplate/style.tsx");\n\n\n\n\n\nvar ErrorPageTemplate = function ErrorPageTemplate(_ref) {\n  var title = _ref.title,\n      subtitle = _ref.subtitle;\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();\n\n  var goBack = function goBack() {\n    return navigate(-1);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_3__.CenterSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_3__.ContainerTitleSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_3__.BigSt, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_3__.SmallSt, null, subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    fullWidth: false,\n    onClick: goBack\n  }, "\\u043D\\u0430\\u0437\\u0430\\u0434"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPageTemplate);\n\n//# sourceURL=webpack://test/./client/components/ErrorPageTemplate/ErrorPageTemplate.tsx?'
        );

        /***/
      },

    /***/ './client/components/ErrorPageTemplate/index.ts':
      /*!******************************************************!*\
  !*** ./client/components/ErrorPageTemplate/index.ts ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ErrorPageTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorPageTemplate */ "./client/components/ErrorPageTemplate/ErrorPageTemplate.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ErrorPageTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/ErrorPageTemplate/index.ts?'
        );

        /***/
      },

    /***/ './client/components/ErrorPageTemplate/style.tsx':
      /*!*******************************************************!*\
  !*** ./client/components/ErrorPageTemplate/style.tsx ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "BigSt": () => (/* binding */ BigSt),\n/* harmony export */   "CenterSt": () => (/* binding */ CenterSt),\n/* harmony export */   "ContainerTitleSt": () => (/* binding */ ContainerTitleSt),\n/* harmony export */   "SmallSt": () => (/* binding */ SmallSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar CenterSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  max-width: 500px;\\n  height: min-content;\\n  position: absolute;\\n  margin: auto;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n"])));\nvar ContainerTitleSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-weight: bold;\\n"])));\nvar BigSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  font-size: 46px;\\n  padding: 30px;\\n"])));\nvar SmallSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\\n  font-size: 17px;\\n"])));\n\n//# sourceURL=webpack://test/./client/components/ErrorPageTemplate/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Input/Input.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Input/Input.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/components/Input/style.tsx");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nvar Input = function Input(_ref) {\n  var inputProps = _extends({}, _ref);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.InputSt, inputProps);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://test/./client/components/Input/Input.tsx?'
        );

        /***/
      },

    /***/ './client/components/Input/index.ts':
      /*!******************************************!*\
  !*** ./client/components/Input/index.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./client/components/Input/Input.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Input__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Input/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Input/style.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Input/style.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "InputSt": () => (/* binding */ InputSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar InputSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: 100%;\\n  padding: 12px;\\n  border-radius: ", ";\\n  margin-bottom: 24px;\\n  border: 1px solid ", ";\\n  font-size: 12px;\\n  font-weight: ", ";\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.borderRadius;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.colors.inputBorder;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.semi_bold;\n});\n\n//# sourceURL=webpack://test/./client/components/Input/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Link/index.ts':
      /*!*****************************************!*\
  !*** ./client/components/Link/index.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./client/components/Link/style.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_style__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Link/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Link/style.tsx':
      /*!******************************************!*\
  !*** ./client/components/Link/style.tsx ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Link": () => (/* binding */ Link),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  display: block;\\n  text-align: center;\\n  margin-bottom: 24px;\\n  color: ", ";\\n  font-size: 12px;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.fontLink;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\n\n//# sourceURL=webpack://test/./client/components/Link/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Menu/Menu.tsx':
      /*!*****************************************!*\
  !*** ./client/components/Menu/Menu.tsx ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/const */ "./client/services/const.tsx");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/components/Menu/style.tsx");\n\n\n\n\nvar Menu = function Menu() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuContainerSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuItemSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuLinkSt, {\n    to: _services_const__WEBPACK_IMPORTED_MODULE_1__.AppRoute.FORUM\n  }, "\\u0444\\u043E\\u0440\\u0443\\u043C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuItemSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuLinkSt, {\n    to: _services_const__WEBPACK_IMPORTED_MODULE_1__.AppRoute.GAME\n  }, "\\u0438\\u0433\\u0440\\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuItemSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuLinkSt, {\n    to: _services_const__WEBPACK_IMPORTED_MODULE_1__.AppRoute.PROFILE\n  }, "\\u043F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuItemSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.MenuLinkSt, {\n    to: _services_const__WEBPACK_IMPORTED_MODULE_1__.AppRoute.RECORDS\n  }, "\\u043B\\u0438\\u0434\\u0435\\u0440\\u044B"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://test/./client/components/Menu/Menu.tsx?'
        );

        /***/
      },

    /***/ './client/components/Menu/index.ts':
      /*!*****************************************!*\
  !*** ./client/components/Menu/index.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./client/components/Menu/Menu.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Menu__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Menu/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Menu/style.tsx':
      /*!******************************************!*\
  !*** ./client/components/Menu/style.tsx ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MenuContainerSt": () => (/* binding */ MenuContainerSt),\n/* harmony export */   "MenuItemSt": () => (/* binding */ MenuItemSt),\n/* harmony export */   "MenuLinkSt": () => (/* binding */ MenuLinkSt),\n/* harmony export */   "MenuSt": () => (/* binding */ MenuSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar MenuSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  height: 70px;\\n  background-color: ", ";\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.green;\n});\nvar MenuContainerSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  max-width: 700px;\\n  height: 100%;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  align-items: center;\\n"])));\nvar MenuItemSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));\nvar MenuLinkSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  color: ", ";\\n"])), function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.allColors.black;\n});\n\n//# sourceURL=webpack://test/./client/components/Menu/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Modal/Modal.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Modal/Modal.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/components/Modal/style.tsx");\n\n\n\n\nvar Modal = function Modal(_ref) {\n  var isShown = _ref.isShown,\n      children = _ref.children,\n      hide = _ref.hide,\n      headerText = _ref.headerText;\n\n  if (!isShown) {\n    return null;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.BackdropSt, {\n    onClick: hide\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.WrapperSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.ModalSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    h: 4\n  }, headerText), children)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://test/./client/components/Modal/Modal.tsx?'
        );

        /***/
      },

    /***/ './client/components/Modal/index.ts':
      /*!******************************************!*\
  !*** ./client/components/Modal/index.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./client/components/Modal/Modal.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Modal/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Modal/style.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Modal/style.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "BackdropSt": () => (/* binding */ BackdropSt),\n/* harmony export */   "ModalSt": () => (/* binding */ ModalSt),\n/* harmony export */   "WrapperSt": () => (/* binding */ WrapperSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar WrapperSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  z-index: 700;\\n  max-width: 384px;\\n  height: min-content;\\n  position: fixed;\\n  margin: auto;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n"])));\nvar BackdropSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  background: rgba(0, 0, 0, 0.3);\\n  z-index: 500;\\n"])));\nvar ModalSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  z-index: 100;\\n  background: ", ";\\n  position: relative;\\n  margin: auto;\\n  border-radius: ", ";\\n  min-width: 380px;\\n  min-height: 100px;\\n  padding: 40px;\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.white;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.borderRadius;\n});\n\n//# sourceURL=webpack://test/./client/components/Modal/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/NavTest/NavTest.tsx':
      /*!***********************************************!*\
  !*** ./client/components/NavTest/NavTest.tsx ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/components/NavTest/style.tsx");\n\n\n\n\nvar NavTest = function NavTest() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.NavTestWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/\'\n  }, "home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/about\'\n  }, "about"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/registration\'\n  }, "registration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/profile\'\n  }, "profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/profile-test\'\n  }, "profile-test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/forum\'\n  }, "forum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/records\'\n  }, "records"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/game\'\n  }, "game"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/404\'\n  }, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \'/500\'\n  }, "500"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavTest);\n\n//# sourceURL=webpack://test/./client/components/NavTest/NavTest.tsx?'
        );

        /***/
      },

    /***/ './client/components/NavTest/index.ts':
      /*!********************************************!*\
  !*** ./client/components/NavTest/index.ts ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NavTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavTest */ "./client/components/NavTest/NavTest.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NavTest__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/NavTest/index.ts?'
        );

        /***/
      },

    /***/ './client/components/NavTest/style.tsx':
      /*!*********************************************!*\
  !*** ./client/components/NavTest/style.tsx ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "NavTestWrapper": () => (/* binding */ NavTestWrapper)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar NavTestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n\\tborder: 1px solid black;\\n\\tbackground-color: #eeeeee;\\n\\tpadding: 20px;\\n\\tposition: absolute;\\n\\twidth: 200px;\\n\\tright: 0;\\n\\ttop: 100px;\\n"])));\n\n//# sourceURL=webpack://test/./client/components/NavTest/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Table/Table.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Table/Table.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _TableHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TableHead */ "./client/components/TableHead/index.ts");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ "./client/components/Avatar/index.ts");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./client/components/Table/style.tsx");\n\n\n\n\n\n\n\nvar Table = function Table(_ref) {\n  var colNames = _ref.colNames,\n      content = _ref.content,\n      _ref$isShowBtn = _ref.isShowBtn,\n      isShowBtn = _ref$isShowBtn === void 0 ? true : _ref$isShowBtn;\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  var tableRow = Object.values(content).map(function (obj, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.TableRowSt, {\n      key: i\n    }, Object.keys(obj).filter(function (key) {\n      return key !== \'id\' && key !== \'user_avatar\';\n    }).map(function (key, index) {\n      if (key == \'user_name\') {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.TableColSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.WrapperColSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {\n          backgroundImage: content[i].user_avatar,\n          size: 40\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.BlockUserSt, null, content[i].user_name)));\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.TableColSt, {\n          key: index\n        }, obj[key]);\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.TableColSt, null, isShowBtn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n      onClick: function onClick() {\n        return navigate("post/".concat(content[i].id));\n      }\n    }, "\\u043F\\u0440\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440") : \'\'));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.TableSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableHead__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    colNames: colNames\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_5__.TableBodySt, null, tableRow));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);\n\n//# sourceURL=webpack://test/./client/components/Table/Table.tsx?'
        );

        /***/
      },

    /***/ './client/components/Table/index.ts':
      /*!******************************************!*\
  !*** ./client/components/Table/index.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./client/components/Table/Table.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Table__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Table/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Table/style.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Table/style.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "BlockUserSt": () => (/* binding */ BlockUserSt),\n/* harmony export */   "TableBodySt": () => (/* binding */ TableBodySt),\n/* harmony export */   "TableColSt": () => (/* binding */ TableColSt),\n/* harmony export */   "TableRowSt": () => (/* binding */ TableRowSt),\n/* harmony export */   "TableSt": () => (/* binding */ TableSt),\n/* harmony export */   "WrapperColSt": () => (/* binding */ WrapperColSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar TableSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: 100%;\\n  border-collapse: collapse;\\n  margin-bottom: 40px;\\n"])));\nvar TableBodySt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().tbody(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));\nvar TableRowSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().tr(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  cursor: pointer;\\n  transition: ", " all;\\n  &:nth-child(even) {\\n    background: ", ";\\n  }\\n  &:nth-child(odd) {\\n    background: ", ";\\n  }\\n  &:hover {\\n    background: ", ";\\n  }\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.skillsStartAnim;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.allColors.grey_light;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.allColors.white;\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.allColors.purple_light;\n});\nvar TableColSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\\n  padding: 5px 10px;\\n  width: 150px;\\n"])));\nvar WrapperColSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\\n  display: flex;\\n  align-items: center;\\n"])));\nvar BlockUserSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\\n  margin-left: 20px;\\n"])));\n\n//# sourceURL=webpack://test/./client/components/Table/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/TableHead/TableHead.tsx':
      /*!***************************************************!*\
  !*** ./client/components/TableHead/TableHead.tsx ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/components/TableHead/style.tsx");\n\n\n\nvar TableHead = function TableHead(_ref) {\n  var colNames = _ref.colNames;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.TableHeadSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.TableRowSt, null, colNames.map(function (headerItem, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.TableColSt, {\n      key: i\n    }, headerItem);\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHead);\n\n//# sourceURL=webpack://test/./client/components/TableHead/TableHead.tsx?'
        );

        /***/
      },

    /***/ './client/components/TableHead/index.ts':
      /*!**********************************************!*\
  !*** ./client/components/TableHead/index.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TableHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableHead */ "./client/components/TableHead/TableHead.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TableHead__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/TableHead/index.ts?'
        );

        /***/
      },

    /***/ './client/components/TableHead/style.tsx':
      /*!***********************************************!*\
  !*** ./client/components/TableHead/style.tsx ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "TableColSt": () => (/* binding */ TableColSt),\n/* harmony export */   "TableHeadSt": () => (/* binding */ TableHeadSt),\n/* harmony export */   "TableRowSt": () => (/* binding */ TableRowSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar TableHeadSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().thead(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  border: none;\\n  border-bottom: 1px solid ", ";\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.purple_light;\n});\nvar TableRowSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().tr(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  padding: 5px 10px;\\n"])));\nvar TableColSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  padding: 5px 10px;\\n  width: 150px;\\n"])));\n\n//# sourceURL=webpack://test/./client/components/TableHead/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Textarea/Textarea.tsx':
      /*!*************************************************!*\
  !*** ./client/components/Textarea/Textarea.tsx ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/components/Textarea/style.tsx");\nvar _excluded = ["rows"];\n\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nvar Textarea = function Textarea(_ref) {\n  var _ref$rows = _ref.rows,\n      rows = _ref$rows === void 0 ? 10 : _ref$rows,\n      textareaProps = _objectWithoutProperties(_ref, _excluded);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.TextareaSt, _extends({\n    rows: rows\n  }, textareaProps));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);\n\n//# sourceURL=webpack://test/./client/components/Textarea/Textarea.tsx?'
        );

        /***/
      },

    /***/ './client/components/Textarea/index.ts':
      /*!*********************************************!*\
  !*** ./client/components/Textarea/index.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textarea */ "./client/components/Textarea/Textarea.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Textarea__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Textarea/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Textarea/style.tsx':
      /*!**********************************************!*\
  !*** ./client/components/Textarea/style.tsx ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "TextareaSt": () => (/* binding */ TextareaSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar TextareaSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: 100%;\\n  resize: vertical;\\n  padding: 12px;\\n  border-radius: ", ";\\n  margin-bottom: 24px;\\n  border: 1px solid ", ";\\n  font-size: 12px;\\n  font-weight: ", ";\\n  min-height: 40px;\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.borderRadius;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.colors.inputBorder;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.semi_bold;\n});\n\n//# sourceURL=webpack://test/./client/components/Textarea/style.tsx?'
        );

        /***/
      },

    /***/ './client/components/Title/Title.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Title/Title.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./client/components/Title/style.tsx");\n\n\n/**\n * В компонент передаются пропсы:\n * @param h - число, от 1 до 4, определяющее уровень заголовка\n */\n\nvar Title = function Title(_ref) {\n  var h = _ref.h,\n      children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, h === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.H1St, null, children), h === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.H2St, null, children), h === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.H3St, null, children), h === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.H4St, null, children));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://test/./client/components/Title/Title.tsx?'
        );

        /***/
      },

    /***/ './client/components/Title/index.ts':
      /*!******************************************!*\
  !*** ./client/components/Title/index.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ "./client/components/Title/Title.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Title__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/components/Title/index.ts?'
        );

        /***/
      },

    /***/ './client/components/Title/style.tsx':
      /*!*******************************************!*\
  !*** ./client/components/Title/style.tsx ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "H1St": () => (/* binding */ H1St),\n/* harmony export */   "H2St": () => (/* binding */ H2St),\n/* harmony export */   "H3St": () => (/* binding */ H3St),\n/* harmony export */   "H4St": () => (/* binding */ H4St)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar titleSt = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  text-align: center;\\n  text-transform: uppercase;\\n  margin-bottom: 24px;\\n  color: ", ";\\n  font-weight: ", ";\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.font;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.fonts.black;\n});\nvar H1St = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  ", "\\n"])), titleSt);\nvar H2St = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  ", "\\n"])), titleSt);\nvar H3St = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\\n  ", "\\n"])), titleSt);\nvar H4St = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\\n  ", "\\n"])), titleSt);\n\n//# sourceURL=webpack://test/./client/components/Title/style.tsx?'
        );

        /***/
      },

    /***/ './client/hooks/useToggle.tsx':
      /*!************************************!*\
  !*** ./client/hooks/useToggle.tsx ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "useToggle": () => (/* binding */ useToggle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar useToggle = function useToggle(initialValue) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var toggleValue = function toggleValue() {\n    return setValue(!value);\n  };\n\n  return [value, toggleValue];\n};\n\n//# sourceURL=webpack://test/./client/hooks/useToggle.tsx?'
        );

        /***/
      },

    /***/ './client/layouts/Page.tsx':
      /*!*********************************!*\
  !*** ./client/layouts/Page.tsx ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/home */ "./client/pages/home/index.ts");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/about */ "./client/pages/about/index.ts");\n/* harmony import */ var _pages_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/registration */ "./client/pages/registration/index.ts");\n/* harmony import */ var _pages_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/profile */ "./client/pages/profile/index.ts");\n/* harmony import */ var _pages_forum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/forum */ "./client/pages/forum/index.ts");\n/* harmony import */ var _pages_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/post */ "./client/pages/post/index.ts");\n/* harmony import */ var _pages_records__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/records */ "./client/pages/records/index.ts");\n/* harmony import */ var _pages_game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/game */ "./client/pages/game/index.ts");\n/* harmony import */ var _pages_404__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/404 */ "./client/pages/404/index.ts");\n/* harmony import */ var _pages_500__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/500 */ "./client/pages/500/index.ts");\n/* harmony import */ var _components_NavTest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/NavTest */ "./client/components/NavTest/index.ts");\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/const */ "./client/services/const.tsx");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/style */ "./client/styles/style.tsx");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/variables */ "./client/styles/variables.tsx");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/user/actions */ "./client/store/user/actions.ts");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Menu */ "./client/components/Menu/index.ts");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // page\n\n\n\n\n\n\n\n\n\n\n // components\n\n // constants\n\n // style\n\n\n\n\n\n\n\n\nvar ProtectedStartRouteProps = function ProtectedStartRouteProps(_ref) {\n  var user = _ref.user,\n      _ref$redirectPath = _ref.redirectPath,\n      redirectPath = _ref$redirectPath === void 0 ? _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.PROFILE : _ref$redirectPath;\n\n  if (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {\n      to: redirectPath,\n      replace: true\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null);\n};\n\nvar ProtectedRoute = function ProtectedRoute(_ref2) {\n  var user = _ref2.user,\n      _ref2$redirectPath = _ref2.redirectPath,\n      redirectPath = _ref2$redirectPath === void 0 ? _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.ROOT : _ref2$redirectPath;\n\n  if (!user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {\n      to: redirectPath,\n      replace: true\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null);\n};\n\nvar Page = function Page() {\n  // const user: boolean = localStorage.getItem(\'user\') === \'true\';\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (user) {\n      dispatch((0,_store_user_actions__WEBPACK_IMPORTED_MODULE_18__.getProfile)());\n    }\n  }, [user]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (typeof window !== "undefined" && !user) {\n      setUser(localStorage.getItem(\'user\') === \'true\');\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_15__.ThemeProvider, {\n    theme: _styles_variables__WEBPACK_IMPORTED_MODULE_16__.baseTheme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_style__WEBPACK_IMPORTED_MODULE_14__.GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavTest__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProtectedStartRouteProps, {\n      user: user\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.ROOT,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_home__WEBPACK_IMPORTED_MODULE_2__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.REGISTRATION,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_registration__WEBPACK_IMPORTED_MODULE_4__["default"], null)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProtectedRoute, {\n      user: user\n    }))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.PROFILE,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_profile__WEBPACK_IMPORTED_MODULE_5__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.FORUM,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_forum__WEBPACK_IMPORTED_MODULE_6__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.ABOUT,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_about__WEBPACK_IMPORTED_MODULE_3__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: "".concat(_services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.FORUM, "/post/:id"),\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_post__WEBPACK_IMPORTED_MODULE_7__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.RECORDS,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_records__WEBPACK_IMPORTED_MODULE_8__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: _services_const__WEBPACK_IMPORTED_MODULE_13__.AppRoute.GAME,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_game__WEBPACK_IMPORTED_MODULE_9__["default"], null)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \'*\',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_404__WEBPACK_IMPORTED_MODULE_10__["default"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \'/500\',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_500__WEBPACK_IMPORTED_MODULE_11__["default"], null)\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://test/./client/layouts/Page.tsx?'
        );

        /***/
      },

    /***/ './client/layouts/index.ts':
      /*!*********************************!*\
  !*** ./client/layouts/index.ts ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./client/layouts/Page.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Page__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/layouts/index.ts?'
        );

        /***/
      },

    /***/ './client/mocks/data.tsx':
      /*!*******************************!*\
  !*** ./client/mocks/data.tsx ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"answersList\": () => (/* binding */ answersList),\n/* harmony export */   \"forumList\": () => (/* binding */ forumList)\n/* harmony export */ });\nvar forumList = [{\n  id: 1,\n  name: 'Правила форума',\n  user_id: 32,\n  user_name: 'Семен',\n  answer_count: 55,\n  content: 'this is text content'\n}, {\n  id: 2,\n  name: 'Новые игры',\n  user_id: 23,\n  user_name: 'Петр',\n  answer_count: 6,\n  content: 'this is text content'\n}];\nvar answersList = [{\n  id: 123,\n  user_id: 231,\n  time: '2020-01-02T14:22:22.000Z',\n  content: 'this is message content'\n}, {\n  id: 124,\n  user_id: 232,\n  time: '2020-01-02T14:22:22.000Z',\n  content: 'this is message content'\n}, {\n  id: 122,\n  user_id: 250,\n  time: '2020-01-02T14:22:22.000Z',\n  content: 'this is message content'\n}];\n\n//# sourceURL=webpack://test/./client/mocks/data.tsx?"
        );

        /***/
      },

    /***/ './client/pages/404/NotFound.tsx':
      /*!***************************************!*\
  !*** ./client/pages/404/NotFound.tsx ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ErrorPageTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ErrorPageTemplate */ "./client/components/ErrorPageTemplate/index.ts");\n\n\n\nvar NotFound = function NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ErrorPageTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "404",\n    subtitle: "\\u0443\\u043F\\u0441, \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430"\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://test/./client/pages/404/NotFound.tsx?'
        );

        /***/
      },

    /***/ './client/pages/404/index.ts':
      /*!***********************************!*\
  !*** ./client/pages/404/index.ts ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound */ "./client/pages/404/NotFound.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/404/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/500/ServerError.tsx':
      /*!******************************************!*\
  !*** ./client/pages/500/ServerError.tsx ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ErrorPageTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ErrorPageTemplate */ "./client/components/ErrorPageTemplate/index.ts");\n\n\n\nvar ServerError = function ServerError() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ErrorPageTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "500",\n    subtitle: "\\u0443\\u043F\\u0441, \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0430"\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerError);\n\n//# sourceURL=webpack://test/./client/pages/500/ServerError.tsx?'
        );

        /***/
      },

    /***/ './client/pages/500/index.ts':
      /*!***********************************!*\
  !*** ./client/pages/500/index.ts ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ServerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerError */ "./client/pages/500/ServerError.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ServerError__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/500/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/about/About.tsx':
      /*!**************************************!*\
  !*** ./client/pages/about/About.tsx ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar About = function About() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Test page");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://test/./client/pages/about/About.tsx?'
        );

        /***/
      },

    /***/ './client/pages/about/index.ts':
      /*!*************************************!*\
  !*** ./client/pages/about/index.ts ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./client/pages/about/About.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_About__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/about/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/forum/Forum.tsx':
      /*!**************************************!*\
  !*** ./client/pages/forum/Forum.tsx ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _components_CreatePostModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CreatePostModal */ "./client/components/CreatePostModal/index.ts");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Table */ "./client/components/Table/index.ts");\n/* harmony import */ var _mocks_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mocks/data */ "./client/mocks/data.tsx");\n/* harmony import */ var _services_forum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/forum */ "./client/services/forum.tsx");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useToggle */ "./client/hooks/useToggle.tsx");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./client/pages/forum/style.tsx");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar adaptPosts = _mocks_data__WEBPACK_IMPORTED_MODULE_4__.forumList.map(_services_forum__WEBPACK_IMPORTED_MODULE_5__.filterData);\n\nvar Forum = function Forum() {\n  var _useToggle = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__.useToggle)(false),\n      _useToggle2 = _slicedToArray(_useToggle, 2),\n      isShown = _useToggle2[0],\n      toggleVisible = _useToggle2[1];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(adaptPosts),\n      _useState2 = _slicedToArray(_useState, 2),\n      postList = _useState2[0],\n      setPostList = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: \'\',\n    content: \'\'\n  }),\n      _useState4 = _slicedToArray(_useState3, 2),\n      post = _useState4[0],\n      setPost = _useState4[1];\n\n  var colNames = [\'Название\', \'Автор\', \'Ответы\', \'\'];\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setPost(function (prevPost) {\n      return _objectSpread(_objectSpread({}, prevPost), {}, _defineProperty({}, name, value));\n    });\n  };\n\n  var handleAdd = function handleAdd() {\n    var newPost = {\n      id: postList.length + 1,\n      content: post.content,\n      name: post.name,\n      user_id: 33,\n      user_name: \'Семен\',\n      user_avatar: \'https://ya-praktikum.tech/api/v2/resources/2722d38f-5f23-4fec-a538-5743e75f81ee/b41f82c7-9204-44b2-8fe1-b597493f0371_ava.png\',\n      answer_count: 0\n    };\n    var adaptPosts = [].concat(_toConsumableArray(postList), [newPost]).map(function (post) {\n      return (0,_services_forum__WEBPACK_IMPORTED_MODULE_5__.filterData)(post);\n    });\n    setPostList(adaptPosts);\n    toggleVisible();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_7__.WrapperSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    colNames: colNames,\n    content: postList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_7__.ButtonWrapperSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    onClick: toggleVisible\n  }, "\\u0441\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u043F\\u043E\\u0441\\u0442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CreatePostModal__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    isShown: isShown,\n    toggleVisible: toggleVisible,\n    headerText: "\\u0421\\u043E\\u0437\\u0434\\u0430\\u043D\\u0438\\u0435 \\u043F\\u043E\\u0441\\u0442\\u0430",\n    handleAdd: handleAdd,\n    handleChange: handleChange\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forum);\n\n//# sourceURL=webpack://test/./client/pages/forum/Forum.tsx?'
        );

        /***/
      },

    /***/ './client/pages/forum/index.ts':
      /*!*************************************!*\
  !*** ./client/pages/forum/index.ts ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forum */ "./client/pages/forum/Forum.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Forum__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/forum/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/forum/style.tsx':
      /*!**************************************!*\
  !*** ./client/pages/forum/style.tsx ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ButtonWrapperSt": () => (/* binding */ ButtonWrapperSt),\n/* harmony export */   "WrapperSt": () => (/* binding */ WrapperSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar WrapperSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: 700px;\\n  margin: 40px auto;\\n  background: #fff;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 500px;\\n"])));\nvar ButtonWrapperSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n  margin-top: auto;\\n  margin-bottom: 40px;\\n"])));\n\n//# sourceURL=webpack://test/./client/pages/forum/style.tsx?'
        );

        /***/
      },

    /***/ './client/pages/game/Game.tsx':
      /*!************************************!*\
  !*** ./client/pages/game/Game.tsx ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _utils_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/game */ "./client/pages/game/utils/game.ts");\n/* harmony import */ var _services_fullscreen_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fullscreen-api */ "./client/services/fullscreen-api.tsx");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./client/pages/game/style.tsx");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar GAME_HEIGHT = 600;\nvar GAME_WIDTH = 800;\n\nvar GamePage = function GamePage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      toggler = _useState2[0],\n      setToggler = _useState2[1];\n\n  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var game = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      gameScore = _useState4[0],\n      setGameScore = _useState4[1];\n\n  var gameScoreHandler = function gameScoreHandler(score) {\n    return setGameScore(score);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (canvasRef.current) {\n      var _game$current;\n\n      game.current = new _utils_game__WEBPACK_IMPORTED_MODULE_2__.Game({\n        canvasElement: canvasRef.current,\n        gameWidth: GAME_WIDTH,\n        gameHeight: GAME_HEIGHT,\n        gameScoreHandler: gameScoreHandler\n      });\n      (_game$current = game.current) === null || _game$current === void 0 ? void 0 : _game$current.drawInitialScreen();\n    }\n  }, []);\n\n  var handleToggleFullscreen = function handleToggleFullscreen() {\n    (0,_services_fullscreen_api__WEBPACK_IMPORTED_MODULE_3__.toggleFullscreen)();\n    setToggler(!toggler);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (gameScore > 0) {\n      console.log(\'total game score\', gameScore);\n    }\n  }, [gameScore]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.WrapperSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    id: "toggler",\n    onClick: handleToggleFullscreen\n  }, toggler ? \'toggle off\' : \'toggle on\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {\n    ref: canvasRef,\n    width: 800,\n    height: 600,\n    style: {\n      background: \'#663399\'\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamePage);\n\n//# sourceURL=webpack://test/./client/pages/game/Game.tsx?'
        );

        /***/
      },

    /***/ './client/pages/game/index.ts':
      /*!************************************!*\
  !*** ./client/pages/game/index.ts ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./client/pages/game/Game.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Game__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/game/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/style.tsx':
      /*!*************************************!*\
  !*** ./client/pages/game/style.tsx ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "WrapperSt": () => (/* binding */ WrapperSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar WrapperSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: 800px;\\n  height: min-content;\\n  position: absolute;\\n  margin: auto;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n"])));\n\n//# sourceURL=webpack://test/./client/pages/game/style.tsx?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/CollisionManager.ts':
      /*!*****************************************************!*\
  !*** ./client/pages/game/utils/CollisionManager.ts ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "CollisionManager": () => (/* binding */ CollisionManager)\n/* harmony export */ });\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _detectCollision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detectCollision */ "./client/pages/game/utils/detectCollision.ts");\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar CollisionManager = /*#__PURE__*/function (_EventEmitter) {\n  _inherits(CollisionManager, _EventEmitter);\n\n  var _super = _createSuper(CollisionManager);\n\n  function CollisionManager(game) {\n    var _this;\n\n    _classCallCheck(this, CollisionManager);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), "watchedObjects", []);\n\n    game.on(\'updated\', _this.calculate, _assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CollisionManager, [{\n    key: "watch",\n    value: function watch(object1, object2) {\n      this.watchedObjects.push([object1, object2]);\n    }\n  }, {\n    key: "calculate",\n    value: function calculate() {\n      this.watchedObjects = this.watchedObjects.filter(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            object1 = _ref2[0],\n            object2 = _ref2[1];\n\n        if (object1.isMarkedForDeletion || object2.isMarkedForDeletion) {\n          return false;\n        }\n\n        if ((0,_detectCollision__WEBPACK_IMPORTED_MODULE_1__.detectCollision)(object1, object2)) {\n          object1.emit("collate:".concat(object2.name), object2);\n          object2.emit("collate:".concat(object1.name), object1);\n        }\n\n        return true;\n      });\n    }\n  }]);\n\n  return CollisionManager;\n}((eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()));\n\n//# sourceURL=webpack://test/./client/pages/game/utils/CollisionManager.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/InputManager.ts':
      /*!*************************************************!*\
  !*** ./client/pages/game/utils/InputManager.ts ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "InputManager": () => (/* binding */ InputManager)\n/* harmony export */ });\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar InputManager = /*#__PURE__*/function (_EventEmitter) {\n  _inherits(InputManager, _EventEmitter);\n\n  var _super = _createSuper(InputManager);\n\n  function InputManager(game) {\n    var _this;\n\n    _classCallCheck(this, InputManager);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), "watchedObjects", []);\n\n    _this.game = game;\n\n    _this.on(\'keydown\', _this.watchForInputEvents, _assertThisInitialized(_this));\n\n    _this.on(\'keyup\', _this.watchForInputEvents, _assertThisInitialized(_this));\n\n    return _this;\n  }\n\n  _createClass(InputManager, [{\n    key: "watch",\n    value: function watch(object) {\n      this.watchedObjects.push(object);\n    }\n  }, {\n    key: "watchForInputEvents",\n    value: function watchForInputEvents(event) {\n      this.watchedObjects.forEach(function (object) {\n        object.emit("".concat(object.name, ":").concat(event));\n      });\n      this.game.emit(event);\n    }\n  }]);\n\n  return InputManager;\n}((eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()));\n\n//# sourceURL=webpack://test/./client/pages/game/utils/InputManager.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/ball.ts':
      /*!*****************************************!*\
  !*** ./client/pages/game/utils/ball.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Ball": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _assets_img_ball_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/img/ball.png */ "./client/assets/img/ball.png");\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObject */ "./client/pages/game/utils/gameObject.ts");\n/* harmony import */ var _detectCollisionWithPaddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectCollisionWithPaddle */ "./client/pages/game/utils/detectCollisionWithPaddle.ts");\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Ball = /*#__PURE__*/function (_GameObject) {\n  _inherits(Ball, _GameObject);\n\n  var _super = _createSuper(Ball);\n\n  function Ball(game) {\n    var _this;\n\n    _classCallCheck(this, Ball);\n\n    var gameWidth = game.gameWidth,\n        gameHeight = game.gameHeight,\n        paddle = game.paddle;\n    _this = _super.call(this, {\n      gameWidth: gameWidth,\n      gameHeight: gameHeight,\n      height: 16,\n      width: 16,\n      position: {\n        x: 10,\n        y: 400\n      },\n      name: \'ball\'\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "speed", {\n      x: 5,\n      y: -7\n    });\n\n    _this.image = _this.createImage();\n    _this.paddle = paddle;\n    _this.game = game;\n\n    _this.on(\'collate:paddle\', _this.onCollateWithPaddle);\n\n    _this.on(\'collate:brick\', _this.onCollateWithBrick);\n\n    _this.on(\'reset\', _this.reset);\n\n    _this.reset();\n\n    return _this;\n  }\n\n  _createClass(Ball, [{\n    key: "reset",\n    value: function reset() {\n      this.speed = {\n        x: 4,\n        y: -4\n      };\n      this.position = {\n        x: 10,\n        y: 400\n      };\n    }\n  }, {\n    key: "onCollateWithPaddle",\n    value: function onCollateWithPaddle(paddle) {\n      console.log("".concat(this.name, " collated with ").concat(paddle.name));\n      var hitbox = (0,_detectCollisionWithPaddle__WEBPACK_IMPORTED_MODULE_2__.detectCollisionPaddle)(this, paddle);\n      /*\n      detectCollisionPaddle - делить каретку на 6 почти равные части\n          И возвращает порядковый номер части на который произошел столкновения с мячом\n          А case и внизу изменяет скорость и траекторию мяча исходя на каком части произошел столкновения.\n          Это позволяет обеспечить порулить полетом мяча тем самым направить мяча в конкретный участок кирпичной стены.\n           0 - Левый край который резко увеличивает скорость мяча направляя в левую сторону\n          1, 2 - всегда направляет в левую сторону, но разной скоростью исходя с какой стороны летит мяч\n          3, 4 - всегда направляет в правую сторону, но разной скоростью исходя с какой стороны летит мяч\n          5 - Правый край который резко увеличивает скорость мяча направляя в левую сторону\n       */\n\n      switch (hitbox) {\n        case 0:\n          this.speed.x = -9;\n          this.speed.y = -this.speed.y;\n          this.position.y = paddle.position.y - this.height;\n          break;\n\n        case 1:\n          if (this.speed.x < 0) {\n            this.speed.x = -6;\n          } else {\n            this.speed.x += -6;\n          }\n\n          this.speed.y = -this.speed.y;\n          this.position.y = paddle.position.y - this.height;\n          break;\n\n        case 2:\n          if (this.speed.x < 0) {\n            this.speed.x = -4;\n          } else {\n            this.speed.x += -4;\n          }\n\n          this.speed.y = -this.speed.y;\n          this.position.y = paddle.position.y - this.height;\n          break;\n\n        case 3:\n          if (this.speed.x > 0) {\n            this.speed.x = 4;\n          } else {\n            this.speed.x += 4;\n          }\n\n          this.speed.y = -this.speed.y;\n          this.position.y = paddle.position.y - this.height;\n          break;\n\n        case 4:\n          if (this.speed.x > 0) {\n            this.speed.x = 6;\n          } else {\n            this.speed.x += 6;\n          }\n\n          this.speed.y = -this.speed.y;\n          this.position.y = paddle.position.y - this.height;\n          break;\n\n        case 5:\n          this.speed.x = 9;\n          this.speed.y = -this.speed.y;\n          this.position.y = paddle.position.y - this.height;\n          break;\n\n        default:\n          return null;\n      }\n    }\n  }, {\n    key: "onCollateWithBrick",\n    value: function onCollateWithBrick(gameObject) {\n      console.log("".concat(this.name, " collated with ").concat(gameObject.name));\n      this.game.emit(\'on_ball_collate\');\n      this.speed.y = -this.speed.y;\n    }\n  }, {\n    key: "createImage",\n    value: function createImage() {\n      var ballImage = new Image();\n      ballImage.width = 10;\n      ballImage.height = 10;\n      ballImage.src = _assets_img_ball_png__WEBPACK_IMPORTED_MODULE_0__;\n      return ballImage;\n    }\n  }, {\n    key: "draw",\n    value: function draw(ctx) {\n      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);\n      this.emit(\'rendered\', this);\n    }\n  }, {\n    key: "update",\n    value: function update() {\n      this.position.x += this.speed.x;\n      this.position.y += this.speed.y; //collision detection on x axis\n\n      if (this.position.x < 0 || this.position.x + this.width > this.gameWidth) {\n        this.speed.x = -this.speed.x;\n      } //collision detection on top\n\n\n      if (this.position.y < 0) {\n        this.speed.y = -this.speed.y;\n      } //collision detection on bottom\n\n\n      if (this.position.y + this.height > this.gameHeight) {\n        this.game.emit(\'hit_bottom\');\n        this.emit(\'reset\');\n      }\n\n      this.emit(\'updated\', this);\n    }\n  }]);\n\n  return Ball;\n}(_gameObject__WEBPACK_IMPORTED_MODULE_1__.GameObject);\n\n//# sourceURL=webpack://test/./client/pages/game/utils/ball.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/brick.ts':
      /*!******************************************!*\
  !*** ./client/pages/game/utils/brick.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Brick": () => (/* binding */ Brick)\n/* harmony export */ });\n/* harmony import */ var _assets_img_brick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/img/brick.png */ "./client/assets/img/brick.png");\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObject */ "./client/pages/game/utils/gameObject.ts");\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Brick = /*#__PURE__*/function (_GameObject) {\n  _inherits(Brick, _GameObject);\n\n  var _super = _createSuper(Brick);\n\n  function Brick(_ref, position) {\n    var _this;\n\n    var gameHeight = _ref.gameHeight,\n        gameWidth = _ref.gameWidth;\n\n    _classCallCheck(this, Brick);\n\n    _this = _super.call(this, {\n      width: 80,\n      height: 24,\n      position: position,\n      gameHeight: gameHeight,\n      gameWidth: gameWidth,\n      name: \'brick\'\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "isMarkedForDeletion", false);\n\n    _this.image = _this.createImage();\n\n    _this.on(\'collate:ball\', _this.destroy);\n\n    return _this;\n  }\n\n  _createClass(Brick, [{\n    key: "createImage",\n    value: function createImage() {\n      var brickImage = new Image();\n      brickImage.width = 10;\n      brickImage.height = 10;\n      brickImage.src = _assets_img_brick_png__WEBPACK_IMPORTED_MODULE_0__;\n      return brickImage;\n    } // eslint-disable-next-line @typescript-eslint/no-empty-function\n\n  }, {\n    key: "update",\n    value: function update() {// if (detectCollision(this.ball, this)) {\n      // this.ball.speed.y = -this.ball.speed.y;\n      // this.isMarkedForDeletion = true;\n      // }\n      // this.destroy()\n      //TODO: REMOVE THIS METHOD. NOW IT IS CAUSING TYPE ERROR WHEN REMOVE THIS METHOD\n    }\n  }, {\n    key: "destroy",\n    value: function destroy(gameObject) {\n      console.log("brick collated with ".concat(gameObject.name));\n      this.isMarkedForDeletion = true;\n    }\n  }, {\n    key: "draw",\n    value: function draw(ctx) {\n      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);\n    }\n  }]);\n\n  return Brick;\n}(_gameObject__WEBPACK_IMPORTED_MODULE_1__.GameObject);\n\n//# sourceURL=webpack://test/./client/pages/game/utils/brick.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/detectCollision.ts':
      /*!****************************************************!*\
  !*** ./client/pages/game/utils/detectCollision.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "detectCollision": () => (/* binding */ detectCollision)\n/* harmony export */ });\nfunction detectCollision(object1, object2) {\n  var topOfTheObject2 = object2.position.y;\n  var bottomOfTheObject2 = object2.position.y + object2.height;\n  var bottomOfObject1 = object1.position.y + object1.height;\n  var topOfTheObject1 = object1.position.y;\n  var leftOfTheObject2 = object2.position.x;\n  var rightOfTheObject2 = object2.position.x + object2.width;\n  return bottomOfObject1 >= topOfTheObject2 && topOfTheObject1 <= bottomOfTheObject2 && object1.position.x >= leftOfTheObject2 && object1.position.x + object1.width <= rightOfTheObject2;\n}\n\n//# sourceURL=webpack://test/./client/pages/game/utils/detectCollision.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/detectCollisionWithPaddle.ts':
      /*!**************************************************************!*\
  !*** ./client/pages/game/utils/detectCollisionWithPaddle.ts ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "detectCollisionPaddle": () => (/* binding */ detectCollisionPaddle)\n/* harmony export */ });\nfunction detectCollisionPaddle(ball, paddle) {\n  var bottomOfBall = ball.position.y + ball.width;\n  var leftOfBall = ball.position.x;\n  var hitPosition = 0;\n  var topOfObject = paddle.position.y;\n  var leftSideOfObject = paddle.position.x;\n  var rightSideOfObject = paddle.position.x + paddle.width;\n\n  if (bottomOfBall >= topOfObject && ball.position.x + ball.width >= leftSideOfObject && ball.position.x <= rightSideOfObject) {\n    hitPosition = leftOfBall - leftSideOfObject;\n\n    if (hitPosition <= 20) {\n      return 0;\n    } else if (hitPosition > 20 && hitPosition <= 50) {\n      return 1;\n    } else if (hitPosition > 50 && hitPosition <= 75) {\n      return 2;\n    } else if (hitPosition > 75 && hitPosition <= 100) {\n      return 3;\n    } else if (hitPosition > 100 && hitPosition <= 130) {\n      return 4;\n    } else if (hitPosition >= 130) {\n      return 5;\n    }\n  }\n\n  return 0;\n}\n\n//# sourceURL=webpack://test/./client/pages/game/utils/detectCollisionWithPaddle.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/game.ts':
      /*!*****************************************!*\
  !*** ./client/pages/game/utils/game.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Game": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ "./client/pages/game/utils/paddle.ts");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./client/pages/game/utils/input.ts");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball */ "./client/pages/game/utils/ball.ts");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./client/pages/game/utils/levels.ts");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CollisionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CollisionManager */ "./client/pages/game/utils/CollisionManager.ts");\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar level1 = [[0, 0, 0, 0, 1, 1, 1, 0, 0, 0]];\nvar level2 = [[0, 1, 1, 1, 1, 1, 1, 1, 0, 0]];\nvar level3 = [[0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]];\nvar GAME_STATE = {\n  PAUSED: 0,\n  RUNNING: 1,\n  MENU: 2,\n  GAMEOVER: 3,\n  NEWLEVEL: 4,\n  YOUWIN: 5\n};\nvar GameState;\n\n(function (GameState) {\n  GameState[GameState["PAUSED"] = 0] = "PAUSED";\n  GameState[GameState["RUNNING"] = 1] = "RUNNING";\n  GameState[GameState["MENU"] = 2] = "MENU";\n  GameState[GameState["GAMEOVER"] = 3] = "GAMEOVER";\n  GameState[GameState["NEWLEVEL"] = 4] = "NEWLEVEL";\n  GameState[GameState["YOUWIN"] = 5] = "YOUWIN";\n})(GameState || (GameState = {}));\n\nvar requestId;\nvar Game = /*#__PURE__*/function (_EventEmitter) {\n  _inherits(Game, _EventEmitter);\n\n  var _super = _createSuper(Game);\n\n  function Game(_ref) {\n    var _this;\n\n    var canvasElement = _ref.canvasElement,\n        gameWidth = _ref.gameWidth,\n        gameHeight = _ref.gameHeight,\n        gameScoreHandler = _ref.gameScoreHandler;\n\n    _classCallCheck(this, Game);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), "currentLevel", 0);\n\n    _defineProperty(_assertThisInitialized(_this), "score", 0);\n\n    _defineProperty(_assertThisInitialized(_this), "levels", [level1, level2, level3]);\n\n    _this.gameWidth = gameWidth;\n    _this.gameHeight = gameHeight;\n    _this.gameState = GAME_STATE.MENU;\n    _this.gameScoreHandler = gameScoreHandler;\n    _this.lives = 3;\n    _this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__.Paddle(_assertThisInitialized(_this));\n    _this.ball = new _ball__WEBPACK_IMPORTED_MODULE_2__.Ball(_assertThisInitialized(_this));\n    _this.collManager = new _CollisionManager__WEBPACK_IMPORTED_MODULE_5__.CollisionManager(_assertThisInitialized(_this));\n    _this.gameObjects = [_this.ball, _this.paddle];\n    _this.bricks = (0,_levels__WEBPACK_IMPORTED_MODULE_3__.buildLevels)(_assertThisInitialized(_this), level1); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n\n    _this.ctx = canvasElement.getContext(\'2d\');\n    _this.animate = _this.animate.bind(_assertThisInitialized(_this));\n\n    _this.collManager.watch(_this.ball, _this.paddle);\n\n    _this.bricks.forEach(function (brick) {\n      return _this.collManager.watch(_this.ball, brick);\n    });\n\n    _this.on(\'Escape\', _this.togglePause);\n\n    _this.on(\'Space\', _this.start);\n\n    _this.on(\'Enter\', _this.restart);\n\n    _this.on(\'hit_bottom\', _this.decreaseLives);\n\n    _this.on(\'on_ball_collate\', _this.increaseScore);\n\n    new _input__WEBPACK_IMPORTED_MODULE_1__.InputHandler(_this.paddle, _assertThisInitialized(_this));\n\n    _this.drawScore(_this.ctx);\n\n    _this.drawLevel(_this.ctx);\n\n    return _this;\n  }\n\n  _createClass(Game, [{\n    key: "init",\n    value: function init() {\n      var _this2 = this;\n\n      this.lives = 3;\n      this.currentLevel = 0;\n      this.score = 0;\n      this.gameObjects = [this.ball, this.paddle];\n      this.bricks = (0,_levels__WEBPACK_IMPORTED_MODULE_3__.buildLevels)(this, this.levels[this.currentLevel]);\n      this.bricks.forEach(function (brick) {\n        return _this2.collManager.watch(_this2.ball, brick);\n      });\n      this.ball.emit(\'reset\');\n      this.gameState = GAME_STATE.RUNNING;\n    }\n  }, {\n    key: "start",\n    value: function start() {\n      if (this.gameState !== GAME_STATE.MENU && this.gameState !== GAME_STATE.NEWLEVEL) {\n        return;\n      }\n\n      this.init();\n      this.animate();\n    }\n  }, {\n    key: "restart",\n    value: function restart() {\n      if (this.gameState === GAME_STATE.GAMEOVER || this.gameState === GAME_STATE.YOUWIN) {\n        this.init();\n        this.animate();\n      }\n    }\n  }, {\n    key: "increaseScore",\n    value: function increaseScore() {\n      this.score += 100;\n    }\n  }, {\n    key: "drawInitialScreen",\n    value: function drawInitialScreen() {\n      this.draw(this.ctx);\n    }\n  }, {\n    key: "animate",\n    value: function animate() {\n      var _this3 = this;\n\n      requestId = requestAnimationFrame(this.animate);\n\n      if (this.gameState === GAME_STATE.NEWLEVEL) {\n        this.bricks = (0,_levels__WEBPACK_IMPORTED_MODULE_3__.buildLevels)(this, this.levels[this.currentLevel]);\n        this.bricks.forEach(function (brick) {\n          return _this3.collManager.watch(_this3.ball, brick);\n        });\n        this.ball.emit(\'reset\');\n        this.gameState = GAME_STATE.RUNNING;\n      }\n\n      if (this !== null && this !== void 0 && this.ctx) {\n        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);\n        this.update();\n        this.draw(this.ctx);\n      }\n    }\n  }, {\n    key: "update",\n    value: function update() {\n      if (this.gameState === GAME_STATE.PAUSED) {\n        return;\n      }\n\n      if (this.lives === 0) {\n        this.gameState = GAME_STATE.GAMEOVER;\n      }\n\n      if (this.bricks.length === 0) {\n        this.currentLevel++;\n\n        if (this.currentLevel > 2) {\n          this.gameState = GAME_STATE.YOUWIN;\n        } else {\n          this.gameState = GAME_STATE.NEWLEVEL;\n        }\n      }\n\n      this.gameObjects.forEach(function (gameObject) {\n        return gameObject.update();\n      });\n      this.bricks.forEach(function (brick) {\n        return brick.update();\n      });\n      this.bricks = this.bricks.filter(function (brick) {\n        return !brick.isMarkedForDeletion;\n      });\n      this.drawScore(this.ctx);\n      this.drawLevel(this.ctx);\n      this.emit(\'updated\');\n    }\n  }, {\n    key: "draw",\n    value: function draw(ctx) {\n      this.gameObjects.forEach(function (gameObject) {\n        return gameObject.draw(ctx);\n      });\n      this.bricks.forEach(function (gameObject) {\n        return gameObject.draw(ctx);\n      });\n\n      if (this.gameState === GAME_STATE.PAUSED) {\n        this.drawScreen(ctx, \'rgba(0,0,0,.5)\', \'Paused\');\n      }\n\n      if (this.gameState === GAME_STATE.MENU) {\n        this.drawScreen(ctx, \'rgba(0,0,0,1)\', \'Press SPACEBAR to start\');\n      }\n\n      if (this.gameState === GAME_STATE.GAMEOVER || this.gameState === GAME_STATE.YOUWIN) {\n        this.drawGameEndScreen(ctx);\n      }\n    }\n  }, {\n    key: "drawGameEndScreen",\n    value: function drawGameEndScreen(ctx) {\n      var endText = this.gameState === GAME_STATE.GAMEOVER ? \'GAME OVER\' : \'YOU WIN\';\n      this.drawScreen(ctx, \'rgba(0,0,0,1)\', endText);\n      this.drawGameEnding(ctx, "Total Score: ".concat(this.score), -70);\n      this.drawGameEnding(ctx, \'Please press ENTER to restart\', 50);\n      this.gameScoreHandler(this.score);\n      cancelAnimationFrame(requestId);\n    }\n  }, {\n    key: "drawScreen",\n    value: function drawScreen(ctx, bgColor, text) {\n      ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n      ctx.fillStyle = bgColor;\n      ctx.fill();\n      ctx.font = \'50px Arial\';\n      ctx.fillStyle = \'white\';\n      ctx.textAlign = \'center\';\n      ctx.fillText(text, this.gameWidth / 2, this.gameHeight / 2);\n    }\n  }, {\n    key: "drawScore",\n    value: function drawScore(ctx) {\n      ctx.beginPath();\n      ctx.rect(10, 10, 150, 30);\n      ctx.fillStyle = \'white\';\n      ctx.fill();\n      ctx.font = "20px Arial";\n      ctx.fillStyle = \'black\';\n      ctx.textAlign = \'center\';\n      ctx.beginPath();\n      ctx.fillText("Score: ".concat(this.score), 80, 32);\n    }\n  }, {\n    key: "drawLevel",\n    value: function drawLevel(ctx) {\n      ctx.beginPath();\n      ctx.font = "20px Arial";\n      ctx.fillStyle = \'white\';\n      ctx.textAlign = \'center\';\n      ctx.fillText("Level: ".concat(this.currentLevel + 1, " | Lives left: ").concat(this.lives), this.gameWidth - 100, 32);\n    }\n  }, {\n    key: "drawGameEnding",\n    value: function drawGameEnding(ctx, text, YOffset) {\n      ctx.beginPath();\n      ctx.font = \'30px Arial\';\n      ctx.fillStyle = \'white\';\n      ctx.textAlign = \'center\';\n      ctx.fillText(text, this.gameWidth / 2, this.gameHeight / 2 + YOffset);\n    }\n  }, {\n    key: "togglePause",\n    value: function togglePause() {\n      if (this.gameState === GAME_STATE.RUNNING) {\n        this.gameState = GAME_STATE.PAUSED;\n      } else {\n        this.gameState = GAME_STATE.RUNNING;\n      }\n    }\n  }, {\n    key: "decreaseLives",\n    value: function decreaseLives() {\n      this.lives--;\n    }\n  }]);\n\n  return Game;\n}((eventemitter3__WEBPACK_IMPORTED_MODULE_4___default()));\n\n//# sourceURL=webpack://test/./client/pages/game/utils/game.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/gameObject.ts':
      /*!***********************************************!*\
  !*** ./client/pages/game/utils/gameObject.ts ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "GameObject": () => (/* binding */ GameObject)\n/* harmony export */ });\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar GameObject = /*#__PURE__*/function (_EventEmitter) {\n  _inherits(GameObject, _EventEmitter);\n\n  var _super = _createSuper(GameObject);\n\n  function GameObject(_ref) {\n    var _this;\n\n    var gameWidth = _ref.gameWidth,\n        gameHeight = _ref.gameHeight,\n        width = _ref.width,\n        height = _ref.height,\n        position = _ref.position,\n        name = _ref.name;\n\n    _classCallCheck(this, GameObject);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), "isMarkedForDeletion", false);\n\n    _this.gameWidth = gameWidth;\n    _this.gameHeight = gameHeight;\n    _this.height = height;\n    _this.width = width;\n    _this.position = position;\n    _this.name = name;\n    return _this;\n  }\n\n  return _createClass(GameObject);\n}((eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()));\n\n//# sourceURL=webpack://test/./client/pages/game/utils/gameObject.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/input.ts':
      /*!******************************************!*\
  !*** ./client/pages/game/utils/input.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputHandler\": () => (/* binding */ InputHandler)\n/* harmony export */ });\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ \"eventemitter3\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InputManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputManager */ \"./client/pages/game/utils/InputManager.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar InputHandler = /*#__PURE__*/function (_EventEmitter) {\n  _inherits(InputHandler, _EventEmitter);\n\n  var _super = _createSuper(InputHandler);\n\n  function InputHandler(paddle, game) {\n    var _this;\n\n    _classCallCheck(this, InputHandler);\n\n    _this = _super.call(this);\n    _this.inputManager = new _InputManager__WEBPACK_IMPORTED_MODULE_1__.InputManager(game);\n\n    _this.inputManager.watch(paddle);\n\n    document.addEventListener('keydown', function (event) {\n      switch (event.code) {\n        case 'ArrowLeft':\n          {\n            _this.inputManager.emit('keydown', 'keydown:ArrowLeft');\n\n            break;\n          }\n\n        case 'ArrowRight':\n          {\n            _this.inputManager.emit('keydown', 'keydown:ArrowRight');\n\n            break;\n          }\n\n        case 'Escape':\n          {\n            _this.inputManager.emit('keydown', 'Escape');\n\n            break;\n          }\n\n        case 'Space':\n          {\n            _this.inputManager.emit('keydown', 'Space');\n\n            break;\n          }\n\n        case 'Enter':\n          {\n            _this.inputManager.emit('keydown', 'Enter');\n\n            break;\n          }\n\n        default:\n          return true;\n      }\n    });\n    document.addEventListener('keyup', function (event) {\n      switch (event.code) {\n        case 'ArrowLeft':\n          {\n            _this.inputManager.emit('keyup', 'keyup:ArrowLeft');\n\n            break;\n          }\n\n        case 'ArrowRight':\n          {\n            _this.inputManager.emit('keyup', 'keyup:ArrowRight');\n\n            break;\n          }\n\n        default:\n          return true;\n      }\n    });\n    return _this;\n  }\n\n  return _createClass(InputHandler);\n}((eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()));\n\n//# sourceURL=webpack://test/./client/pages/game/utils/input.ts?"
        );

        /***/
      },

    /***/ './client/pages/game/utils/levels.ts':
      /*!*******************************************!*\
  !*** ./client/pages/game/utils/levels.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "buildLevels": () => (/* binding */ buildLevels),\n/* harmony export */   "level1": () => (/* binding */ level1),\n/* harmony export */   "level2": () => (/* binding */ level2),\n/* harmony export */   "level3": () => (/* binding */ level3),\n/* harmony export */   "level4": () => (/* binding */ level4)\n/* harmony export */ });\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ "./client/pages/game/utils/brick.ts");\n\nvar level1 = [[0, 0, 0, 0, 1, 0, 1, 0, 0, 0] // [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],\n// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n];\nvar level2 = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n];\nvar level3 = [[0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];\nvar level4 = [[0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 0, 1, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];\nfunction buildLevels(game, level) {\n  var bricks = [];\n  level.forEach(function (row, rowIndex) {\n    row.forEach(function (brick, brickIndex) {\n      if (brick) {\n        var position = {\n          x: brickIndex * 80,\n          y: 60 + rowIndex * 24\n        };\n        bricks.push(new _brick__WEBPACK_IMPORTED_MODULE_0__.Brick(game, position));\n      }\n    });\n  });\n  return bricks;\n}\n\n//# sourceURL=webpack://test/./client/pages/game/utils/levels.ts?'
        );

        /***/
      },

    /***/ './client/pages/game/utils/paddle.ts':
      /*!*******************************************!*\
  !*** ./client/pages/game/utils/paddle.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Paddle": () => (/* binding */ Paddle)\n/* harmony export */ });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ "./client/pages/game/utils/gameObject.ts");\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar PADDLE_WIDTH = 150;\nvar PADDLE_HEIGHT = 20;\nvar Paddle = /*#__PURE__*/function (_GameObject) {\n  _inherits(Paddle, _GameObject);\n\n  var _super = _createSuper(Paddle);\n\n  function Paddle(_ref) {\n    var _this;\n\n    var gameWidth = _ref.gameWidth,\n        gameHeight = _ref.gameHeight;\n\n    _classCallCheck(this, Paddle);\n\n    _this = _super.call(this, {\n      gameWidth: gameWidth,\n      gameHeight: gameHeight,\n      width: PADDLE_WIDTH,\n      height: PADDLE_HEIGHT,\n      position: {\n        x: gameWidth / 2 - PADDLE_WIDTH / 2,\n        y: gameHeight - PADDLE_HEIGHT - 10\n      },\n      name: \'paddle\'\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "maxSpeed", 7);\n\n    _defineProperty(_assertThisInitialized(_this), "speed", 0);\n\n    _this.on(\'collate:ball\', _this.onBallCollision);\n\n    _this.on("".concat(_this.name, ":keydown:ArrowLeft"), function () {\n      _this.moveLeft();\n    });\n\n    _this.on("".concat(_this.name, ":keydown:ArrowRight"), function () {\n      _this.moveRight();\n    });\n\n    _this.on("".concat(_this.name, ":keyup:ArrowLeft"), function () {\n      if (_this.speed < 0) _this.stop();\n    });\n\n    _this.on("".concat(_this.name, ":keyup:ArrowRight"), function () {\n      if (_this.speed > 0) _this.stop();\n    });\n\n    return _this;\n  }\n\n  _createClass(Paddle, [{\n    key: "onBallCollision",\n    value: function onBallCollision(object) {\n      console.log("paddle collated with ".concat(object.name));\n    }\n  }, {\n    key: "draw",\n    value: function draw(ctx) {\n      ctx.fillStyle = \'#0ff\';\n      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    }\n  }, {\n    key: "update",\n    value: function update() {\n      this.position.x += this.speed;\n\n      if (this.position.x < 0) {\n        this.position.x = 0;\n      }\n\n      if (this.position.x + this.width > this.gameWidth) {\n        this.position.x = this.gameWidth - this.width;\n      }\n\n      this.emit(\'updated\', this);\n    }\n  }, {\n    key: "moveLeft",\n    value: function moveLeft() {\n      this.speed -= this.maxSpeed;\n    }\n  }, {\n    key: "moveRight",\n    value: function moveRight() {\n      this.speed = this.maxSpeed;\n    }\n  }, {\n    key: "stop",\n    value: function stop() {\n      this.speed = 0;\n    }\n  }]);\n\n  return Paddle;\n}(_gameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject);\n\n//# sourceURL=webpack://test/./client/pages/game/utils/paddle.ts?'
        );

        /***/
      },

    /***/ './client/pages/home/Home.tsx':
      /*!************************************!*\
  !*** ./client/pages/home/Home.tsx ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Link */ "./client/components/Link/index.ts");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Input */ "./client/components/Input/index.ts");\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/const */ "./client/services/const.tsx");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./client/pages/home/style.tsx");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    login: \'\',\n    password: \'\'\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      logIn = _useState2[0],\n      setLogIn = _useState2[1];\n\n  var onSens = function onSens() {\n    fetch("".concat(_services_const__WEBPACK_IMPORTED_MODULE_5__.UrlSite.URL, "/auth/signin"), {\n      credentials: \'include\',\n      method: \'POST\',\n      headers: {\n        Accept: \'application/json\',\n        \'Content-Type\': \'application/json\'\n      },\n      body: JSON.stringify(logIn)\n    }).then(function (data) {\n      if (data.ok) {\n        location.reload();\n        localStorage.setItem(\'user\', \'true\');\n      }\n    });\n  };\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setLogIn(function (prevLogin) {\n      return _objectSpread(_objectSpread({}, prevLogin), {}, _defineProperty({}, name, value));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_6__.HardPopUpSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    h: 2\n  }, "\\u0432\\u0445\\u043E\\u0434"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'login\',\n    type: \'text\',\n    placeholder: \'логин\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'password\',\n    type: \'password\',\n    placeholder: \'пароль\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    to: _services_const__WEBPACK_IMPORTED_MODULE_5__.AppRoute.REGISTRATION\n  }, \'Нет аккаунта? Регистрация\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    fullWidth: true,\n    onClick: onSens\n  }, \'вход\'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://test/./client/pages/home/Home.tsx?'
        );

        /***/
      },

    /***/ './client/pages/home/index.ts':
      /*!************************************!*\
  !*** ./client/pages/home/index.ts ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./client/pages/home/Home.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/home/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/home/style.tsx':
      /*!*************************************!*\
  !*** ./client/pages/home/style.tsx ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "HardPopUpSt": () => (/* binding */ HardPopUpSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar HardPopUpSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  background-color: ", ";\\n  max-width: 384px;\\n  height: min-content;\\n  position: absolute;\\n  margin: auto;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  border-radius: 8px;\\n  padding: 40px;\\n  box-shadow: 0 10px 10px -5px #000000;\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.white;\n});\n\n//# sourceURL=webpack://test/./client/pages/home/style.tsx?'
        );

        /***/
      },

    /***/ './client/pages/post/Post.tsx':
      /*!************************************!*\
  !*** ./client/pages/post/Post.tsx ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./client/pages/post/style.tsx");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Link */ "./client/components/Link/index.ts");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/const */ "./client/services/const.tsx");\n\n\n\n\n\n\n\n\nvar Post = function Post() {\n  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.WrapperSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.HeaderSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    to: _services_const__WEBPACK_IMPORTED_MODULE_6__.AppRoute.FORUM\n  }, "\\u043A \\u0441\\u043F\\u0438\\u0441\\u043A\\u0443"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.PostBodySt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    h: 2\n  }, "\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u043E\\u0441\\u0442\\u0430 ", params.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_2__.TextSt, null, "\\u0412 \\u0447\\u0435\\u0441\\u0442\\u044C \\u043F\\u044F\\u0442\\u0438\\u043B\\u0435\\u0442\\u0438\\u044F \\u0442\\u0435\\u043B\\u0435\\u043A\\u0430\\u043D\\u0430\\u043B\\u0430 \\u041C\\u0430\\u0442\\u0447 \\u0422\\u0412 \\u043E\\u0431\\u044A\\u044F\\u0432\\u043B\\u0435\\u043D \\u043D\\u0430\\u0446\\u0438\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B\\u0439 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0441 \\u043C\\u043E\\u043B\\u043E\\u0434\\u044B\\u0445 \\u0441\\u043F\\u043E\\u0440\\u0442\\u0438\\u0432\\u043D\\u044B\\u0445 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0442\\u043E\\u0440\\u043E\\u0432! \\u041F\\u043E\\u0431\\u0435\\u0434\\u0438\\u0442\\u0435\\u043B\\u044C \\u043F\\u043E\\u043B\\u0443\\u0447\\u0438\\u0442 \\u043F\\u0440\\u0430\\u0432\\u043E \\u0432\\u0441\\u043B\\u0443\\u0445 \\u0438 \\u043D\\u0430 \\u0432\\u0441\\u044E \\u0441\\u0442\\u0440\\u0430\\u043D\\u0443 \\u043F\\u0435\\u0440\\u0435\\u0436\\u0438\\u0432\\u0430\\u0442\\u044C \\u0437\\u0430 \\u0441\\u043F\\u043E\\u0440\\u0442\\u0438\\u0432\\u043D\\u044B\\u0435 \\u0431\\u0430\\u0442\\u0430\\u043B\\u0438\\u0438 \\u0438 \\u0441\\u0442\\u0430\\u043D\\u0435\\u0442 \\u0447\\u0430\\u0441\\u0442\\u044C\\u044E \\u043A\\u043E\\u043C\\u0430\\u043D\\u0434\\u044B \\u041C\\u0430\\u0442\\u0447 \\u0422\\u0412! \\u0412 \\u043A\\u0430\\u0436\\u0434\\u043E\\u043C \\u044D\\u043F\\u0438\\u0437\\u043E\\u0434\\u0435 \\u043D\\u0430\\u0448\\u0435\\u0433\\u043E \\u043F\\u043E\\u0434\\u043A\\u0430\\u0441\\u0442\\u0430 \\u0443\\u0434\\u0438\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u043D\\u044E\\u0430\\u043D\\u0441\\u044B \\u0438\\u0437 \\u0436\\u0438\\u0437\\u043D\\u0438 \\u0441\\u043F\\u043E\\u0440\\u0442\\u0438\\u0432\\u043D\\u044B\\u0445 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0442\\u043E\\u0440\\u043E\\u0432, \\u043E\\u0442\\u0432\\u0430\\u0436\\u043D\\u044B\\u0435 \\u043B\\u044E\\u0434\\u0438, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0437\\u0430\\u0445\\u043E\\u0442\\u0435\\u043B\\u0438 \\u0441\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u043F\\u0440\\u043E\\u0444\\u0435\\u0441\\u0441\\u0438\\u044E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0441\\u0442\\u0430\\u0442\\u044C \\u0447\\u0430\\u0441\\u0442\\u044C\\u044E...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], null, "\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442\\u044C \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\\u0437\\u0434\\u0435\\u0441\\u044C \\u0441\\u043F\\u0438\\u0441\\u043E\\u043A \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0435\\u0432"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://test/./client/pages/post/Post.tsx?'
        );

        /***/
      },

    /***/ './client/pages/post/index.ts':
      /*!************************************!*\
  !*** ./client/pages/post/index.ts ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ "./client/pages/post/Post.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Post__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/post/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/post/style.tsx':
      /*!*************************************!*\
  !*** ./client/pages/post/style.tsx ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "HeaderSt": () => (/* binding */ HeaderSt),\n/* harmony export */   "PostBodySt": () => (/* binding */ PostBodySt),\n/* harmony export */   "TextSt": () => (/* binding */ TextSt),\n/* harmony export */   "WrapperSt": () => (/* binding */ WrapperSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar WrapperSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: 700px;\\n  margin: 40px auto;\\n"])));\nvar HeaderSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  display: flex;\\n  justify-content: space-between;\\n"])));\nvar PostBodySt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  margin-bottom: 80px;\\n"])));\nvar TextSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\\n  font-size: 14px;\\n"])));\n\n//# sourceURL=webpack://test/./client/pages/post/style.tsx?'
        );

        /***/
      },

    /***/ './client/pages/profile/Profile.tsx':
      /*!******************************************!*\
  !*** ./client/pages/profile/Profile.tsx ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _components_DataLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DataLine */ "./client/components/DataLine/index.ts");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _components_ButtonSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ButtonSettings */ "./client/components/ButtonSettings/index.ts");\n/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Avatar */ "./client/components/Avatar/index.ts");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Modal */ "./client/components/Modal/index.ts");\n/* harmony import */ var _components_ChangeAvatarModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ChangeAvatarModal */ "./client/components/ChangeAvatarModal/index.ts");\n/* harmony import */ var _components_ChangeProfileDataModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ChangeProfileDataModal */ "./client/components/ChangeProfileDataModal/index.ts");\n/* harmony import */ var _components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ChangePasswordModal */ "./client/components/ChangePasswordModal/index.ts");\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/const */ "./client/services/const.tsx");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useToggle */ "./client/hooks/useToggle.tsx");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style */ "./client/pages/profile/style.tsx");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import { USER } from \'../../store/types\';\n// import { Dispatch } from \'react\';\nvar Profile = function Profile() {\n  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.user;\n  });\n\n  var _useToggle = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_12__.useToggle)(false),\n      _useToggle2 = _slicedToArray(_useToggle, 2),\n      isShown = _useToggle2[0],\n      toggleVisible = _useToggle2[1];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\'),\n      _useState2 = _slicedToArray(_useState, 2),\n      changeProfile = _useState2[0],\n      setChangeProfile = _useState2[1]; // const dispatch = useDispatch();\n\n\n  var onSend = function onSend() {\n    fetch("".concat(_services_const__WEBPACK_IMPORTED_MODULE_11__.UrlSite.URL, "/auth/logout"), {\n      credentials: \'include\',\n      method: \'POST\',\n      headers: {\n        Accept: \'application/json\'\n      }\n    }).then(function () {\n      localStorage.removeItem(\'user\');\n      location.reload();\n    });\n  }; //  const getProfile = () => {\n  //    alert(1)\n  //   return (dispatch: Dispatch<any>) => {\n  //     fetch(`${UrlSite.URL}/auth/user`, {\n  //       credentials: \'include\',\n  //       method: \'GET\',\n  //       headers: {\n  //         Accept: \'application/json\',\n  //       },\n  //     })\n  //       .then((data) => {\n  //         return data.json();\n  //       })\n  //       .then((data) => {\n  //         dispatch({\n  //           type: USER,\n  //           payload: data,\n  //         });\n  //       });\n  //   };\n  // };\n\n\n  var onCallModal = function onCallModal(change) {\n    toggleVisible();\n    setChangeProfile(change);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_13__.HardPopUpSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_13__.WrapperAvatarSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    backgroundImage: user.avatar,\n    size: 130,\n    onClick: function onClick() {\n      return onCallModal(\'changeAvatar\');\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    h: 4\n  }, user.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_13__.InfoSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataLine__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    title: \'Почта\',\n    value: user.email\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataLine__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    title: \'Логин\',\n    value: user.login\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataLine__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    title: \'Имя\',\n    value: user.first_name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataLine__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    title: \'Фамилия\',\n    value: user.second_name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataLine__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    title: \'Ник\',\n    value: user.display_name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataLine__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    title: \'Телефон\',\n    value: user.phone\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    onClick: function onClick() {\n      return onCallModal(\'changeData\');\n    }\n  }, \'Изменить данные\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    onClick: function onClick() {\n      return onCallModal(\'changePassword\');\n    }\n  }, \'Изменить пароль\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    isShown: isShown,\n    hide: toggleVisible\n  }, changeProfile === \'changeAvatar\' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ChangeAvatarModal__WEBPACK_IMPORTED_MODULE_8__["default"], null), changeProfile === \'changeData\' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ChangeProfileDataModal__WEBPACK_IMPORTED_MODULE_9__["default"], null), changeProfile === \'changePassword\' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    fullWidth: false,\n    onClick: onSend\n  }, \'выход\')));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n\n//# sourceURL=webpack://test/./client/pages/profile/Profile.tsx?'
        );

        /***/
      },

    /***/ './client/pages/profile/index.ts':
      /*!***************************************!*\
  !*** ./client/pages/profile/index.ts ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile */ "./client/pages/profile/Profile.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Profile__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/profile/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/profile/style.tsx':
      /*!****************************************!*\
  !*** ./client/pages/profile/style.tsx ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "HardPopUpSt": () => (/* binding */ HardPopUpSt),\n/* harmony export */   "InfoSt": () => (/* binding */ InfoSt),\n/* harmony export */   "WrapperAvatarSt": () => (/* binding */ WrapperAvatarSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar HardPopUpSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  max-width: 510px;\\n  height: min-content;\\n  position: absolute;\\n  margin: auto;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n"])));\nvar InfoSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  margin: 60px 0;\\n"])));\nvar WrapperAvatarSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\\n  display: flex;\\n  justify-content: center;\\n  margin: 30px;\\n"])));\n\n//# sourceURL=webpack://test/./client/pages/profile/style.tsx?'
        );

        /***/
      },

    /***/ './client/pages/records/Records.tsx':
      /*!******************************************!*\
  !*** ./client/pages/records/Records.tsx ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Table */ \"./client/components/Table/index.ts\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ \"./client/components/Button/index.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./client/pages/records/style.tsx\");\n\n\n\n\nvar colNames = ['Игрок', 'Очки'];\nvar postList = [{\n  user_name: 'Иван',\n  user_avatar: '/2722d38f-5f23-4fec-a538-5743e75f81ee/b41f82c7-9204-44b2-8fe1-b597493f0371_ava.png',\n  score: '1000'\n}, {\n  user_name: 'Семен',\n  user_avatar: '/2722d38f-5f23-4fec-a538-5743e75f81ee/b41f82c7-9204-44b2-8fe1-b597493f0371_ava.png',\n  score: '1000'\n}];\n\nvar Records = function Records() {\n  var handleShowMore = function handleShowMore() {\n    console.log('handleShowMore');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_3__.WrapperSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Table__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    colNames: colNames,\n    content: postList,\n    isShowBtn: false\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: handleShowMore\n  }, \"\\u043F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u0435\\u0449\\u0435 \"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Records);\n\n//# sourceURL=webpack://test/./client/pages/records/Records.tsx?"
        );

        /***/
      },

    /***/ './client/pages/records/index.ts':
      /*!***************************************!*\
  !*** ./client/pages/records/index.ts ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Records__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Records */ "./client/pages/records/Records.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Records__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/records/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/records/style.tsx':
      /*!****************************************!*\
  !*** ./client/pages/records/style.tsx ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ButtonWrapperSt": () => (/* binding */ ButtonWrapperSt),\n/* harmony export */   "WrapperSt": () => (/* binding */ WrapperSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar WrapperSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  width: 700px;\\n  margin: 40px auto;\\n  background: ", ";\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 500px;\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.white;\n});\nvar ButtonWrapperSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n  margin-top: auto;\\n  margin-bottom: 40px;\\n"])));\n\n//# sourceURL=webpack://test/./client/pages/records/style.tsx?'
        );

        /***/
      },

    /***/ './client/pages/registration/Registration.tsx':
      /*!****************************************************!*\
  !*** ./client/pages/registration/Registration.tsx ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Link */ "./client/components/Link/index.ts");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Title */ "./client/components/Title/index.ts");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Input */ "./client/components/Input/index.ts");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./client/components/Button/index.ts");\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/const */ "./client/services/const.tsx");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./client/pages/registration/style.tsx");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar Registration = function Registration() {\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    login: \'\',\n    password: \'\'\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      signUp = _useState2[0],\n      setSignUp = _useState2[1];\n\n  var onSend = function onSend() {\n    fetch("".concat(_services_const__WEBPACK_IMPORTED_MODULE_6__.UrlSite.URL, "/auth/signup"), {\n      method: \'POST\',\n      headers: {\n        \'Content-Type\': \'application/json\',\n        Accept: \'application/json\'\n      },\n      body: JSON.stringify(signUp)\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      if (data.id) navigate(_services_const__WEBPACK_IMPORTED_MODULE_6__.AppRoute.ROOT);\n    });\n  };\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setSignUp(function (prevLogin) {\n      return _objectSpread(_objectSpread({}, prevLogin), {}, _defineProperty({}, name, value));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_7__.HardPopUpSt, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    h: 2\n  }, \'регистрация\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'email\',\n    type: \'email\',\n    placeholder: \'почта\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'login\',\n    type: \'text\',\n    placeholder: \'логин\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'first_name\',\n    type: \'text\',\n    placeholder: \'имя\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'second_name\',\n    type: \'text\',\n    placeholder: \'фамилия\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'phone\',\n    type: \'tel\',\n    placeholder: \'телефон\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'password\',\n    type: \'password\',\n    placeholder: \'пароль\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    name: \'passwordRepeat\',\n    type: \'password\',\n    placeholder: \'повторите пароль\',\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    to: _services_const__WEBPACK_IMPORTED_MODULE_6__.AppRoute.ROOT\n  }, \'Войти\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    fullWidth: true,\n    onClick: onSend\n  }, \'зарегистрироваться\'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);\n\n//# sourceURL=webpack://test/./client/pages/registration/Registration.tsx?'
        );

        /***/
      },

    /***/ './client/pages/registration/index.ts':
      /*!********************************************!*\
  !*** ./client/pages/registration/index.ts ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration */ "./client/pages/registration/Registration.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Registration__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/pages/registration/index.ts?'
        );

        /***/
      },

    /***/ './client/pages/registration/style.tsx':
      /*!*********************************************!*\
  !*** ./client/pages/registration/style.tsx ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "HardPopUpSt": () => (/* binding */ HardPopUpSt)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar HardPopUpSt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  background-color: ", ";\\n  max-width: 384px;\\n  height: min-content;\\n  position: absolute;\\n  margin: auto;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  border-radius: 8px;\\n  padding: 40px;\\n  box-shadow: 0 10px 10px -5px #000000;\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.allColors.white;\n});\n\n//# sourceURL=webpack://test/./client/pages/registration/style.tsx?'
        );

        /***/
      },

    /***/ './client/services/const.tsx':
      /*!***********************************!*\
  !*** ./client/services/const.tsx ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppRoute\": () => (/* binding */ AppRoute),\n/* harmony export */   \"UrlSite\": () => (/* binding */ UrlSite)\n/* harmony export */ });\nvar AppRoute = {\n  ROOT: '/',\n  ABOUT: '/about',\n  REGISTRATION: '/registration',\n  PROFILE: '/profile',\n  FORUM: '/forum',\n  FORUM_ID: '/forum/:id',\n  RECORDS: '/records',\n  GAME: '/game',\n  POST: '/post'\n};\nvar UrlSite = {\n  URL: 'https://ya-praktikum.tech/api/v2'\n};\n\n//# sourceURL=webpack://test/./client/services/const.tsx?"
        );

        /***/
      },

    /***/ './client/services/forum.tsx':
      /*!***********************************!*\
  !*** ./client/services/forum.tsx ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterData\": () => (/* binding */ filterData)\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar filterData = function filterData(post) {\n  return Object.keys(post).filter(function (key) {\n    return key !== 'content' && key !== 'user_id';\n  }).reduce(function (obj, key) {\n    return Object.assign(obj, _defineProperty({}, key, post[key]));\n  }, {});\n};\n\n//# sourceURL=webpack://test/./client/services/forum.tsx?"
        );

        /***/
      },

    /***/ './client/services/fullscreen-api.tsx':
      /*!********************************************!*\
  !*** ./client/services/fullscreen-api.tsx ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleFullscreen\": () => (/* binding */ toggleFullscreen)\n/* harmony export */ });\n// const Element_Copy = Element;\nfunction toggleFullscreen(elem) {\n  // const Element: any = Element_Copy;\n  elem = elem || document.documentElement;\n\n  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {\n    if (elem.requestFullscreen) {\n      elem.requestFullscreen();\n    } else if (elem.msRequestFullscreen) {\n      elem.msRequestFullscreen();\n    } else if (elem.mozRequestFullScreen) {\n      elem.mozRequestFullScreen();\n    }\n    /*else if (elem.webkitRequestFullscreen) {\n    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);\n    }*/\n\n\n    document.body.style.backgroundColor = 'transparent';\n    elem.style.backgroundImage = \"url('/images/fullscreen_bg.jpeg')\";\n    elem.style.backgroundRepeat = 'no-repeat';\n    elem.style.backgroundSize = 'cover';\n    elem.style.height = '100vh';\n  } else {\n    if (document.exitFullscreen) {\n      document.exitFullscreen();\n    } else if (document.msExitFullscreen) {\n      document.msExitFullscreen();\n    } else if (document.mozCancelFullScreen) {\n      document.mozCancelFullScreen();\n    } else if (document.webkitExitFullscreen) {\n      document.webkitExitFullscreen();\n    }\n\n    document.body.style.backgroundColor = 'initial';\n    elem.style.background = '#818CF8';\n  }\n}\n\n//# sourceURL=webpack://test/./client/services/fullscreen-api.tsx?"
        );

        /***/
      },

    /***/ './client/ssr.tsx':
      /*!************************!*\
  !*** ./client/ssr.tsx ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts */ "./client/layouts/index.ts");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_layouts__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://test/./client/ssr.tsx?'
        );

        /***/
      },

    /***/ './client/store/types.ts':
      /*!*******************************!*\
  !*** ./client/store/types.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "USER": () => (/* binding */ USER)\n/* harmony export */ });\nvar USER = \'USER\';\n\n//# sourceURL=webpack://test/./client/store/types.ts?'
        );

        /***/
      },

    /***/ './client/store/user/actions.ts':
      /*!**************************************!*\
  !*** ./client/store/user/actions.ts ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProfile\": () => (/* binding */ getProfile),\n/* harmony export */   \"updateProfileAvatar\": () => (/* binding */ updateProfileAvatar),\n/* harmony export */   \"updateProfileData\": () => (/* binding */ updateProfileData)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./client/store/types.ts\");\n/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/const */ \"./client/services/const.tsx\");\n\n\nvar getProfile = function getProfile() {\n  return function (dispatch) {\n    fetch(\"\".concat(_services_const__WEBPACK_IMPORTED_MODULE_1__.UrlSite.URL, \"/auth/user\"), {\n      credentials: 'include',\n      method: 'GET',\n      headers: {\n        Accept: 'application/json'\n      }\n    }).then(function (data) {\n      return data.json();\n    }).then(function (data) {\n      dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.USER,\n        payload: data\n      });\n    });\n  };\n};\nvar updateProfileData = function updateProfileData(newData) {\n  return function (dispatch) {\n    fetch(\"\".concat(_services_const__WEBPACK_IMPORTED_MODULE_1__.UrlSite.URL, \"/user/profile\"), {\n      credentials: 'include',\n      method: 'PUT',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(newData)\n    }).then(function (data) {\n      return data.json();\n    }).then(function (data) {\n      dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.USER,\n        payload: data\n      });\n    });\n  };\n};\nvar updateProfileAvatar = function updateProfileAvatar(newAvatar) {\n  return function (dispatch) {\n    fetch(\"https://ya-praktikum.tech/api/v2/user/profile/avatar\", {\n      method: 'PUT',\n      credentials: 'include',\n      headers: {\n        accept: 'application/json'\n      },\n      body: newAvatar\n    }).then(function (data) {\n      return data.json();\n    }).then(function (data) {\n      dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_0__.USER,\n        payload: data\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack://test/./client/store/user/actions.ts?"
        );

        /***/
      },

    /***/ './client/styles/style.tsx':
      /*!*********************************!*\
  !*** ./client/styles/style.tsx ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "GlobalStyle": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\\n  body {\\n    background-color: ", ";\\n    font-family: ", ";\\n    color: ", ";\\n  }\\n\\n \\n   \\n  * {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n  }\\n\\n  p {\\n    white-space: pre-line;\\n  }\\n\\n  a {\\n    outline: none;\\n    text-decoration: none;\\n  }\\n\\n  :active, :hover, :focus {\\n    outline: 0;\\n    outline-offset: 0;\\n  }\\n  textarea,\\n  input {\\n    outline: none;\\n    font-family: ", ";\\n  }\\n\\n  input:-webkit-autofill {\\n      -webkit-box-shadow: inset 0 0 0 50px #fff !important;\\n  }\\n\\n  textarea,\\n  input:matches(\\n  [type=\\"email\\"],\\n  [type=\\"number\\"],\\n  [type=\\"password\\"],\\n  [type=\\"search\\"],\\n  [type=\\"tel\\"],\\n  [type=\\"text\\"],\\n  [type=\\"url\\"]\\n  ) {\\n      -webkit-appearance: none;\\n      -moz-appearance: none;\\n      appearance: none;\\n  }\\n  border-radius: 0;\\n"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.bg;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.fonts.font_family;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.colors.font;\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.fonts.font_family;\n});\n\n//# sourceURL=webpack://test/./client/styles/style.tsx?'
        );

        /***/
      },

    /***/ './client/styles/variables.tsx':
      /*!*************************************!*\
  !*** ./client/styles/variables.tsx ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseTheme\": () => (/* binding */ baseTheme)\n/* harmony export */ });\nvar allColors = {\n  yellow: '#FBBF24',\n  white: '#FFFFFF',\n  black: '#231F20',\n  red: '#F87171',\n  green: '#34D399',\n  blue: '#4F46E5',\n  purple: '#5E5E5E',\n  purple_medium: '#818CF8',\n  purple_light: '#E0E7FF',\n  grey: '#efefef',\n  grey_light: '#f7f7f7'\n};\nvar baseTheme = {\n  allColors: {\n    yellow: '#FBBF24',\n    white: '#FFFFFF',\n    black: '#231F20',\n    red: '#F87171',\n    green: '#34D399',\n    blue: '#4F46E5',\n    purple: '#5E5E5E',\n    purple_medium: '#818CF8',\n    purple_light: '#E0E7FF',\n    grey: '#efefef',\n    grey_light: '#f7f7f7'\n  },\n  colors: {\n    bg: allColors.purple_medium,\n    bgBtn: allColors.blue,\n    bgBtnHover: allColors.purple_light,\n    font: allColors.black,\n    fontBtn: allColors.white,\n    fontBtnHover: allColors.purple,\n    fontLink: allColors.blue,\n    danger: allColors.red,\n    inputBorder: allColors.purple\n  },\n  fonts: {\n    font_family: 'Montserrat, sans-serif',\n    semi_bold: '600',\n    black: '900'\n  },\n  borderRadius: '6px',\n  skillsStartAnim: '0.3s'\n};\n\n//# sourceURL=webpack://test/./client/styles/variables.tsx?"
        );

        /***/
      },

    /***/ './client/assets/img/ball.png':
      /*!************************************!*\
  !*** ./client/assets/img/ball.png ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "383df0051cd0e5da9339.png";\n\n//# sourceURL=webpack://test/./client/assets/img/ball.png?'
        );

        /***/
      },

    /***/ './client/assets/img/brick.png':
      /*!*************************************!*\
  !*** ./client/assets/img/brick.png ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "0e484810525bc3d79f5a.png";\n\n//# sourceURL=webpack://test/./client/assets/img/brick.png?'
        );

        /***/
      },

    /***/ eventemitter3:
      /*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
      /***/ (module) => {
        module.exports = require('eventemitter3');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ (module) => {
        module.exports = require('react');

        /***/
      },

    /***/ 'react-redux':
      /*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
      /***/ (module) => {
        module.exports = require('react-redux');

        /***/
      },

    /***/ 'react-router-dom':
      /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
      /***/ (module) => {
        module.exports = require('react-router-dom');

        /***/
      },

    /***/ 'styled-components':
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /***/ (module) => {
        module.exports = require('styled-components');

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ __webpack_require__.p = '/';
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./client/ssr.tsx');
  /******/ module.exports = __webpack_exports__;
  /******/
  /******/
})();
