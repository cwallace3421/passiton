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
        this.gameMap = new GameMap(this.game);
    }

    update() {
        this.game.world.sort('y', Phaser.Group.SORT_ASCENDING);
        this.gameMap.update();
    }

    preload() {
        this.game.load.image('pixel', 'assets/pixel.png');
        this.game.load.image('table', 'assets/table.png');
        this.game.load.image('chair', 'assets/chair.png');
        this.game.load.image('generic_boy_1', 'assets/generic_boy_1.png');
        this.game.load.image('generic_girl_1', 'assets/generic_girl_1.png');
        this.game.load.image('hero_boy_1', 'assets/hero_boy_1.png');
        this.game.load.image('target_boy_1', 'assets/target_boy_1.png');
        this.game.load.image('bully', 'assets/bully.png');
        this.game.load.image('teachers_pet', 'assets/teachers_pet.png');
        this.game.load.image('blackboard', 'assets/blackboard.png');
        this.game.load.image('teachers_desk', 'assets/teachers_desk.png');
        this.game.load.spritesheet('teacher', 'assets/teacher/teacher_spritesheet.png', 180, 280);
    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StatePlay;