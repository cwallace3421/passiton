import g from '../global';

class StateLose extends Phaser.State {

    constructor() {
        super();
    }

    init() {
        this.game.stage.disableVisibilityChange = true;
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.renderSession.roundPixels = true;
        this.game.input.mouse.capture = true;
        this.game.input.keyboard.onDownCallback = undefined;
    }

    create() {
        this.game.stage.backgroundColor = 0x790000;

        const messageSpr = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'failure');
        messageSpr.anchor.setTo(0.5);
        messageSpr.scale.setTo(0.2);
    }

    update() {

    }

    preload() {

    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }

}

module.exports = StateLose;