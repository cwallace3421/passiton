class StateWin extends Phaser.State {

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
        const hello = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Win');
        hello.anchor.setTo(0.5);
    }

    update() {

    }

    preload() {

    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }

}

module.exports = StateWin;