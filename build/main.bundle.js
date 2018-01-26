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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _StateMenu = __webpack_require__(1);

var _StateMenu2 = _interopRequireDefault(_StateMenu);

var _StatePlay = __webpack_require__(2);

var _StatePlay2 = _interopRequireDefault(_StatePlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, window.innerWidth, window.innerHeight, Phaser.AUTO, 'container', null, false, true));

        _this.state.add('menu', new _StateMenu2.default(), true);
        _this.state.add('play', new _StatePlay2.default(), false);
        return _this;
    }

    return Game;
}(Phaser.Game);

window.game = new Game();
window.addEventListener('resize', function () {
    if (window.game.state.states[window.game.state.current].resize) {
        window.game.state.states[window.game.state.current].resize();
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateMenu = function (_Phaser$State) {
    _inherits(StateMenu, _Phaser$State);

    function StateMenu() {
        _classCallCheck(this, StateMenu);

        return _possibleConstructorReturn(this, (StateMenu.__proto__ || Object.getPrototypeOf(StateMenu)).call(this));
    }

    _createClass(StateMenu, [{
        key: 'init',
        value: function init() {
            this.game.stage.disableVisibilityChange = true;
            this.game.renderer.clearBeforeRender = false;
            this.game.renderer.renderSession.roundPixels = true;
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.stage.backgroundColor = 0x4488aa;

            var hello = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'press any key to continue');
            hello.anchor.setTo(0.5);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            this.game.input.keyboard.onDownCallback = function (event) {
                _this2.game.state.start('play');
            };
        }
    }, {
        key: 'preload',
        value: function preload() {}
    }, {
        key: 'resize',
        value: function resize() {
            this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StateMenu;
}(Phaser.State);

exports.default = StateMenu;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatePlay = function (_Phaser$State) {
    _inherits(StatePlay, _Phaser$State);

    function StatePlay() {
        _classCallCheck(this, StatePlay);

        return _possibleConstructorReturn(this, (StatePlay.__proto__ || Object.getPrototypeOf(StatePlay)).call(this));
    }

    _createClass(StatePlay, [{
        key: 'init',
        value: function init() {
            this.game.stage.disableVisibilityChange = true;
            this.game.renderer.clearBeforeRender = false;
            this.game.renderer.renderSession.roundPixels = true;
        }
    }, {
        key: 'create',
        value: function create() {
            var w = _global2.default.areaW;
            var h = _global2.default.areaH;

            this.screen = new Phaser.Rectangle(Math.floor((window.innerWidth - w) / 2), Math.floor((window.innerHeight - h) / 2), w, h);

            this.playArea = new Phaser.Rectangle(Math.floor((window.innerWidth - w) / 2), Math.floor((window.innerHeight - h) / 2), w, h);
            this.area = this.game.add.sprite(this.playArea.topLeft.x, this.playArea.topLeft.y, 'pixel');
            this.area.width = w;
            this.area.height = h;

            var chairRowSize = Math.floor(_global2.default.areaW / (_global2.default.chairSize + _global2.default.chairGap));
            var chairRowWidth = chairRowSize * _global2.default.chairSize + (chairRowSize - 1) * _global2.default.chairGap;
            var startXOffset = (_global2.default.areaW - chairRowWidth) / 2;

            var chairColSize = Math.floor((_global2.default.areaH - 150) / (_global2.default.chairSize + _global2.default.chairGap));
            var chairColWidth = chairColSize * _global2.default.chairSize + (chairColSize - 1) * _global2.default.chairGap;
            var startYOffset = (_global2.default.areaH - 150 - chairColWidth) / 2;

            for (var y = 0; y < chairColSize; y++) {
                for (var x = 0; x < chairRowSize; x++) {
                    this.chair = this.game.add.sprite(this.playArea.left + startXOffset + (_global2.default.chairSize + _global2.default.chairGap) * x, this.playArea.bottom - startYOffset - (_global2.default.chairSize + _global2.default.chairGap) * y, 'pixel');
                    this.chair.anchor.setTo(0, 1);
                    this.chair.width = _global2.default.chairSize;
                    this.chair.height = _global2.default.chairSize;
                    this.chair.tint = 0x000000;
                }
            }
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'preload',
        value: function preload() {
            this.game.load.image('pixel', '/assets/pixel.png');
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StatePlay;
}(Phaser.State);

exports.default = StatePlay;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var global = {
    areaW: 500,
    areaH: 560,
    chairSize: 50,
    chairGap: 30
};

exports.default = global;

/***/ })
/******/ ]);