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
        this.game.input.mouse.capture = true;
        this.game.input.keyboard.onDownCallback = undefined;
    }

    create() {
        const w = g.areaW;
        const h = g.areaH;

        g.area = new Phaser.Rectangle(Math.floor((window.innerWidth - w) / 2), Math.floor((window.innerHeight - h) / 2), w, h);
        this.areaSpr = this.game.add.sprite(g.area.topLeft.x, g.area.topLeft.y, 'pixel');
        this.areaSpr.width = w;
        this.areaSpr.height = h;

        this.gameMap = new GameMap(this.game);
    }

    update() {
        this.game.world.sort('y', Phaser.Group.SORT_ASCENDING);
        this.gameMap.update();
    }

    preload() {
        this.game.load.image('pixel', '/assets/pixel.png');
        this.game.load.image('table', '/assets/table.png');
        this.game.load.image('chair', '/assets/chair.png');
        this.game.load.image('generic_boy_1', '/assets/generic_boy_1.png');
        this.game.load.image('generic_girl_1', '/assets/generic_girl_1.png');
        this.game.load.image('bully', '/assets/bully.png');
        this.game.load.image('teachers_pet', '/assets/teachers_pet.png');
    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StatePlay;