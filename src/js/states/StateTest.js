class StateTest extends Phaser.State {

    constructor() {
        super();
    }

    init() {
        this.game.stage.disableVisibilityChange = true;
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.renderSession.roundPixels = true;
    }

    create() {
        this.game.stage.backgroundColor = 0x4488aa;

        const hello = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Hello World');
        hello.anchor.setTo(0.5);
    }

    update() {

    }

    preload() {

    }

    resize() {
        // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StateTest;