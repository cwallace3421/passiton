import g from '../global';
import global from '../global';

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

        this.screen = new Phaser.Rectangle(Math.floor((window.innerWidth - w) / 2), Math.floor((window.innerHeight - h) / 2), w, h);

        this.playArea = new Phaser.Rectangle(Math.floor((window.innerWidth - w) / 2), Math.floor((window.innerHeight - h) / 2), w, h);
        this.area = this.game.add.sprite(this.playArea.topLeft.x, this.playArea.topLeft.y, 'pixel');
        this.area.width = w;
        this.area.height = h;

        const chairRowSize = Math.floor(g.areaW / (g.chairSize + g.chairGap));
        const chairRowWidth = (chairRowSize * g.chairSize) + ((chairRowSize - 1) * g.chairGap);
        const startXOffset = (g.areaW - chairRowWidth) / 2;

        const chairColSize = Math.floor((g.areaH - 150) / (g.chairSize + g.chairGap));
        const chairColWidth = (chairColSize * g.chairSize) + ((chairColSize - 1) * g.chairGap);
        const startYOffset = ((g.areaH - 150) - chairColWidth) / 2;

        for (let y = 0; y < chairColSize; y++) {
            for (let x = 0; x < chairRowSize; x++) {
                this.chair = this.game.add.sprite(
                    this.playArea.left + startXOffset + ((g.chairSize + g.chairGap) * x),
                    this.playArea.bottom - startYOffset - ((g.chairSize + g.chairGap) * y),
                    'pixel');
                this.chair.anchor.setTo(0, 1);
                this.chair.width = g.chairSize;
                this.chair.height = g.chairSize;
                this.chair.tint = 0x000000;
            }
        }
    }

    update() {

    }

    preload() {
        this.game.load.image('pixel', '/assets/pixel.png');
    }

    resize() {
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    }
}

export default StatePlay;