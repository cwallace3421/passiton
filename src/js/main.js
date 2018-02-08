import StateMenu from './states/StateMenu';
import StatePlay from './states/StatePlay';
import StateWin from './states/StateWin';
import StateLose from './states/StateLose';

class Game extends Phaser.Game {

    constructor() {
        super(720, 1280, Phaser.AUTO, null, null, false, true);
        // super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'container', null, false, true);
        this.state.add('menu', new StateMenu(), true);
        this.state.add('play', new StatePlay(), false);
        this.state.add('win', new StateWin(), false);
        this.state.add('lose', new StateLose(), false);
    }

}

window.game = new Game();
window.addEventListener('resize', () => {
    if (window.game.state.states[window.game.state.current].resize) {
        window.game.state.states[window.game.state.current].resize();
    }
});