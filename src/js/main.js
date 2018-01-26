import StateMenu from './states/StateMenu';
import StatePlay from './states/StatePlay';

class Game extends Phaser.Game {

    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'container', null, false, true);
        this.state.add('menu', new StateMenu(), true);
        this.state.add('play', new StatePlay(), false);
    }

}

window.game = new Game();
window.addEventListener('resize', () => {
    if (window.game.state.states[window.game.state.current].resize) {
        window.game.state.states[window.game.state.current].resize();
    }
});