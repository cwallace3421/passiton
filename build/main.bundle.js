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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var global = {
    areaW: 780,
    areaH: 560,
    deskWidth: 154 / 2,
    deskHeight: 136 / 2,
    deskGapVert: 18,
    deskGapHort: 22,
    area: null,
    startXOffset: null,
    startYOffset: null,
    armActive: false,
    radiansOffset: Phaser.Math.degToRad(90),
    maxArmLength: 110,
    droppedPoint: null,
    currentPoint: null,
    activePupil: null,
    meter: 0,
    win: false,
    lose: false,
    armGrp: null,
    envGrp: null,
    classGrp: null,
    topGrp: null,
    bullyStopArm: false,
    petStopArm: false,
    passToFromIndex: null,

    noInput: false,

    bullyNoise: 20,
    armNoise: 0.3,
    passiveSilence: 0.01,

    soundBackground: null,
    soundTeacherScream: null,
    soundTeacherTalk: null,
    soundPetScream: null,
    soundBullyGrunts: null,
    soundPassPaper: null
};

exports.default = global;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'deskXYIndexToXYPoint',
        value: function deskXYIndexToXYPoint(iX, iY) {
            var x = _global2.default.area.left + _global2.default.startXOffset + (_global2.default.deskWidth + _global2.default.deskGapHort) * iX;
            var y = _global2.default.area.bottom - _global2.default.startYOffset - (_global2.default.deskHeight + _global2.default.deskGapVert) * iY + _global2.default.deskHeight / 3;
            return new Phaser.Point(x, y);
        }
    }]);

    return Utils;
}();

module.exports = Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlertManager = function () {
    function AlertManager() {
        _classCallCheck(this, AlertManager);
    }

    _createClass(AlertManager, null, [{
        key: 'pingAlert',
        value: function pingAlert(game, x, y, offsetx, offsety) {
            var _this = this;

            var showTime = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

            var spr = game.add.sprite(x + offsetx + 4, y + offsety, 'alert');
            spr.anchor.setTo(0.5, 1);
            _global2.default.topGrp.add(spr);
            var heightOrg = spr.height;
            spr.height = 0;
            var tween = game.add.tween(spr).to({ height: heightOrg }, 100, 'Linear', true);
            tween.onComplete.add(function () {
                var clearTimer = game.time.create(true);
                clearTimer.add(Phaser.Timer.SECOND * showTime, function () {
                    spr.destroy();
                }, _this);
                clearTimer.start();
            }, this);
        }
    }]);

    return AlertManager;
}();

module.exports = AlertManager;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScaleManager = function () {
    function ScaleManager() {
        _classCallCheck(this, ScaleManager);

        this.isFullScreen = false;
        this.hasRecalcuated = true;
        this.createToggle();
    }

    _createClass(ScaleManager, [{
        key: "createToggle",
        value: function createToggle() {
            var _this = this;

            window.game.input.onTap.add(function (pointer, doubleTap) {
                // if (doubleTap && !this.isFullScreen) {
                //     window.game.scale.startFullScreen(true, false);
                //     window.game.scale.refresh();
                // } else if (doubleTap) {
                //     window.game.scale.stopFullScreen();
                //     window.game.scale.refresh();
                // }
            }, this);
            window.game.scale.onFullScreenChange.add(function (scale) {
                _this.toggleFullScreen(scale.isFullScreen);
            }, this);
        }
    }, {
        key: "fillScreen",
        value: function fillScreen() {
            if (window.game.scale.width !== window.screen.availWidth) {
                window.game.scale.setMinMax(0, 0, window.screen.availWidth, window.screen.availHeight);
                window.game.scale.setGameSize(Math.ceil(window.screen.availWidth * window.game.scale.scaleFactor.x), 1280);
                window.game.scale.refresh();
            } else {
                window.game.scale.setMinMax(0, 0, window.screen.availWidth, window.screen.availHeight);
                window.game.scale.setGameSize(720, 1280);
                window.game.scale.refresh();
            }
        }
    }, {
        key: "toggleFullScreen",
        value: function toggleFullScreen(fullscreen) {
            this.hasRecalcuated = fullscreen !== this.isFullScreen;
            this.isFullScreen = fullscreen;
        }
    }, {
        key: "update",
        value: function update() {
            if (!this.hasRecalcuated) {
                this.fillScreen(game);
                this.hasRecalcuated = true;
            }
        }
    }, {
        key: "isFullScreen",
        value: function isFullScreen() {
            return this.isFullScreen;
        }
    }]);

    return ScaleManager;
}();

module.exports = ScaleManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _StateMenu = __webpack_require__(5);

var _StateMenu2 = _interopRequireDefault(_StateMenu);

var _StatePlay = __webpack_require__(6);

var _StatePlay2 = _interopRequireDefault(_StatePlay);

var _StateWin = __webpack_require__(20);

var _StateWin2 = _interopRequireDefault(_StateWin);

var _StateLose = __webpack_require__(21);

var _StateLose2 = _interopRequireDefault(_StateLose);

var _ScaleManager = __webpack_require__(3);

var _ScaleManager2 = _interopRequireDefault(_ScaleManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 720, 1280, Phaser.AUTO, null, null, false, true));

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _ScaleManager = __webpack_require__(3);

