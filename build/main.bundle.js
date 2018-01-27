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

var _GameMap = __webpack_require__(4);

var _GameMap2 = _interopRequireDefault(_GameMap);

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

            this.area = new Phaser.Rectangle(Math.floor((window.innerWidth - w) / 2), Math.floor((window.innerHeight - h) / 2), w, h);
            this.areaSpr = this.game.add.sprite(this.area.topLeft.x, this.area.topLeft.y, 'pixel');
            this.areaSpr.width = w;
            this.areaSpr.height = h;

            this.gameMap = new _GameMap2.default(this.game, this.area);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'preload',
        value: function preload() {
            this.game.load.image('pixel', '/assets/pixel.png');
            this.game.load.image('table', '/assets/table.png');
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
    areaW: 660,
    areaH: 560,
    deskWidth: 174 / 2,
    deskHeight: 120 / 2,
    deskGap: 20
};

exports.default = global;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

var _NeutralPupil = __webpack_require__(5);

var _NeutralPupil2 = _interopRequireDefault(_NeutralPupil);

var _EmptyPupil = __webpack_require__(6);

var _EmptyPupil2 = _interopRequireDefault(_EmptyPupil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameMap = function () {
    function GameMap(game, area) {
        _classCallCheck(this, GameMap);

        this.game = game;
        this.area = area;

        this.deskRowSize = Math.floor(_global2.default.areaW / (_global2.default.deskWidth + _global2.default.deskGap));
        var deskRowWidth = this.deskRowSize * _global2.default.deskWidth + (this.deskRowSize - 1) * _global2.default.deskGap;
        var startXOffset = (_global2.default.areaW - deskRowWidth) / 2;

        this.deskColSize = Math.floor((_global2.default.areaH - 150) / (_global2.default.deskHeight + _global2.default.deskGap));
        var deskColWidth = this.deskColSize * _global2.default.deskHeight + (this.deskColSize - 1) * _global2.default.deskGap;
        var startYOffset = (_global2.default.areaH - 150 - deskColWidth) / 2;

        for (var y = 0; y < this.deskColSize; y++) {
            for (var x = 0; x < this.deskRowSize; x++) {
                this.desk = this.game.add.sprite(this.area.left + startXOffset + (_global2.default.deskWidth + _global2.default.deskGap) * x, this.area.bottom - startYOffset - (_global2.default.deskHeight + _global2.default.deskGap) * y, 'table');
                this.desk.anchor.setTo(0, 1);
                this.desk.scale.setTo(0.5);
                // this.desk.width = g.deskSize;
                // this.desk.height = g.deskSize;
                // this.desk.tint = 0x000000;
            }
        }
        this.generatePupils();
    }

    _createClass(GameMap, [{
        key: 'generatePupils',
        value: function generatePupils() {
            this.pupils = new Array(this.deskColSize).fill(new Array(this.deskRowSize).fill(new _EmptyPupil2.default()));
            console.log(this.pupils);
        }
    }]);

    return GameMap;
}();

module.exports = GameMap;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NeutralPupil = function () {
    function NeutralPupil() {
        _classCallCheck(this, NeutralPupil);

        this.speed = 10;
        this.noiseRange = [0, 5];
        this.spr = null;
    }

    _createClass(NeutralPupil, [{
        key: "update",
        value: function update() {}
    }, {
        key: "select",
        value: function select() {}
    }, {
        key: "check",
        value: function check(x, y) {}
    }, {
        key: "highlight",
        value: function highlight(_highlight) {}
    }, {
        key: "isSelectable",
        value: function isSelectable() {
            return true;
        }
    }, {
        key: "getSpeed",
        value: function getSpeed() {
            return this.speed;
        }
    }, {
        key: "getNoise",
        value: function getNoise() {
            return this.game.rnd.integerInRange(this.noiseRange[0], this.noiseRange[1]);
        }
    }]);

    return NeutralPupil;
}();

module.exports = NeutralPupil;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmptyPupil = function () {
    function EmptyPupil() {
        _classCallCheck(this, EmptyPupil);

        this.spr = null;
    }

    _createClass(EmptyPupil, [{
        key: "update",
        value: function update() {}
    }, {
        key: "select",
        value: function select() {}
    }, {
        key: "check",
        value: function check(x, y) {}
    }, {
        key: "highlight",
        value: function highlight(_highlight) {}
    }, {
        key: "isSelectable",
        value: function isSelectable() {
            return false;
        }
    }, {
        key: "getSpeed",
        value: function getSpeed() {}
    }, {
        key: "getNoise",
        value: function getNoise() {}
    }]);

    return EmptyPupil;
}();

module.exports = EmptyPupil;

/***/ })
/******/ ]);