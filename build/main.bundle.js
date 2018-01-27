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

var _StateWin = __webpack_require__(12);

var _StateWin2 = _interopRequireDefault(_StateWin);

var _StateLose = __webpack_require__(13);

var _StateLose2 = _interopRequireDefault(_StateLose);

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
        _this.state.add('win', new _StateWin2.default(), false);
        _this.state.add('lose', new _StateLose2.default(), false);
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
            this.game.input.mouse.capture = true;
            this.game.input.keyboard.onDownCallback = undefined;
        }
    }, {
        key: 'create',
        value: function create() {
            this.gameMap = new _GameMap2.default(this.game);
        }
    }, {
        key: 'update',
        value: function update() {
            this.game.world.sort('y', Phaser.Group.SORT_ASCENDING);
            this.gameMap.update();
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.game.load.image('pixel', 'assets/pixel.png');
            this.game.load.image('table', 'assets/table.png');
            this.game.load.image('chair', 'assets/chair.png');
            this.game.load.image('generic_boy_1', 'assets/generic_boy_1.png');
            this.game.load.image('generic_girl_1', 'assets/generic_girl_1.png');
            this.game.load.image('hero_boy_1', 'assets/hero_boy_1.png');
            this.game.load.image('target_boy_1', 'assets/target_boy_1.png');
            this.game.load.image('bully', 'assets/bully.png');
            this.game.load.image('teachers_pet', 'assets/teachers_pet.png');
            this.game.load.image('blackboard', 'assets/blackboard.png');
            this.game.load.image('teachers_desk', 'assets/teachers_desk.png');
            this.game.load.spritesheet('teacher', 'assets/teacher/teacher_spritesheet.png', 180, 280);
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
    areaW: 780,
    areaH: 560,
    deskWidth: 174 / 2,
    deskHeight: 120 / 2,
    deskGap: 20,
    area: null,
    startXOffset: null,
    startYOffset: null,
    armActive: false,
    radiansOffset: Phaser.Math.degToRad(90),
    maxArmLength: 110,
    droppedPoint: null,
    activePupil: null,
    meter: 50,
    win: false,
    lose: false
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

var _BullyPupil = __webpack_require__(9);

var _BullyPupil2 = _interopRequireDefault(_BullyPupil);

var _PetPupil = __webpack_require__(10);

var _PetPupil2 = _interopRequireDefault(_PetPupil);

var _Teacher = __webpack_require__(11);

var _Teacher2 = _interopRequireDefault(_Teacher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameMap = function () {
    function GameMap(game) {
        _classCallCheck(this, GameMap);

        this.game = game;

        _global2.default.area = new Phaser.Rectangle(Math.floor((window.innerWidth - _global2.default.areaW) / 2), Math.floor((window.innerHeight - _global2.default.areaH) / 2), _global2.default.areaW, _global2.default.areaH);

        this.teacherAreaHeight = 190;

        this.wallH = 160;
        // this.wallSpr = this.game.add.sprite(g.area.left, g.area.top, 'pixel');
        // this.wallSpr.width = g.areaW;
        // this.wallSpr.height = this.wallH;
        // this.wallSpr.tint = 0xAA0606;

        this.boardSpr = this.game.add.sprite(_global2.default.area.left + _global2.default.area.width / 2, 10, 'blackboard');
        this.boardSpr.anchor.setTo(0.5, 0);
        this.boardSpr.scale.setTo(0.5);

        // this.areaSpr = this.game.add.sprite(g.area.topLeft.x, g.area.topLeft.y, 'pixel');
        // this.areaSpr.width = g.areaW;
        // this.areaSpr.height = g.areaH;

        this.deskRowSize = Math.floor(_global2.default.areaW / (_global2.default.deskWidth + _global2.default.deskGap));
        var deskRowWidth = this.deskRowSize * _global2.default.deskWidth + (this.deskRowSize - 1) * _global2.default.deskGap;
        _global2.default.startXOffset = (_global2.default.areaW - deskRowWidth) / 2;

        this.deskColSize = Math.floor((_global2.default.areaH - this.teacherAreaHeight) / (_global2.default.deskHeight + _global2.default.deskGap));
        var deskColWidth = this.deskColSize * _global2.default.deskHeight + (this.deskColSize - 1) * _global2.default.deskGap;
        _global2.default.startYOffset = (_global2.default.areaH - this.teacherAreaHeight - deskColWidth) / 2;

        for (var y = 0; y < this.deskColSize; y++) {
            for (var x = 0; x < this.deskRowSize; x++) {
                this.desk = this.game.add.sprite(_global2.default.area.left + _global2.default.startXOffset + (_global2.default.deskWidth + _global2.default.deskGap) * x, _global2.default.area.bottom - _global2.default.startYOffset - (_global2.default.deskHeight + _global2.default.deskGap) * y, 'table');
                this.desk.anchor.setTo(0, 1);
                this.desk.scale.setTo(0.5);
                // this.desk.width = g.deskSize;
                // this.desk.height = g.deskSize;
                // this.desk.tint = 0x000000;
            }
        }
        this.generatePupils();

        this.teacher = new _Teacher2.default(this.game, _global2.default.area.left + _global2.default.area.width / 2, this.teacherAreaHeight + 20);
        this.meterText = this.game.add.text(0, 0, _global2.default.meter);
    }

    _createClass(GameMap, [{
        key: 'generatePupils',
        value: function generatePupils() {
            this.pupils = [];
            for (var y = 0; y < this.deskColSize; y++) {
                var row = [];
                for (var x = 0; x < this.deskRowSize; x++) {
                    if (this.game.rnd.integerInRange(0, 100) > 80) {
                        row.push(new _EmptyPupil2.default(this.game, x, y));
                    } else {
                        row.push(new _NeutralPupil2.default(this.game, x, y));
                    }
                }
                this.pupils.push(row);
            }
            this.giveInitialNote();

            // Generate bullies
            for (var n = 0; n < 2; n++) {
                var _x = this.game.rnd.integerInRange(1, this.deskRowSize - 2);
                var _y = this.game.rnd.integerInRange(1, this.deskColSize - 2);

                if (this.pupils[_y][_x].spr.destroy) {
                    this.pupils[_y][_x].spr.destroy();
                }
                this.pupils[_y][_x] = new _BullyPupil2.default(this.game, _x, _y);
            }

            // Generate teacher pet
            for (var _n = 0; _n < 1; _n++) {
                var _x2 = this.game.rnd.integerInRange(1, this.deskRowSize - 2);
                var _y2 = this.game.rnd.integerInRange(1, this.deskColSize - 2);

                if (this.pupils[_y2][_x2].spr.destroy) {
                    this.pupils[_y2][_x2].spr.destroy();
                }
                this.pupils[_y2][_x2] = new _PetPupil2.default(this.game, _x2, _y2);
            }

            console.log(this.pupils);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this = this;

            for (var y = 0; y < this.pupils.length; y++) {
                for (var x = 0; x < this.pupils[0].length; x++) {
                    if (this.pupils[y][x].update) {
                        this.pupils[y][x].update();
                    }
                }
            }
            this.shouldPassPaper();
            this.teacher.update();
            this.meterText.text = _global2.default.meter;

            if (_global2.default.win) {
                var winTimer = this.game.time.create(true);
                winTimer.add(Phaser.Timer.SECOND * 1, function () {
                    console.log('change to win state');
                    _this.game.state.start('win', true, false);
                }, this);
                winTimer.start();
                _global2.default.win = false;
            }
        }
    }, {
        key: 'giveInitialNote',
        value: function giveInitialNote() {
            if (this.game.rnd.integerInRange(0, 100) > 50) {
                // Bottom left hero
                this.pupils[0][0].spr.destroy();
                this.pupils[0][0] = new _NeutralPupil2.default(this.game, 0, 0, 'hero');
                this.pupils[0][0].givePaper();

                // Top right target
                this.pupils[this.deskColSize - 1][this.deskRowSize - 1].spr.destroy();
                this.pupils[this.deskColSize - 1][this.deskRowSize - 1] = new _NeutralPupil2.default(this.game, this.deskRowSize - 1, this.deskColSize - 1, 'target');
            } else {
                // Bottom right hero
                this.pupils[0][this.deskRowSize - 1].spr.destroy();
                this.pupils[0][this.deskRowSize - 1] = new _NeutralPupil2.default(this.game, this.deskRowSize - 1, 0, 'hero');
                this.pupils[0][this.deskRowSize - 1].givePaper();

                // Top left target
                this.pupils[this.deskColSize - 1][0].spr.destroy();
                this.pupils[this.deskColSize - 1][0] = new _NeutralPupil2.default(this.game, 0, this.deskColSize - 1, 'target');
            }
        }
    }, {
        key: 'shouldPassPaper',
        value: function shouldPassPaper() {
            if (_global2.default.droppedPoint) {
                for (var y = 0; y < this.pupils.length; y++) {
                    for (var x = 0; x < this.pupils[0].length; x++) {
                        if (this.pupils[y][x].check && this.pupils[y][x].givePaper) {
                            if (this.pupils[y][x].check(_global2.default.droppedPoint.x, _global2.default.droppedPoint.y)) {
                                _global2.default.activePupil.takePaper();
                                this.pupils[y][x].givePaper();
                            }
                        }
                    }
                }
                _global2.default.droppedPoint = null;
            }
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

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

var _ArmManager = __webpack_require__(8);

var _ArmManager2 = _interopRequireDefault(_ArmManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NeutralPupil = function () {
    function NeutralPupil(game, iX, iY, type) {
        _classCallCheck(this, NeutralPupil);

        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        var x = _global2.default.area.left + _global2.default.startXOffset + (_global2.default.deskWidth + _global2.default.deskGap) * iX - _global2.default.deskGap + _global2.default.deskWidth / 2 - 10;
        var y = _global2.default.area.bottom - _global2.default.startYOffset - (_global2.default.deskHeight + _global2.default.deskGap) * iY - _global2.default.deskGap + 38;

        var key = this.game.rnd.integerInRange(0, 100) > 50 ? 'generic_boy_1' : 'generic_girl_1';
        if (type === 'hero') {
            this.hero = true;
            key = this.game.rnd.integerInRange(0, 100) > 50 ? 'hero_boy_1' : 'hero_boy_1';
        } else if (type === 'target') {
            this.target = true;
            key = this.game.rnd.integerInRange(0, 100) > 50 ? 'target_boy_1' : 'target_boy_1';
        }

        this.spr = this.game.add.sprite(x, y, key);
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);

        this.coll = new Phaser.Rectangle(x, y - this.spr.height + 5, this.spr.width, this.spr.height - 25);
        this.armManager = new _ArmManager2.default(this.coll, this.game, this, this.spr.centerX, this.spr.centerY);

        // this.game.debug.geom(this.coll);

        // this.high = new Phaser.Sprite(this.game, 0, 0, 'generic_boy_1');
        // this.high.anchor.setTo(0.5);
        // this.high.scale.setTo(1.1);
        // this.high.tint = 0xFFFFFF;
        // this.high.alpha = 0.8;
        // this.spr.addChild(this.high);
    }

    _createClass(NeutralPupil, [{
        key: 'update',
        value: function update() {
            this.armManager.update();
        }
    }, {
        key: 'select',
        value: function select() {}
    }, {
        key: 'check',
        value: function check(x, y) {
            return this.coll.contains(x, y);
        }
    }, {
        key: 'highlight',
        value: function highlight(_highlight) {
            if (_highlight) {
                this.spr.tint = 0xAAAAAA;
            } else {
                this.spr.tint = 0xFFFFFF;
            }
        }
    }, {
        key: 'givePaper',
        value: function givePaper() {
            this.highlight(true);
            this.paper = true;
            _global2.default.activePupil = this;
            if (this.target) {
                _global2.default.win = true; // !!
            }
        }
    }, {
        key: 'takePaper',
        value: function takePaper() {
            this.highlight(false);
            this.paper = false;
        }
    }, {
        key: 'hasPaper',
        value: function hasPaper() {
            return this.paper;
        }
    }, {
        key: 'isSelectable',
        value: function isSelectable() {
            return true;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            return this.speed;
        }
    }, {
        key: 'getNoise',
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

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmptyPupil = function () {
    function EmptyPupil(game, iX, iY) {
        _classCallCheck(this, EmptyPupil);

        this.game = game;
        var x = _global2.default.area.left + _global2.default.startXOffset + (_global2.default.deskWidth + _global2.default.deskGap) * iX - _global2.default.deskGap + _global2.default.deskWidth / 2 - 4;
        var y = _global2.default.area.bottom - _global2.default.startYOffset - (_global2.default.deskHeight + _global2.default.deskGap) * iY - _global2.default.deskGap + 42;
        this.spr = this.game.add.sprite(x, y, 'chair');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);
    }

    _createClass(EmptyPupil, [{
        key: 'update',
        value: function update() {}
    }, {
        key: 'select',
        value: function select() {}
    }, {
        key: 'check',
        value: function check(x, y) {}
    }, {
        key: 'highlight',
        value: function highlight(_highlight) {}
    }, {
        key: 'isSelectable',
        value: function isSelectable() {
            return false;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {}
    }, {
        key: 'getNoise',
        value: function getNoise() {}
    }]);

    return EmptyPupil;
}();

module.exports = EmptyPupil;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArmManager = function () {
    function ArmManager(parent, game, pupil, startX, startY) {
        _classCallCheck(this, ArmManager);

        this.parent = new Phaser.Rectangle(parent.left, parent.top, parent.width, parent.height);
        this.parent.uid = Math.floor(Math.random() * 1000);
        this.game = game;
        this.pupil = pupil;
        this.startPos = new Phaser.Point(startX, startY);

        this.spr = this.game.add.sprite(startX, startY, 'pixel');
        this.spr.width = 8;
        this.spr.height = 2;
        this.spr.anchor.setTo(0.5, 1);
        this.spr.tint = 0x000000;
        this.spr.visible = false;

        this.active = false;
    }

    _createClass(ArmManager, [{
        key: 'update',
        value: function update() {
            if (!this.pupil.hasPaper()) {
                return;
            }

            var mousePos = new Phaser.Point(this.game.input.activePointer.x, this.game.input.activePointer.y);
            var isDown = this.game.input.activePointer.leftButton.isDown;

            if (!this.active && !_global2.default.armActive) {
                if (this.parent.contains(mousePos.x, mousePos.y) && isDown) {
                    this.setArmLength(mousePos);
                    this.setArmAngle(mousePos);
                    this.toggleActive(true);
                    console.log('line active');
                }
            } else {
                this.setArmLength(mousePos);
                this.setArmAngle(mousePos);

                _global2.default.meter += 0.1;

                if (!isDown && this.active) {
                    this.toggleActive(false);
                    var endX = this.startPos.x + this.spr.height * Math.cos(this.spr.rotation - _global2.default.radiansOffset);
                    var endY = this.startPos.y + this.spr.height * Math.sin(this.spr.rotation - _global2.default.radiansOffset);
                    _global2.default.droppedPoint = new Phaser.Point(endX, endY);
                    console.log('line release');
                }
            }
            this.spr.bringToTop();
        }
    }, {
        key: 'setArmLength',
        value: function setArmLength(pos) {
            var length = Math.floor(Phaser.Math.distance(this.startPos.x, this.startPos.y, pos.x, pos.y));
            if (length < 0) {
                length = 0;
            } else if (length > _global2.default.maxArmLength) {
                length = _global2.default.maxArmLength;
            }
            this.spr.height = length;
        }
    }, {
        key: 'setArmAngle',
        value: function setArmAngle(pos) {
            this.spr.rotation = Phaser.Point.angle(this.startPos, pos) - _global2.default.radiansOffset;
        }
    }, {
        key: 'toggleActive',
        value: function toggleActive(active) {
            this.active = active;
            this.spr.visible = active;
            _global2.default.armActive = active;
        }
    }]);

    return ArmManager;
}();

module.exports = ArmManager;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BullyPupil = function () {
    function BullyPupil(game, iX, iY) {
        _classCallCheck(this, BullyPupil);

        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        var x = _global2.default.area.left + _global2.default.startXOffset + (_global2.default.deskWidth + _global2.default.deskGap) * iX - _global2.default.deskGap + _global2.default.deskWidth / 2 - 17;
        var y = _global2.default.area.bottom - _global2.default.startYOffset - (_global2.default.deskHeight + _global2.default.deskGap) * iY - _global2.default.deskGap + 38;

        this.spr = this.game.add.sprite(x, y, 'bully');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);

        this.coll = new Phaser.Rectangle(x, y - this.spr.height + 5, this.spr.width, this.spr.height - 25);

        // this.game.debug.geom(this.coll);

        // this.high = new Phaser.Sprite(this.game, 0, 0, 'generic_boy_1');
        // this.high.anchor.setTo(0.5);
        // this.high.scale.setTo(1.1);
        // this.high.tint = 0xFFFFFF;
        // this.high.alpha = 0.8;
        // this.spr.addChild(this.high);
    }

    _createClass(BullyPupil, [{
        key: 'update',
        value: function update() {}
    }, {
        key: 'select',
        value: function select() {}
    }, {
        key: 'check',
        value: function check(x, y) {
            return this.coll.contains(x, y);
        }
    }, {
        key: 'highlight',
        value: function highlight(_highlight) {
            if (_highlight) {
                this.spr.tint = 0xAAAAAA;
            } else {
                this.spr.tint = 0xFFFFFF;
            }
        }
    }, {
        key: 'hasPaper',
        value: function hasPaper() {
            return this.paper;
        }
    }, {
        key: 'isSelectable',
        value: function isSelectable() {
            return false;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            return this.speed;
        }
    }, {
        key: 'getNoise',
        value: function getNoise() {
            return this.game.rnd.integerInRange(this.noiseRange[0], this.noiseRange[1]);
        }
    }]);

    return BullyPupil;
}();

module.exports = BullyPupil;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PetPupil = function () {
    function PetPupil(game, iX, iY) {
        _classCallCheck(this, PetPupil);

        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        var x = _global2.default.area.left + _global2.default.startXOffset + (_global2.default.deskWidth + _global2.default.deskGap) * iX - _global2.default.deskGap + _global2.default.deskWidth / 2 - 12;
        var y = _global2.default.area.bottom - _global2.default.startYOffset - (_global2.default.deskHeight + _global2.default.deskGap) * iY - _global2.default.deskGap + 38;

        this.spr = this.game.add.sprite(x, y, 'teachers_pet');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);

        this.coll = new Phaser.Rectangle(x, y - this.spr.height + 5, this.spr.width, this.spr.height - 25);

        // this.game.debug.geom(this.coll);
    }

    _createClass(PetPupil, [{
        key: 'update',
        value: function update() {}
    }, {
        key: 'select',
        value: function select() {}
    }, {
        key: 'check',
        value: function check(x, y) {
            return this.coll.contains(x, y);
        }
    }, {
        key: 'highlight',
        value: function highlight(_highlight) {
            if (_highlight) {
                this.spr.tint = 0xAAAAAA;
            } else {
                this.spr.tint = 0xFFFFFF;
            }
        }
    }, {
        key: 'isSelectable',
        value: function isSelectable() {
            return true;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            return this.speed;
        }
    }, {
        key: 'getNoise',
        value: function getNoise() {
            return this.game.rnd.integerInRange(this.noiseRange[0], this.noiseRange[1]);
        }
    }]);

    return PetPupil;
}();

module.exports = PetPupil;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Teacher = function () {
    function Teacher(game, x, y) {
        var _this = this;

        _classCallCheck(this, Teacher);

        this.game = game;
        this.spr = this.game.add.sprite(x, y, 'teacher', 0);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        this.aniTurn = this.spr.animations.add('turn', [1, 5, 5, 2], 2, false);
        this.aniTurn.onComplete.add(function () {
            var waitTimer = _this.game.time.create(true);
            waitTimer.add(Phaser.Timer.SECOND * 5, function () {
                console.log('waitTurner complete');
                for (var i = 0; i < _this.game.rnd.integerInRange(1, 3); i++) {
                    _this.lowerMeter();
                }
                _this.aniTurn.stop();
                _this.aniChalk.play('chalk');
                if (_this.turnTimer) {
                    // this.turnTimer.destory();
                    console.log(_this.turnTimer);
                }
                _this.turnTimer = undefined;
            }, _this);
            waitTimer.start();
            console.log('waitTimer start');
        });

        this.aniChalk = this.spr.animations.add('chalk', [0, 1], 2, true);
        this.aniChalk.play('chalk');

        this.startPhase = true;

        this.startTimer = this.game.time.create(true);
        this.startTimer.add(Phaser.Timer.SECOND * 6, function () {
            console.log('startTimer complete');
            _this.startPhase = false;
        }, this);
        this.startTimer.start();

        console.log('startTimer start');
    }

    _createClass(Teacher, [{
        key: 'update',
        value: function update() {
            var _this2 = this;

            if (!this.startPhase) {
                if (!this.turnTimer) {

                    this.turnTimer = this.game.time.create(true);
                    this.turnTimer.add(Phaser.Timer.SECOND * 3, function () {
                        console.log('turnTimer complete');
                        _this2.turn();
                    }, this);
                    this.turnTimer.start();

                    console.log('turnTimer start');
                }
            }
            if (_global2.default.meter >= 100) {
                // Exclamantion point
                turn();
            }
        }
    }, {
        key: 'turn',
        value: function turn() {
            console.log('turning');
            if (this.turnTimer) {
                this.turnTimer.stop();
            }
            this.aniChalk.stop();
            this.aniTurn.play('turn');
        }
    }, {
        key: 'lowerMeter',
        value: function lowerMeter() {
            _global2.default.meter -= 5;
            if (_global2.default.meter < 0) {
                _global2.default.meter = 0;
            }
        }
    }]);

    return Teacher;
}();

module.exports = Teacher;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateWin = function (_Phaser$State) {
    _inherits(StateWin, _Phaser$State);

    function StateWin() {
        _classCallCheck(this, StateWin);

        return _possibleConstructorReturn(this, (StateWin.__proto__ || Object.getPrototypeOf(StateWin)).call(this));
    }

    _createClass(StateWin, [{
        key: 'init',
        value: function init() {
            this.game.stage.disableVisibilityChange = true;
            this.game.renderer.clearBeforeRender = false;
            this.game.renderer.renderSession.roundPixels = true;
            this.game.input.mouse.capture = true;
            this.game.input.keyboard.onDownCallback = undefined;
        }
    }, {
        key: 'create',
        value: function create() {
            var hello = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Win');
            hello.anchor.setTo(0.5);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'preload',
        value: function preload() {}
    }, {
        key: 'resize',
        value: function resize() {
            this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StateWin;
}(Phaser.State);

module.exports = StateWin;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateLose = function (_Phaser$State) {
    _inherits(StateLose, _Phaser$State);

    function StateLose() {
        _classCallCheck(this, StateLose);

        return _possibleConstructorReturn(this, (StateLose.__proto__ || Object.getPrototypeOf(StateLose)).call(this));
    }

    _createClass(StateLose, [{
        key: 'init',
        value: function init() {
            this.game.stage.disableVisibilityChange = true;
            this.game.renderer.clearBeforeRender = false;
            this.game.renderer.renderSession.roundPixels = true;
            this.game.input.mouse.capture = true;
            this.game.input.keyboard.onDownCallback = undefined;
        }
    }, {
        key: 'create',
        value: function create() {
            var hello = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Lose');
            hello.anchor.setTo(0.5);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'preload',
        value: function preload() {}
    }, {
        key: 'resize',
        value: function resize() {
            this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StateLose;
}(Phaser.State);

module.exports = StateLose;

/***/ })
/******/ ]);