var _ScaleManager2 = _interopRequireDefault(_ScaleManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            window.m = {};
            window.m.scale = new _ScaleManager2.default();
        }
    }, {
        key: 'create',
        value: function create() {
            window.m.scale.toggleFullScreen(false);

            // const startGameKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            // startGameKey.onUp.add(function() {
            //     this.game.state.start('play', true);
            // }, this);

            // this.game.stage.backgroundColor = 0x000000;

            // g.area = new Phaser.Rectangle(Math.floor((window.innerWidth - g.areaW) / 2), Math.floor((window.innerHeight - g.areaH) / 2), g.areaW, g.areaH);
            // this.state = 0;
            // this.introSpr = this.game.add.sprite(g.area.left, g.area.top, 'title');
            // this.introSpr.visible = false;
            // this.infoOneSpr = this.game.add.sprite(g.area.left, g.area.top, 'info_1');
            // this.infoOneSpr.visible = false;
            // this.infoTwoSpr = this.game.add.sprite(g.area.left, g.area.top, 'info_2');
            // this.infoTwoSpr.visible = false;

            // g.soundBackground = this.game.sound.play('background_music', 0.4, true);
        }
    }, {
        key: 'update',
        value: function update() {
            this.game.state.start('play', true);
            window.m.scale.update();
            // this.game.input.keyboard.onUpCallback = (event) => {
            //     // this.state++;
            //     console.log(this.state);
            // };

            // if (this.state === 0) {
            //     this.introSpr.visible = true;
            // } else if (this.state === 1) {
            //     this.introSpr.visible = false;
            //     this.infoOneSpr.visible = true;
            // } else if (this.state === 2) {
            //     this.infoOneSpr.visible = false;
            //     this.infoTwoSpr.visible = true;
            // } else if (this.state >= 3) {
            //     this.game.state.start('play', true);
            // }
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.game.load.image('title', 'assets/intro.png');
            this.game.load.image('info_1', 'assets/howtoplay_1.png');
            this.game.load.image('info_2', 'assets/howtoplay_2.png');

            this.game.load.image('pixel', 'assets/pixel.png');

            this.game.load.image('table', 'assets/table.png');
            this.game.load.image('blackboard', 'assets/blackboard.png');
            this.game.load.image('meter_board', 'assets/meter_board.png');
            this.game.load.image('teachers_desk', 'assets/teachers_desk.png');

            this.game.load.image('arm', 'assets/arm.png');
            this.game.load.image('hand', 'assets/hand.png');
            this.game.load.spritesheet('beatup', 'assets/beatup/beatup_spritesheet.png', 150, 150);

            this.game.load.spritesheet('pupils', 'assets/pupil_spritesheet.png', 156, 256);
            this.game.load.spritesheet('teacher', 'assets/teacher_spritesheet.png', 180, 280);

            this.game.load.image('alert', 'assets/alert.png');
            this.game.load.image('success', 'assets/success.png');
            this.game.load.image('failure', 'assets/detention.png');

            game.load.audio('background_music', ['assets/sounds/professor_umlaut.mp3']);
            game.load.audio('crunchy', ['assets/sounds/crunchy.mp3']);
            game.load.audio('scream_pet', ['assets/sounds/screm_pet.mp3']);
            game.load.audio('scream_teacher', ['assets/sounds/screm_teacher.mp3']);
            game.load.audio('teacher_talk', ['assets/sounds/teacher_talk.mp3']);
            game.load.audio('bully_grunts', ['assets/sounds/bully_grunts.mp3']);
        }
    }, {
        key: 'resize',
        value: function resize() {
            // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StateMenu;
}(Phaser.State);

exports.default = StateMenu;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _GameMap = __webpack_require__(7);

var _GameMap2 = _interopRequireDefault(_GameMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatePlay = function (_Phaser$State) {
    _inherits(StatePlay, _Phaser$State);

    function StatePlay() {
        _classCallCheck(this, StatePlay);

        var _this = _possibleConstructorReturn(this, (StatePlay.__proto__ || Object.getPrototypeOf(StatePlay)).call(this));

        _this.isFullscreen = false;
        _this.message = '';
        return _this;
    }

    _createClass(StatePlay, [{
        key: 'init',
        value: function init() {
            this.game.stage.disableVisibilityChange = true;
            this.game.renderer.clearBeforeRender = false;
            this.game.renderer.renderSession.roundPixels = true;
            window.m.scale.createToggle();
        }
    }, {
        key: 'create',
        value: function create() {
            _global2.default.armGrp = this.game.add.group();
            _global2.default.envGrp = this.game.add.group();
            _global2.default.classGrp = this.game.add.group();
            _global2.default.topGrp = this.game.add.group();
            this.gameMap = new _GameMap2.default(this.game);
        }
    }, {
        key: 'update',
        value: function update() {
            this.game.world.sort('y', Phaser.Group.SORT_ASCENDING);
            this.game.world.sendToBack(_global2.default.envGrp);
            this.game.world.bringToTop(_global2.default.armGrp);
            this.game.world.bringToTop(_global2.default.topGrp);
            this.gameMap.update();

            window.m.scale.update();
        }
    }, {
        key: 'preload',
        value: function preload() {}
    }, {
        key: 'resize',
        value: function resize() {
            // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StatePlay;
}(Phaser.State);

exports.default = StatePlay;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _PupilMap = __webpack_require__(8);

var _PupilMap2 = _interopRequireDefault(_PupilMap);

var _Teacher = __webpack_require__(16);

var _Teacher2 = _interopRequireDefault(_Teacher);

var _Meter = __webpack_require__(17);

var _Meter2 = _interopRequireDefault(_Meter);

var _LevelManager = __webpack_require__(18);

var _LevelManager2 = _interopRequireDefault(_LevelManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameMap = function () {
    function GameMap(game) {
        _classCallCheck(this, GameMap);

        this.game = game;

        this.wallSpr = this.game.add.sprite(0, 0, 'pixel');
        this.wallSpr.width = this.game.width;
        this.wallSpr.height = 350;
        this.wallSpr.tint = 0xFCFBE3;
        _global2.default.envGrp.add(this.wallSpr);

        this.teacherFloorSpr = this.game.add.sprite(0, this.wallSpr.height, 'pixel');
        this.teacherFloorSpr.width = this.game.width;
        this.teacherFloorSpr.height = this.wallSpr.height + 150;
        this.teacherFloorSpr.tint = 0xDDAACC;
        _global2.default.envGrp.add(this.teacherFloorSpr);

        _global2.default.classGrp.position.x = 0;
        _global2.default.classGrp.position.y = this.teacherFloorSpr.height;
        this.classFloorSpr = this.game.add.sprite(0, 0, 'pixel');
        this.classFloorSpr.width = this.game.width;
        this.classFloorSpr.height = this.game.height - _global2.default.classGrp.position.y;
        this.classFloorSpr.tint = 0xAAAAAA;
        _global2.default.classGrp.add(this.classFloorSpr);

        var level = _LevelManager2.default.getLevel();
        console.log(level);

        var deskWidth = 154;
        var deskHeight = 136;
        var deskGapX = deskWidth + 56;
        var deskGapY = deskHeight + 36;
        var edgeGapX = 148;
        var edgeGapY = 72;

        var classWidth = deskGapX * level[0].length - deskGapX + edgeGapX * 2;
        this.classFloorSpr.width = classWidth;

        // Dirty copy of level map
        var deskPositions = JSON.parse(JSON.stringify(level));
        for (var y = deskPositions.length - 1; y >= 0; y--) {
            for (var x = 0; x < deskPositions[y].length; x++) {
                var posX = edgeGapX + x * deskGapX;
                var posY = this.classFloorSpr.height - (edgeGapY + y * deskGapY);

                var desk = this.game.add.sprite(posX, posY, 'table');
                desk.anchor.setTo(0.5, 1);
                _global2.default.classGrp.add(desk);

                deskPositions[y][x] = {
                    x: posX,
                    y: posY
                };
            }
        }

        this.pupils = JSON.parse(JSON.stringify(level));
        var count = 0;
        for (var _y = this.pupils.length - 1; _y >= 0; _y--) {
            for (var _x = 0; _x < this.pupils[_y].length; _x++) {
                count++;
                var type = this.pupils[_y][_x];
                var pos = deskPositions[_y][_x];
                this.pupils[_y][_x] = new _PupilMap2.default.classes[type](window.game, pos.x, pos.y);
            }
        }
        console.log(this.pupils);
        console.log(count);

        this.boardSpr = this.game.add.sprite(this.game.width / 2, 30, 'blackboard');
        this.boardSpr.anchor.setTo(0.5, 0);
        _global2.default.envGrp.add(this.boardSpr);

        this.meterObj = new _Meter2.default(this.game, this.boardSpr.x + this.boardSpr.width / 2 + 6, 45);
        this.teacher = new _Teacher2.default(this.game, this.game.width / 2, this.wallSpr.height + 50);

        this.createClassScroll();

        // this.teacherZoneHeight = 190;

        // this.wallH = 160;
        // this.wallSpr = this.game.add.sprite(g.area.left, g.area.top, 'pixel');
        // this.wallSpr.width = g.areaW;
        // this.wallSpr.height = this.wallH;
        // this.wallSpr.tint = 0xFCFBE3;
        // g.envGrp.add(this.wallSpr);

        // this.floorSpr = this.game.add.sprite(g.area.left, g.area.top + this.wallH, 'pixel');
        // this.floorSpr.width = g.areaW;
        // this.floorSpr.height = g.area.height - this.wallH;
        // this.floorSpr.tint = 0xAAAAAA;
        // g.envGrp.add(this.floorSpr);

        // this.boardSpr = this.game.add.sprite(g.area.left + (g.area.width / 2), g.area.top + 4, 'blackboard');
        // this.boardSpr.anchor.setTo(0.5, 0);
        // this.boardSpr.scale.setTo(0.5);
        // g.envGrp.add(this.boardSpr);

        // this.teachersDeskSpr = this.game.add.sprite(g.area.right - 125, g.area.top + this.wallH + 40, 'teachers_desk');
        // this.teachersDeskSpr.anchor.setTo(0.5, 1);
        // this.teachersDeskSpr.scale.setTo(0.5);
        // g.envGrp.add(this.teachersDeskSpr);

        // this.meterObj = new Meter(this.game, this.boardSpr.x + (this.boardSpr.width / 2) + 6, g.area.top + 11);


        // this.deskRowSize = Math.floor(g.area.width / (g.deskWidth + g.deskGapHort));
        // const deskRowWidth = (this.deskRowSize * g.deskWidth) + ((this.deskRowSize - 1) * g.deskGapHort);
        // g.startXOffset = (g.area.width - deskRowWidth) / 2 + (g.deskWidth / 2);

        // this.deskColSize = Math.floor((g.area.height - this.teacherZoneHeight) / (g.deskHeight + g.deskGapVert));
        // const deskColWidth = (this.deskColSize * g.deskHeight) + ((this.deskColSize - 1) * g.deskGapVert);
        // g.startYOffset = (((g.area.height - this.teacherZoneHeight) - deskColWidth) / 2) + 8;

        // for (let y = 0; y < this.deskColSize; y++) {
        //     for (let x = 0; x < this.deskRowSize; x++) {
        //         const desk = this.game.add.sprite(
        //             g.area.left + g.startXOffset + ((g.deskWidth + g.deskGapHort) * x),
        //             g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGapVert) * y),
        //             'table');
        //         desk.anchor.setTo(0.5, 1);
        //         desk.scale.setTo(0.5);
        //     }
        // }
        // this.generatePupils();

        // this.teacher = new Teacher(this.game, g.area.left + (g.area.width / 2), g.area.top + this.teacherZoneHeight);
    }

    _createClass(GameMap, [{
        key: 'createClassScroll',
        value: function createClassScroll() {
            this.classFloorSpr.savedPosition = new Phaser.Point(_global2.default.classGrp.position.x, _global2.default.classGrp.position.y);
            this.classFloorSpr.isBeingDragged = false;
            this.classFloorSpr.scrollingSpeed = 0;
            this.classFloorSpr.inputEnabled = true;
        }
    }, {
        key: 'updateClassScroll',
        value: function updateClassScroll() {
            var _this = this;

            var pointer = this.game.input.activePointer;
            if (pointer.isDown && this.classFloorSpr.getBounds().contains(pointer.x, pointer.y)) {
                this.classFloorSpr.isBeingDragged = true;
            } else {
                this.classFloorSpr.isBeingDragged = false;
            }

            var leftScrollCheck = function leftScrollCheck() {
                return _global2.default.classGrp.position.x > 0;
            };

            var rightScrollCheck = function rightScrollCheck() {
                return _global2.default.classGrp.position.x + _this.classFloorSpr.width < window.game.width;
            };

            if (this.classFloorSpr.isBeingDragged) {
                this.classFloorSpr.savedPosition = new Phaser.Point(_global2.default.classGrp.position.x, _global2.default.classGrp.position.y);
                if (!this.classFloorSpr.pointerOffsetX) {
                    this.classFloorSpr.pointerOffsetX = pointer.x - _global2.default.classGrp.position.x;
                }
                _global2.default.classGrp.position.x = pointer.x - this.classFloorSpr.pointerOffsetX;
                if (leftScrollCheck()) {
                    _global2.default.classGrp.position.x = 0;
                    this.classFloorSpr.pointerOffsetX = pointer.x - _global2.default.classGrp.position.x;
                }
                if (rightScrollCheck()) {
                    _global2.default.classGrp.position.x = -(this.classFloorSpr.width - this.game.width);
                    this.classFloorSpr.pointerOffsetX = pointer.x - _global2.default.classGrp.position.x;
                }
            } else {
                if (this.classFloorSpr.scrollingSpeed > 1) {
                    _global2.default.classGrp.position.x += this.classFloorSpr.scrollingSpeed * Math.cos(this.classFloorSpr.scrollingAngle);
                    if (leftScrollCheck()) {
                        _global2.default.classGrp.position.x = 0;
                    }
                    if (rightScrollCheck()) {
                        _global2.default.classGrp.position.x = -(this.classFloorSpr.width - this.game.width);
                    }
                    this.classFloorSpr.scrollingSpeed *= 0.8;
                    this.classFloorSpr.savedPosition = new Phaser.Point(_global2.default.classGrp.position.x, _global2.default.classGrp.position.y);
                } else {
                    var distance = this.classFloorSpr.savedPosition.distance(_global2.default.classGrp.position);
                    var angle = this.classFloorSpr.savedPosition.angle(_global2.default.classGrp.position);
                    if (distance > 4) {
                        this.classFloorSpr.scrollingSpeed = distance * 2.5;
                        this.classFloorSpr.scrollingAngle = angle;
                    }
                }
                this.classFloorSpr.pointerOffsetX = undefined;
            }
        }
    }, {
        key: 'generatePupils',
        value: function generatePupils() {
            this.pupils = [];
            for (var y = 0; y < this.deskColSize; y++) {
                var row = [];
                for (var x = 0; x < this.deskRowSize; x++) {
                    if (this.game.rnd.integerInRange(0, 100) > 80) {
                        row.push(new EmptyPupil(this.game, x, y));
                    } else {
                        row.push(new NeutralPupil(this.game, x, y));
                    }
                }
                this.pupils.push(row);
            }
            this.giveInitialNote();

            // Generate bullies
            for (var n = 0; n < 2; n++) {
                var _x2 = this.game.rnd.integerInRange(1, this.deskRowSize - 2);
                var _y2 = this.game.rnd.integerInRange(1, this.deskColSize - 2);

                if (this.pupils[_y2][_x2].destroy) {
                    this.pupils[_y2][_x2].destroy();
                }
                this.pupils[_y2][_x2] = new BullyPupil(this.game, _x2, _y2);
            }

            // Generate teacher pet
            for (var _n = 0; _n < 1; _n++) {
                var _x3 = this.game.rnd.integerInRange(1, this.deskRowSize - 2);
                var _y3 = this.game.rnd.integerInRange(1, this.deskColSize - 2);

                if (this.pupils[_y3][_x3].destroy) {
                    this.pupils[_y3][_x3].destroy();
                }
                this.pupils[_y3][_x3] = new PetPupil(this.game, _x3, _y3);
            }

            console.log(this.pupils);
        }
    }, {
        key: 'update',
        value: function update() {
            // this.game.debug.geom(this.classFloorSpr.getBounds());
            this.updateClassScroll();
            // if (!g.noInput) {
            //     g.meter -= g.passiveSilence;
            //     if (g.meter < 0) {
            //         g.meter = 0;
            //     }
            // }

            for (var y = 0; y < this.pupils.length; y++) {
                for (var x = 0; x < this.pupils[0].length; x++) {
                    if (this.pupils[y][x].update) {
                        this.pupils[y][x].update();
                    }
                }
            }
            // this.shouldPassPaper();
            // this.teacher.update();
            // this.meterObj.update();

            // if (g.passToFromIndex) {
            //     const available = [];
            //     if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x].givePaper) {
            //         available.push(new Phaser.Point(g.passToFromIndex.x, g.passToFromIndex.y - 1));
            //     }
            //     if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x - 1].givePaper) {
            //         available.push(new Phaser.Point(g.passToFromIndex.x - 1, g.passToFromIndex.y - 1));
            //     }
            //     if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x + 1].givePaper) {
            //         available.push(new Phaser.Point(g.passToFromIndex.x + 1, g.passToFromIndex.y - 1));
            //     }
            //     const passTo = this.game.rnd.integerInRange(0, available.length - 1);
            //     this.pupils[available[passTo].y][available[passTo].x].givePaper();
            //     g.passToFromIndex = null;
            // }

            // if (g.win) {
            //     const winTimer = this.game.time.create(true);
            //     winTimer.add(Phaser.Timer.SECOND * 1, () => {
            //         console.log('change to win state');
            //         this.game.state.start('win', true, false);
            //     }, this);
            //     winTimer.start();
            //     g.win = false;
            //     g.noInput = true;
            // }

            // if (g.lose) {
            //     const loseTimer = this.game.time.create(true);
            //     loseTimer.add(Phaser.Timer.SECOND * 4, () => {
            //         console.log('change to lose state');
            //         this.game.state.start('lose', true, false);
            //     }, this);
            //     loseTimer.start();
            //     g.lose = false;
            //     g.noInput = true;
            // }
        }
    }, {
        key: 'giveInitialNote',
        value: function giveInitialNote() {
            if (this.game.rnd.integerInRange(0, 100) > 50) {
                // Bottom left hero
                this.pupils[0][0].destroy();
                this.pupils[0][0] = new NeutralPupil(this.game, 0, 0, 'hero');
                this.pupils[0][0].givePaper();

                // Top right target
                this.pupils[this.deskColSize - 1][this.deskRowSize - 1].destroy();
                this.pupils[this.deskColSize - 1][this.deskRowSize - 1] = new NeutralPupil(this.game, this.deskRowSize - 1, this.deskColSize - 1, 'target');
            } else {
                // Bottom right hero
                this.pupils[0][this.deskRowSize - 1].destroy();
                this.pupils[0][this.deskRowSize - 1] = new NeutralPupil(this.game, this.deskRowSize - 1, 0, 'hero');
                this.pupils[0][this.deskRowSize - 1].givePaper();

                // Top left target
                this.pupils[this.deskColSize - 1][0].destroy();
                this.pupils[this.deskColSize - 1][0] = new NeutralPupil(this.game, 0, this.deskColSize - 1, 'target');
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
                                _global2.default.soundPassPaper = this.game.sound.play('crunchy', 0.6, false);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BullyPupil = __webpack_require__(9);

var _BullyPupil2 = _interopRequireDefault(_BullyPupil);

var _EmptyPupil = __webpack_require__(10);

var _EmptyPupil2 = _interopRequireDefault(_EmptyPupil);

var _NeutralPupil = __webpack_require__(11);

var _NeutralPupil2 = _interopRequireDefault(_NeutralPupil);

var _PetPupil = __webpack_require__(15);

var _PetPupil2 = _interopRequireDefault(_PetPupil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classes = {
    0: _EmptyPupil2.default,
    1: _NeutralPupil2.default,
    4: _BullyPupil2.default,
    5: _PetPupil2.default
};

var types = {
    EMPTY: {
        name: 'EMPTY',
        class: 0
    },
    NEUTRAL: {
        name: 'NEUTRAL',
        class: 1
    },
    HERO: {
        name: 'HERO',
        class: undefined
    },
    TARGET: {
        name: 'TARGET',
        class: undefined
    },
    BULLY: {
        name: 'BULLY',
        class: 4
    },
    PET: {
        name: 'PET',
        class: 5
    }
};

exports.default = {
    classes: classes,
    types: types
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _AlertManager = __webpack_require__(2);

var _AlertManager2 = _interopRequireDefault(_AlertManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BullyPupil = function () {
    function BullyPupil(game, iX, iY) {
        _classCallCheck(this, BullyPupil);

        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        this.index = new Phaser.Point(iX, iY);

        var pos = _utils2.default.deskXYIndexToXYPoint(iX, iY);

        this.spr = this.game.add.sprite(pos.x, pos.y, 'pupils', 8);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        this.beatupSpr = this.game.add.sprite(-100, -100, 'beatup');
        this.beatupSpr.anchor.setTo(0.5);
        this.beatupSpr.scale.setTo(0.8);
        this.beatupSpr.visible = false;
        _global2.default.topGrp.add(this.beatupSpr);

        this.aniBeatup = this.beatupSpr.animations.add('beatup', [0, 1, 2], 4, true);
        this.aniBeatup.play('beatup');

        this.coll = new Phaser.Circle(pos.x, pos.y - this.spr.height / 2 + 10, 130);

        // this.game.debug.geom(this.coll);
    }

    _createClass(BullyPupil, [{
        key: 'destroy',
        value: function destroy() {
            this.spr.destroy();
            this.beatupSpr.destroy();
            this.coll = null;
        }
    }, {
        key: 'update',
        value: function update() {
            var _this = this;

            if (_global2.default.currentPoint && this.coll.contains(_global2.default.currentPoint.x, _global2.default.currentPoint.y) && _global2.default.armActive && !_global2.default.stopArm && !this.paper) {
                _AlertManager2.default.pingAlert(this.game, this.spr.position.x, this.spr.position.y, 0, -this.spr.height + 46);
                _global2.default.soundBullyGrunts = this.game.sound.play('bully_grunts', 0.5, false);
                _global2.default.bullyStopArm = true;
                _global2.default.meter += _global2.default.bullyNoise;
                if (_global2.default.meter > 100) {
                    _global2.default.meter = 100;
                }
                this.paper = true;
                this.toggleBeatup(true, _global2.default.currentPoint);
            }
            if (this.paper && !this.passTimer) {
                this.passTimer = this.game.time.create(true);
                this.passTimer.add(Phaser.Timer.SECOND * 2, function () {
                    console.log('bully pass timer complete');
                    _this.toggleBeatup(false);
                    _this.passTimer = undefined;
                    _global2.default.passToFromIndex = _this.index;
                }, this);
                this.passTimer.start();
                this.paper = false;
            }
        }
    }, {
        key: 'toggleBeatup',
        value: function toggleBeatup(active, point) {
            if (active) {
                this.aniBeatup.play('beatup');
                this.beatupSpr.position.x = point.x;
                this.beatupSpr.position.y = point.y;
                this.beatupSpr.visible = true;
            } else {
                this.aniBeatup.stop();
                this.beatupSpr.position.x = -100;
                this.beatupSpr.position.y = -100;
                this.beatupSpr.visible = false;
            }
        }
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
            return false;
        }
    }]);

    return BullyPupil;
}();

module.exports = BullyPupil;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Pupil3 = __webpack_require__(22);

var _Pupil4 = _interopRequireDefault(_Pupil3);

var _PupilMap = __webpack_require__(8);

var _PupilMap2 = _interopRequireDefault(_PupilMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyPupil = function (_Pupil2) {
    _inherits(EmptyPupil, _Pupil2);

    function EmptyPupil(game, x, y) {
        _classCallCheck(this, EmptyPupil);

        return _possibleConstructorReturn(this, (EmptyPupil.__proto__ || Object.getPrototypeOf(EmptyPupil)).call(this, game, _PupilMap2.default.types.Empty, x, y, 'pupils', 0));
    }

    return EmptyPupil;
}(_Pupil4.default);

module.exports = EmptyPupil;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pupil3 = __webpack_require__(22);

var _Pupil4 = _interopRequireDefault(_Pupil3);

var _PupilMap = __webpack_require__(8);

var _PupilMap2 = _interopRequireDefault(_PupilMap);

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _ArmManager = __webpack_require__(12);

var _ArmManager2 = _interopRequireDefault(_ArmManager);

var _FilterManager = __webpack_require__(13);

var _FilterManager2 = _interopRequireDefault(_FilterManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NeutralPupil = function (_Pupil2) {
    _inherits(NeutralPupil, _Pupil2);

    function NeutralPupil(game, x, y) {
        _classCallCheck(this, NeutralPupil);

        var _this = _possibleConstructorReturn(this, (NeutralPupil.__proto__ || Object.getPrototypeOf(NeutralPupil)).call(this, game, _PupilMap2.default.types.NEUTRAL, x, y, 'pupils', [3, 6]));

        _this.createOutline();
        _this.createCollision();
        // this.arm = new ArmManager(this.collision, this.game, this, this.pupilSpr.centerX, this.pupilSpr.centerY);
        return _this;
    }

    _createClass(NeutralPupil, [{
        key: 'createOutline',
        value: function createOutline() {
            this.outlineSpr = this.game.add.sprite(this.getPosition().x, this.getPosition().y - 9, 'pupils', this.frame);
            this.outlineSpr.anchor.setTo(0.5, 0.9);
            this.outlineSpr.scale.setTo(0.5);
            this.outlineSpr.width += 14;
            this.outlineSpr.height += 12;
            this.outlineSpr.visible = false;
        }
    }, {
        key: 'createCollision',
        value: function createCollision() {
            var collWidth = 60;
            var collHeight = this.pupilSpr.height - 45;
            // this.getSprite().getBounds().setTo(0, 0, 40, 40);
            // this.pupilSpr.getBounds().setTo(0, 0, 40, 40);
            // this.getSprite().getBounds().setTo(this.getPosition().x - (collWidth / 2), this.getPosition().y - collHeight - 10, collWidth, collHeight);
            // this.collision = new Phaser.Rectangle(this.getPosition().x - (collWidth / 2), this.getPosition().y - collHeight - 10, collWidth, collHeight);
        }
    }, {
        key: 'update',
        value: function update() {
            // this.arm.update();
            // this.game.debug.geom(this.getSprite().getBounds());
        }
    }, {
        key: 'check',
        value: function check(x, y) {
            return this.collision.contains(x, y);
        }
    }, {
        key: 'highlight',
        value: function highlight(_highlight) {
            if (_highlight && !this.outlineSpr.filters) {
                this.outlineSpr.filters = [_FilterManager2.default.getSelectedPupilFilter()];
                this.outlineSpr.visible = true;
            } else if (!_highlight) {
                this.outlineSpr.filters = null;
                this.outlineSpr.visible = false;
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
        key: 'isSelectable',
        value: function isSelectable() {
            return true;
        }
    }]);

    return NeutralPupil;
}(_Pupil4.default);

module.exports = NeutralPupil;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArmManager = function () {
    function ArmManager(parent, game, pupil, startX, startY) {
        _classCallCheck(this, ArmManager);

        this.parent = new Phaser.Rectangle(parent.left, parent.top, parent.width, parent.height);
        this.game = game;
        this.pupil = pupil;
        this.startPos = new Phaser.Point(startX, startY);

        this.spr = this.game.add.sprite(startX, startY, 'arm');
        // this.spr.width = 8;
        // this.spr.height = 2;
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.8);
        this.spr.visible = false;
        _global2.default.armGrp.add(this.spr);

        var handX = this.startPos.x + this.spr.height * Math.cos(this.spr.rotation - _global2.default.radiansOffset);
        var handY = this.startPos.y + this.spr.height * Math.sin(this.spr.rotation - _global2.default.radiansOffset);

        this.handSpr = this.game.add.sprite(startX, startY, 'hand');
        this.handSpr.anchor.setTo(0.5, 0.5);
        this.handSpr.scale.setTo(0.5);
        this.handSpr.visible = false;
        _global2.default.armGrp.add(this.handSpr);
        this.handSpr.bringToTop();
        this.spr.sendToBack();

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

            var endX = this.startPos.x + this.spr.height * Math.cos(this.spr.rotation - _global2.default.radiansOffset);
            var endY = this.startPos.y + this.spr.height * Math.sin(this.spr.rotation - _global2.default.radiansOffset);

            this.handSpr.position.x = endX;
            this.handSpr.position.y = endY;
            this.handSpr.rotation = this.spr.rotation;

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

                _global2.default.currentPoint = new Phaser.Point(endX, endY);
                _global2.default.meter += _global2.default.armNoise;
                if (_global2.default.meter > 100) {
                    _global2.default.meter = 100;
                }

                if (!isDown && this.active) {
                    this.toggleActive(false);
                    _global2.default.droppedPoint = new Phaser.Point(endX, endY);
                    console.log('line release');
                }
            }

            if (_global2.default.noInput) {
                this.toggleActive(false);
            }

            if (_global2.default.lose) {
                this.toggleActive(false);
                _global2.default.noInput = true;
            }

            if (_global2.default.bullyStopArm) {
                this.toggleActive(false);
                _global2.default.bullyStopArm = false;
                this.pupil.takePaper();
            }

            if (_global2.default.petStopArm) {
                this.toggleActive(false);
                _global2.default.petStopArm = false;
                this.pupil.takePaper();
            }
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
            this.handSpr.visible = active;

            if (!active) {
                this.spr.position.x = this.startPos.x;
                this.spr.position.y = this.startPos.y;
                this.handSpr.position.x = this.startPos.x;
                this.handSpr.position.y = this.startPos.y;
                this.spr.height = 5;
                _global2.default.droppedPoint = null;
                _global2.default.currentPoint = null;
            }
        }
    }]);

    return ArmManager;
}();

module.exports = ArmManager;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _FilterColorFillLoad = __webpack_require__(14);

var _FilterColorFillLoad2 = _interopRequireDefault(_FilterColorFillLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterManager = function () {
    function FilterManager() {
        _classCallCheck(this, FilterManager);

        (0, _FilterColorFillLoad2.default)();
    }

    _createClass(FilterManager, [{
        key: 'getFillColorFilter',
        value: function getFillColorFilter(r, g, b) {
            var filter = window.game.add.filter('ColorFill', g.areaW, g.areaH);
            filter.u_color = Phaser.Color.createColor(r, g, b);
            return filter;
        }
    }, {
        key: 'getSelectedPupilFilter',
        value: function getSelectedPupilFilter() {
            if (!this.selectedPupilFilter) {
                this.selectedPupilFilter = this.getFillColorFilter(255, 255, 255);
            }
            return this.selectedPupilFilter;
        }
    }, {
        key: 'getTargetPupilFilter',
        value: function getTargetPupilFilter() {
            if (!this.targetPupilFilter) {
                this.targetPupilFilter = this.getFillColorFilter(80, 230, 100);
            }
            return this.targetPupilFilter;
        }
    }, {
        key: 'getWinPupilFilter',
        value: function getWinPupilFilter() {
            if (!this.winPupilFilter) {
                this.winPupilFilter = this.getFillColorFilter(247, 239, 17);
            }
            return this.winPupilFilter;
        }
    }]);

    return FilterManager;
}();

module.exports = new FilterManager();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FilterColorFillLoad() {

    Phaser.Filter.ColorFill = function (game) {

        Phaser.Filter.call(this, game);

        this.uniforms.u_color = { type: '3f', value: { x: 0.0, y: 0.0, z: 0.0 } };

        this.fragmentSrc = ["precision mediump float;", "precision mediump int;", "uniform vec3 u_color;", "uniform sampler2D uSampler;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main() {", "vec4 tex = texture2D(uSampler, vTextureCoord);", "vec4 newColor = vec4(u_color.x, u_color.y, u_color.z, 1);", "gl_FragColor = newColor * tex.a;", "}"];
    };

    Phaser.Filter.ColorFill.prototype = Object.create(Phaser.Filter.prototype);
    Phaser.Filter.ColorFill.prototype.constructor = Phaser.Filter.ColorFill;

    Phaser.Filter.ColorFill.prototype.init = function (width, height, color) {
        this.setResolution(width, height);
        if (color) {
            this.uniforms.u_color.value = {
                x: color.r / 255,
                y: color.g / 255,
                z: color.b / 255
            };
        }
    };

    Object.defineProperty(Phaser.Filter.ColorFill.prototype, 'u_color', {
        get: function get() {
            return this.uniforms.u_color.value;
        },

        set: function set(value) {
            this.uniforms.u_color.value = {
                x: value.r / 255,
                y: value.g / 255,
                z: value.b / 255
            };
        }
    });
}

module.exports = FilterColorFillLoad;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _AlertManager = __webpack_require__(2);

var _AlertManager2 = _interopRequireDefault(_AlertManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PetPupil = function () {
    function PetPupil(game, iX, iY) {
        _classCallCheck(this, PetPupil);

        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        var pos = _utils2.default.deskXYIndexToXYPoint(iX, iY);

        this.spr = this.game.add.sprite(pos.x, pos.y, 'pupils', 7);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        this.coll = new Phaser.Circle(pos.x, pos.y - this.spr.height / 2 + 10, 130);

        // this.game.debug.geom(this.coll);
    }

    _createClass(PetPupil, [{
        key: 'destroy',
        value: function destroy() {
            this.spr.destroy();
            this.coll = null;
        }
    }, {
        key: 'update',
        value: function update() {
            if (_global2.default.currentPoint && this.coll.contains(_global2.default.currentPoint.x, _global2.default.currentPoint.y) && !_global2.default.lose) {
                _AlertManager2.default.pingAlert(this.game, this.spr.position.x, this.spr.position.y, 0, -this.spr.height + 45);
                _global2.default.meter = 100;
                _global2.default.petStopArm = true;
                _global2.default.soundPetScream = this.game.sound.play('scream_pet', 0.4, false);
            }
        }
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
            return false;
        }
    }]);

    return PetPupil;
}();

module.exports = PetPupil;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _AlertManager = __webpack_require__(2);

var _AlertManager2 = _interopRequireDefault(_AlertManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Teacher = function () {
    function Teacher(game, x, y) {
        _classCallCheck(this, Teacher);

        this.game = game;
        this.spr = this.game.add.sprite(x, y, 'teacher', 0);
        this.spr.anchor.setTo(0.5, 1);
        // this.spr.scale.setTo(0.5);

        // this.aniTurn = this.spr.animations.add('turn', [1, 5, 5, 2], 2, false);
        // this.aniTurn.onComplete.add(() => {
        //     const waitTimer = this.game.time.create(true);
        //     waitTimer.add(Phaser.Timer.SECOND * 4, () => {
        //         console.log('waitTurner complete');
        //         this.aniTurn.stop();
        //         this.turnTimer = undefined;

        //         if (g.noInput) {
        //             this.spr.frame = 2;
        //             return;
        //         }

        //         for (let i = 0; i < this.game.rnd.integerInRange(2, 6); i++) {
        //             this.lowerMeter();
        //         }

        //         this.aniChalk.play('chalk');
        //         this.facingClass = false;
        //         g.soundTeacherTalk.resume();
        //     }, this);
        //     waitTimer.start();
        //     this.facingClass = true;
        //     console.log('waitTimer start');
        // });

        this.aniChalk = this.spr.animations.add('chalk', [0, 1], 2, true);
        this.aniChalk.play('chalk');

        // g.soundTeacherTalk = this.game.sound.play('teacher_talk', 0.5, true);

        // this.startPhase = true;

        // this.startTimer = this.game.time.create(true);
        // this.startTimer.add(Phaser.Timer.SECOND * 5, () => {
        //     console.log('startTimer complete');
        //     this.startPhase = false;
        // }, this);
        // this.startTimer.start();

        // console.log('startTimer start');
    }

    _createClass(Teacher, [{
        key: 'update',
        value: function update() {
            var _this = this;

            if (!this.startPhase) {
                if (!this.turnTimer) {
                    this.turnTimer = this.game.time.create(true);
                    this.turnTimer.add(Phaser.Timer.SECOND * 4.5, function () {
                        console.log('turnTimer complete');
                        _this.turn();
                    }, this);
                    this.turnTimer.start();

                    console.log('turnTimer start');
                }
            }
            if (_global2.default.meter >= 100) {
                _global2.default.lose = true;
            }
            if (this.facingClass && _global2.default.currentPoint) {
                _global2.default.lose = true;
            }
            if (_global2.default.lose && !this.alerting) {
                _AlertManager2.default.pingAlert(this.game, this.spr.position.x, this.spr.position.y, -4, -this.spr.height + 36, 6);
                this.alerting = true;
            }
            if (_global2.default.lose) {
                _global2.default.noInput = true;
                this.spr.frame = 2;
                _global2.default.soundTeacherTalk.stop();
                if (!_global2.default.soundTeacherScream) {
                    _global2.default.soundTeacherScream = this.game.sound.play('scream_teacher', 0.4, false);
                }
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
            _global2.default.soundTeacherTalk.pause();
        }
    }, {
        key: 'lowerMeter',
        value: function lowerMeter() {
            _global2.default.meter -= 8;
            if (_global2.default.meter < 0) {
                _global2.default.meter = 0;
            }
        }
    }]);

    return Teacher;
}();

module.exports = Teacher;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meter = function () {
    function Meter(game, x, y) {
        _classCallCheck(this, Meter);

        this.game = game;

        this.backSpr = this.game.add.sprite(x + 1, y, 'pixel');
        this.backSpr.width = 30 * 2;
        this.backSpr.height = 112 * 2;
        this.backSpr.tint = 0x1F3429;
        _global2.default.envGrp.add(this.backSpr);

        this.meterSpr = this.game.add.sprite(x + 7, y, 'pixel');
        this.meterSpr.width = 26 * 2;
        this.meterSpr.height = 112 * 2;
        this.meterSpr.position.y += this.meterSpr.height;
        this.meterSpr.tint = 0x790000;
        this.meterSpr.anchor.setTo(0, 1);
        _global2.default.envGrp.add(this.meterSpr);

        this.frameSpr = this.game.add.sprite(x, y, 'meter_board');
        // this.frameSpr.scale.setTo(0.5);
    }

    _createClass(Meter, [{
        key: 'update',
        value: function update() {
            this.meterSpr.height = Math.ceil(_global2.default.meter / 100 * (192 / 2)) + 3;
        }
    }]);

    return Meter;
}();

module.exports = Meter;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _levelConfig = __webpack_require__(19);

var _levelConfig2 = _interopRequireDefault(_levelConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelManager = function () {
    function LevelManager() {
        _classCallCheck(this, LevelManager);
    }

    _createClass(LevelManager, [{
        key: 'getLevel',
        value: function getLevel() {
            return _levelConfig2.default.levels[0].map;
        }
    }]);

    return LevelManager;
}();

module.exports = new LevelManager();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"levels":[{"name":"","width":0,"height":0,"start":[0,0],"end":[0,0],"map":[[0,1,1,0,0,1,1],[0,1,0,1,1,0,0],[1,1,1,0,1,1,1],[0,0,0,1,0,1,1]]}]}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            this.game.input.keyboard.onUpCallback = undefined;
        }
    }, {
        key: 'create',
        value: function create() {
            if (_global2.default.soundTeacherTalk) {
                _global2.default.soundTeacherTalk.stop();
            }
            if (_global2.default.soundTeacherScream) {
                _global2.default.soundTeacherScream.stop();
            }
            if (_global2.default.soundPetScream) {
                _global2.default.soundPetScream.stop();
            }
            if (_global2.default.soundBullyGrunts) {
                _global2.default.soundBullyGrunts.stop();
            }
            if (_global2.default.soundPassPaper) {
                _global2.default.soundPassPaper.stop();
            }

            this.game.input.keyboard.onUpCallback = function (event) {
                location.reload();
                // if (g.soundBackground) {
                //     g.soundBackground.stop();
                // }
                // this.game.state.start('menu', true, true);
            };

            this.game.stage.backgroundColor = 0x1F3429;

            var messageSpr = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'success');
            messageSpr.anchor.setTo(0.5);
            messageSpr.scale.setTo(0.2);
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
            // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StateWin;
}(Phaser.State);

module.exports = StateWin;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            this.game.input.keyboard.onUpCallback = undefined;
        }
    }, {
        key: 'create',
        value: function create() {
            if (_global2.default.soundTeacherTalk) {
                _global2.default.soundTeacherTalk.stop();
            }
            if (_global2.default.soundTeacherScream) {
                _global2.default.soundTeacherScream.stop();
            }
            if (_global2.default.soundPetScream) {
                _global2.default.soundPetScream.stop();
            }
            if (_global2.default.soundBullyGrunts) {
                _global2.default.soundBullyGrunts.stop();
            }
            if (_global2.default.soundPassPaper) {
                _global2.default.soundPassPaper.stop();
            }

            this.game.input.keyboard.onUpCallback = function (event) {
                location.reload();
                // if (g.soundBackground) {
                //     g.soundBackground.stop();
                // }
                // this.game.state.start('menu', true, true);
            };

            this.game.stage.backgroundColor = 0x790000;

            var messageSpr = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'failure');
            messageSpr.anchor.setTo(0.5);
            messageSpr.scale.setTo(0.2);
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
            // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        }
    }]);

    return StateLose;
}(Phaser.State);

module.exports = StateLose;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Pupil = function () {
    function _Pupil(game, type, x, y, key, frame) {
        var anchor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : { x: 0.5, y: 1 };

        _classCallCheck(this, _Pupil);

        console.log('_Pupil');
        this.game = game;
        this.type = type;
        this.paper = false;
        this.frame = frame;
        this.pos = new Phaser.Point(x, y);
        if (Array.isArray(this.frame)) {
            this.frame = this.game.rnd.integerInRange(this.frame[0], this.frame[1]);
        }
        this.pupilSpr = this.game.add.sprite(this.pos.x, this.pos.y, key, this.frame);
        this.pupilSpr.anchor.setTo(0.5, 1);
        _global2.default.classGrp.add(this.pupilSpr);
    }

    _createClass(_Pupil, [{
        key: 'destroy',
        value: function destroy() {
            this.pupilSpr.destroy();
            if (this.outlineSpr) {
                this.outlineSpr.destroy();
            }
        }
    }, {
        key: 'update',
        value: function update() {
            return false;
        }
    }, {
        key: 'check',
        value: function check(x, y) {
            return false;
        }
    }, {
        key: 'highlight',
        value: function highlight(_highlight) {
            console.error('highlight(highlight) has not been implemented');
            return false;
        }
    }, {
        key: 'givePaper',
        value: function givePaper() {
            console.error('givePaper() has not been implemented');
            return false;
        }
    }, {
        key: 'takePaper',
        value: function takePaper() {
            console.error('takePaper() has not been implemented');
            return false;
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
        key: 'getSprite',
        value: function getSprite() {
            return this.pupilSpr;
        }
    }, {
        key: 'getType',
        value: function getType() {
            return this.type;
        }
    }, {
        key: 'getGame',
        value: function getGame() {
            return this.game;
        }
    }, {
        key: 'getPosition',
        value: function getPosition() {
            return this.pos;
        }
    }]);

    return _Pupil;
}();

module.exports = _Pupil;

/***/ })
/******/ ]);