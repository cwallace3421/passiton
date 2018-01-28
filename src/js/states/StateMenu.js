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

        this.state = 0;
        this.introSpr = this.game.add.sprite(g.area.left, g.area.top, 'title');
        this.introSpr.visible = false;
        this.infoOneSpr = this.game.add.sprite(g.area.left, g.area.top, 'info_1');
        this.infoOneSpr.visible = false;
        this.infoTwoSpr = this.game.add.sprite(g.area.left, g.area.top, 'info_2');
        this.infoTwoSpr.visible = false;
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
    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StateMenu;