import g from '../global';
import GameMap from '../object/GameMap';

class StatePlay extends Phaser.State {

    constructor() {
        super();
        this.isFullscreen = false;
        this.message = '';
    }

    init() {
        this.game.stage.disableVisibilityChange = true;
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.renderSession.roundPixels = true;
        window.m.scale.createToggle();
    }

    create() {
        g.armGrp = this.game.add.group();
        g.envGrp = this.game.add.group();
        g.classGrp = this.game.add.group();
        g.topGrp = this.game.add.group();
        this.gameMap = new GameMap(this.game);
    }

    update() {
        this.game.world.sort('y', Phaser.Group.SORT_ASCENDING);
        this.game.world.sendToBack(g.envGrp);
        this.game.world.bringToTop(g.armGrp);
        this.game.world.bringToTop(g.topGrp);
        this.gameMap.update();

        window.m.scale.update();
    }

    preload() {

    }

    resize() {
        // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StatePlay;