import g from '../global';

class StateWin extends Phaser.State {

    constructor() {
        super();
    }

    init() {
        this.game.stage.disableVisibilityChange = true;
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.renderSession.roundPixels = true;
        this.game.input.mouse.capture = true;
        this.game.input.keyboard.onUpCallback = undefined;
    }

    create() {
        if (g.soundTeacherTalk) {
            g.soundTeacherTalk.stop();
        }
        if (g.soundTeacherScream) {
            g.soundTeacherScream.stop();
        }
        if (g.soundPetScream) {
            g.soundPetScream.stop();
        }
        if (g.soundBullyGrunts) {
            g.soundBullyGrunts.stop();
        }
        if (g.soundPassPaper) {
            g.soundPassPaper.stop();
        }

        this.game.input.keyboard.onUpCallback = (event) => {
            location.reload();
            // if (g.soundBackground) {
            //     g.soundBackground.stop();
            // }
            // this.game.state.start('menu', true, true);
        };

        this.game.stage.backgroundColor = 0x1F3429;

        const messageSpr = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'success');
        messageSpr.anchor.setTo(0.5);
        messageSpr.scale.setTo(0.2);
    }

    update() {

    }

    preload() {

    }

    resize() {
        // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }

}

module.exports = StateWin;