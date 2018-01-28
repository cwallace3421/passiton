import g from '../global';

class StateMenu extends Phaser.State {

    constructor() {
        super();
    }

    init() {
        this.game.stage.disableVisibilityChange = true;
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.renderSession.roundPixels = true;
    }

    create() {
        g.area = new Phaser.Rectangle(Math.floor((window.innerWidth - g.areaW) / 2), Math.floor((window.innerHeight - g.areaH) / 2), g.areaW, g.areaH);

        this.game.stage.backgroundColor = 0x000000;

        this.state = 0;
        this.introSpr = this.game.add.sprite(g.area.left, g.area.top, 'title');
        this.introSpr.visible = false;
        this.infoOneSpr = this.game.add.sprite(g.area.left, g.area.top, 'info_1');
        this.infoOneSpr.visible = false;
        this.infoTwoSpr = this.game.add.sprite(g.area.left, g.area.top, 'info_2');
        this.infoTwoSpr.visible = false;

        g.soundBackground = this.game.sound.play('background_music', 0.4, true);
    }

    update() {
        this.game.input.keyboard.onUpCallback = (event) => {
            this.state++;
            console.log(this.state);
        };

        if (this.state === 0) {
            this.introSpr.visible = true;
        } else if (this.state === 1) {
            this.introSpr.visible = false;
            this.infoOneSpr.visible = true;
        } else if (this.state === 2) {
            this.infoOneSpr.visible = false;
            this.infoTwoSpr.visible = true;
        } else if (this.state >= 3) {
            this.game.state.start('play', true);
        }
    }

    preload() {
        this.game.load.image('title', 'assets/intro.png');
        this.game.load.image('info_1', 'assets/howtoplay_1.png');
        this.game.load.image('info_2', 'assets/howtoplay_2.png');

        this.game.load.image('pixel', 'assets/pixel.png');
        this.game.load.image('table', 'assets/table.png');
        this.game.load.image('chair', 'assets/chair.png');
        this.game.load.image('generic_boy_1', 'assets/generic_boy_1.png');
        this.game.load.image('generic_boy_2', 'assets/generic_boy_2.png');
        this.game.load.image('generic_girl_1', 'assets/generic_girl_1.png');
        this.game.load.image('generic_girl_2', 'assets/generic_girl_2.png');
        this.game.load.image('hero_boy_1', 'assets/hero_boy_1.png');
        this.game.load.image('target_boy_1', 'assets/target_boy_1.png');
        this.game.load.image('bully', 'assets/bully.png');
        this.game.load.image('teachers_pet', 'assets/teachers_pet.png');
        this.game.load.image('blackboard', 'assets/blackboard.png');
        this.game.load.image('teachers_desk', 'assets/teachers_desk.png');
        this.game.load.image('alert', 'assets/alert.png');
        this.game.load.image('success', 'assets/success.png');
        this.game.load.image('failure', 'assets/detention.png');
        this.game.load.image('arm', 'assets/arm.png');
        this.game.load.image('hand', 'assets/hand.png');
        this.game.load.image('meter_board', 'assets/meter_board.png');
        this.game.load.spritesheet('teacher', 'assets/teacher/teacher_spritesheet.png', 180, 280);
        this.game.load.spritesheet('beatup', 'assets/beatup/beatup_spritesheet.png', 150, 150);

        game.load.audio('background_music', ['assets/sounds/professor_umlaut.mp3']);
        game.load.audio('crunchy', ['assets/sounds/crunchy.mp3']);
        game.load.audio('scream_pet', ['assets/sounds/screm_pet.mp3']);
        game.load.audio('scream_teacher', ['assets/sounds/screm_teacher.mp3']);
        game.load.audio('teacher_talk', ['assets/sounds/teacher_talk.mp3']);
        game.load.audio('bully_grunts', ['assets/sounds/bully_grunts.mp3']);
    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StateMenu;