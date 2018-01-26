import StateTest from './states/StateTest'

class Game extends Phaser.Game {

    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'container', null, false, true);
        this.state.add('test', new StateTest(), true);
    }

}

window.game = new Game();
window.addEventListener('resize', () => {
    if (window.game.state.states[window.game.state.current].resize) {
        window.game.state.states[window.game.state.current].resize();
    }
});