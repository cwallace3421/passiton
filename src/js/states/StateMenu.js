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
        this.game.stage.backgroundColor = 0x4488aa;

        const hello = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'press any key to continue');
        hello.anchor.setTo(0.5);
    }

    update() {
        this.game.input.keyboard.onDownCallback = (event) => {
			this.game.state.start('play');
		};
    }

    preload() {

    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StateMenu;