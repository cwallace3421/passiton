import g from '../global';
import GameMap from '../object/GameMap';

class StatePlay extends Phaser.State {

    constructor() {
        super();
    }

    init() {
        this.game.stage.disableVisibilityChange = true;
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.renderSession.roundPixels = true;
    }

    create() {
        const w = g.areaW;
        const h = g.areaH;

        this.area = new Phaser.Rectangle(Math.floor((window.innerWidth - w) / 2), Math.floor((window.innerHeight - h) / 2), w, h);
        this.areaSpr = this.game.add.sprite(this.area.topLeft.x, this.area.topLeft.y, 'pixel');
        this.areaSpr.width = w;
        this.areaSpr.height = h;

        this.gameMap = new GameMap(this.game, this.area);
    }

    update() {

    }

    preload() {
        this.game.load.image('pixel', '/assets/pixel.png');
        this.game.load.image('table', '/assets/table.png');
    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StatePlay;