/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/blocks.js":
/*!**********************!*\
  !*** ./js/blocks.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (blocks, editor, element) {\n  var el = element.createElement;\n  var RichText = editor.RichText;\n  var AlignmentToolbar = editor.AlignmentToolbar;\n  var BlockControls = editor.BlockControls;\n  var MediaUpload = editor.MediaUpload;\n  blocks.registerBlockType('shapes/hero', {\n    title: 'Page Hero',\n    icon: 'id',\n    category: 'layout',\n    attributes: {\n      title: {\n        type: 'array',\n        source: 'children',\n        selector: 'h1'\n      },\n      lead: {\n        type: 'array',\n        source: 'children',\n        selector: 'p'\n      },\n      alignment: {\n        type: 'string',\n        default: 'none'\n      },\n      imgUrl: {\n        type: 'string',\n        default: ''\n      }\n    },\n    edit: function edit(props) {\n      var className = blocks.getBlockDefaultClassName('shapes/hero');\n      var _props$attributes = props.attributes,\n          title = _props$attributes.title,\n          lead = _props$attributes.lead,\n          alignment = _props$attributes.alignment,\n          imgUrl = _props$attributes.imgUrl;\n\n      function onChangeTitle(newTitle) {\n        props.setAttributes({\n          title: newTitle\n        });\n      }\n\n      function onChangeLead(newLead) {\n        props.setAttributes({\n          lead: newLead\n        });\n      }\n\n      function onChangeAlignment(newAlignment) {\n        props.setAttributes({\n          alignment: newAlignment === undefined ? 'none' : newAlignment\n        });\n      }\n\n      function onSelectImage(value) {\n        props.setAttributes({\n          imgUrl: value.sizes.full.url\n        });\n      }\n\n      function renderUploadedMedia(args) {\n        return el('button', {\n          onClick: args.open\n        }, \"Open Media Library\");\n      }\n\n      return [wp.element.createElement(BlockControls, {\n        key: \"controls\"\n      }, wp.element.createElement(AlignmentToolbar, {\n        value: alignment,\n        onChange: onChangeAlignment\n      })), wp.element.createElement(\"section\", {\n        className: className,\n        style: {\n          textAlign: alignment\n        }\n      }, wp.element.createElement(MediaUpload, {\n        render: renderUploadedMedia,\n        onSelect: onSelectImage\n      }), wp.element.createElement(RichText, {\n        tagName: \"h1\",\n        placeholder: \"Hero Title\",\n        value: title,\n        onChange: onChangeTitle\n      }), wp.element.createElement(RichText, {\n        tagName: \"p\",\n        placeholder: \"Enter lead copy here\",\n        onChange: onChangeLead,\n        value: lead\n      }))];\n    },\n    save: function save(props) {\n      var _props$attributes2 = props.attributes,\n          title = _props$attributes2.title,\n          lead = _props$attributes2.lead,\n          alignment = _props$attributes2.alignment,\n          imgUrl = _props$attributes2.imgUrl;\n      var sectionClassName = 'shapes-hero-align-' + alignment;\n      var sectionStyle = {\n        background: 'no-repeat url(' + imgUrl + ')'\n      };\n      return wp.element.createElement(\"section\", {\n        className: sectionClassName,\n        style: sectionStyle\n      }, wp.element.createElement(RichText.Content, {\n        tagName: \"h1\",\n        value: title\n      }), wp.element.createElement(RichText.Content, {\n        tagName: \"p\",\n        value: lead\n      }));\n    }\n  });\n})(window.wp.blocks, window.wp.editor, window.wp.element);\n\n//# sourceURL=webpack:///./js/blocks.js?");

/***/ })

/******/ });