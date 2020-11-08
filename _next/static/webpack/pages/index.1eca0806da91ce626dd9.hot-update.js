webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar StartMenu = function StartMenu() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_8__[\"ProcessContext\"]),\n      open = _useContext.open;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_9__[\"SessionContext\"]),\n      foreground = _useContext2.foreground;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(defaultView),\n      view = _useState2[0],\n      setView = _useState2[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"])(null);\n  var buttonsRef = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"])(null);\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ol\", {\n        className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n        ref: buttonsRef,\n        tabIndex: -1,\n        onMouseLeave: function onMouseLeave() {\n          var _startButtonRef$curre;\n\n          return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n        },\n        children: buttons.map(function (_ref) {\n          var alt = _ref.alt,\n              icon = _ref.icon,\n              isBold = _ref.isBold,\n              isView = _ref.isView,\n              title = _ref.title,\n              onClick = _ref.onClick;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figure\", {\n              className: view === title ? _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSelected : '',\n              onClick: isView ? function () {\n                return setView(view);\n              } : onClick,\n              tabIndex: -1,\n              title: alt || title,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                \"data-icon\": icon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figcaption\", {\n                children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n                  children: title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 31\n                }, _this) : title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, _this)\n          }, title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref2) {\n        var _buttonsRef$current;\n\n        var relatedTarget = _ref2.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre2;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre2 = startButtonRef.current) === null || _startButtonRef$curre2 === void 0 ? void 0 : _startButtonRef$curre2.focus();\n        } else if (!((_buttonsRef$current = buttonsRef.current) === null || _buttonsRef$current === void 0 ? void 0 : _buttonsRef$current.contains(relatedTarget))) {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(StartMenu, \"oXX7vWdTp9W+iLYNiJtoGDenwzA=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJTdGFydE1lbnUiLCJ1c2VDb250ZXh0IiwiUHJvY2Vzc0NvbnRleHQiLCJvcGVuIiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kIiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidmlldyIsInNldFZpZXciLCJzdGFydEJ1dHRvblJlZiIsInVzZVJlZiIsImJ1dHRvbnNSZWYiLCJidXR0b25zIiwidGl0bGUiLCJhbHQiLCJpY29uIiwiaXNCb2xkIiwiaXNWaWV3Iiwib25DbGljayIsImNsaWNrRXZlbnQiLCJuYW1lIiwidXJsIiwidGFyZ2V0IiwicHJvY2Vzc0lkIiwic3R5bGVzIiwibWVudSIsImN1cnJlbnQiLCJmb2N1cyIsIm1hcCIsImJ1dHRvblNlbGVjdGVkIiwiTWVudVZpZXciLCJjd2QiLCJzdGFydCIsIm1lbnVPcGVuIiwicmVsYXRlZFRhcmdldCIsImNvbnRhaW5zIiwiZmFXaW5kb3dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLFVBQXBCOztBQUVBLElBQU1DLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQTs7QUFBQSxvQkFDZkMseURBQVUsQ0FBQ0MsdUVBQUQsQ0FESztBQUFBLE1BQ3hCQyxJQUR3QixlQUN4QkEsSUFEd0I7O0FBQUEscUJBRVRGLHlEQUFVLENBQUNHLHVFQUFELENBRkQ7QUFBQSxNQUV4QkMsVUFGd0IsZ0JBRXhCQSxVQUZ3Qjs7QUFBQSxrQkFHQUMsdURBQVEsQ0FBQyxLQUFELENBSFI7QUFBQSxNQUd6QkMsUUFIeUI7QUFBQSxNQUdmQyxXQUhlOztBQUFBLG1CQUlSRix1REFBUSxDQUFDUCxX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TWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBGaWxlTWFuYWdlciBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcbmltcG9ydCBNZW51VmlldyBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL01lbnVWaWV3JztcbmltcG9ydCB7IGZhV2luZG93cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFByb2Nlc3NDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGVmYXVsdFZpZXcgPSAnQWxsIGFwcHMnO1xuXG5jb25zdCBTdGFydE1lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IG9wZW4gfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCB7IGZvcmVncm91bmQgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoZGVmYXVsdFZpZXcpO1xuICBjb25zdCBzdGFydEJ1dHRvblJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGJ1dHRvbnNSZWYgPSB1c2VSZWY8SFRNTE9MaXN0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1NUQVJUJyxcbiAgICAgIGFsdDogJ0V4cGFuZCcsXG4gICAgICBpY29uOiAnXFx1ZTcwMCcsXG4gICAgICBpc0JvbGQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQWxsIGFwcHMnLFxuICAgICAgaWNvbjogJ1xcdWUxNzknLFxuICAgICAgaXNWaWV3OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0RvY3VtZW50cycsXG4gICAgICBpY29uOiAnXFx1ZTE2MCcsXG4gICAgICBvbkNsaWNrOiBhc3luYyAoY2xpY2tFdmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0lkID0gYXdhaXQgb3Blbih7XG4gICAgICAgICAgaWNvbjogJy9pY29ucy9wcm9ncmFtcy9leHBsb3Jlci5wbmcnLFxuICAgICAgICAgIG5hbWU6ICdEb2N1bWVudHMnLFxuICAgICAgICAgIHVybDogJy9kb2NzJ1xuICAgICAgICB9LCB7fSwgY2xpY2tFdmVudC50YXJnZXQpO1xuICAgICAgICBmb3JlZ3JvdW5kKHByb2Nlc3NJZCk7XG4gICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUG93ZXInLFxuICAgICAgaWNvbjogJ1xcdWU3ZTgnXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPG9sXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfVxuICAgICAgICAgICAgcmVmPXtidXR0b25zUmVmfVxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzdGFydEJ1dHRvblJlZi5jdXJyZW50Py5mb2N1cygpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtidXR0b25zLm1hcCgoeyBhbHQsIGljb24sIGlzQm9sZCwgaXNWaWV3LCB0aXRsZSwgb25DbGljayB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZpZXcgPT09IHRpdGxlID8gc3R5bGVzLmJ1dHRvblNlbGVjdGVkIDogJyd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpc1ZpZXcgPyAoKSA9PiBzZXRWaWV3KHZpZXcpIDogb25DbGlja31cbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXthbHQgfHwgdGl0bGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1pY29uPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIHtpc0JvbGQgPyA8c3Ryb25nPnt0aXRsZX08L3N0cm9uZz4gOiB0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgPEZpbGVNYW5hZ2VyXG4gICAgICAgICAgICBwYXRoPVwiL3N0YXJ0XCJcbiAgICAgICAgICAgIHJlbmRlcj17TWVudVZpZXd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGN3ZCkgPT4gIWN3ZCAmJiBzZXRTaG93TWVudShmYWxzZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9uYXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9e3N0YXJ0QnV0dG9uUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdGFydH0gJHtzaG93TWVudSAmJiBzdHlsZXMubWVudU9wZW59YH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSghc2hvd01lbnUpfVxuICAgICAgICBvbkJsdXI9eyh7IHJlbGF0ZWRUYXJnZXQgfSkgPT4ge1xuICAgICAgICAgIGlmICghcmVsYXRlZFRhcmdldCkge1xuICAgICAgICAgICAgc3RhcnRCdXR0b25SZWY/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghYnV0dG9uc1JlZi5jdXJyZW50Py5jb250YWlucyhyZWxhdGVkVGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2luZG93c30gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})