import g from '../global';
import NeutralPupil from '../pupils/NeutralPupil';
import EmptyPupil from '../pupils/EmptyPupil';

class GameMap {

    constructor(game, area) {
        this.game = game;
        this.area = area;

        this.deskRowSize = Math.floor(g.areaW / (g.deskWidth + g.deskGap));
        const deskRowWidth = (this.deskRowSize * g.deskWidth) + ((this.deskRowSize - 1) * g.deskGap);
        const startXOffset = (g.areaW - deskRowWidth) / 2;

        this.deskColSize = Math.floor((g.areaH - 150) / (g.deskHeight + g.deskGap));
        const deskColWidth = (this.deskColSize * g.deskHeight) + ((this.deskColSize - 1) * g.deskGap);
        const startYOffset = ((g.areaH - 150) - deskColWidth) / 2;

        for (let y = 0; y < this.deskColSize; y++) {
            for (let x = 0; x < this.deskRowSize; x++) {
                this.desk = this.game.add.sprite(
                    this.area.left + startXOffset + ((g.deskWidth + g.deskGap) * x),
                    this.area.bottom - startYOffset - ((g.deskHeight + g.deskGap) * y),
                    'table');
                this.desk.anchor.setTo(0, 1);
                this.desk.scale.setTo(0.5);
                // this.desk.width = g.deskSize;
                // this.desk.height = g.deskSize;
                // this.desk.tint = 0x000000;
            }
        }
        this.generatePupils();
    }

    generatePupils() {
        this.pupils = new Array(this.deskColSize).fill(new Array(this.deskRowSize).fill(new EmptyPupil()));
        console.log(this.pupils);
    }

}

module.exports = GameMap;