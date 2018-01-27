import g from '../global';
import NeutralPupil from '../pupils/NeutralPupil';
import EmptyPupil from '../pupils/EmptyPupil';
import BullyPupil from '../pupils/BullyPupil';
import PetPupil from '../pupils/PetPupil';

class GameMap {

    constructor(game) {
        this.game = game;

        this.teacherAreaHeight = 190;

        this.deskRowSize = Math.floor(g.areaW / (g.deskWidth + g.deskGap));
        const deskRowWidth = (this.deskRowSize * g.deskWidth) + ((this.deskRowSize - 1) * g.deskGap);
        g.startXOffset = (g.areaW - deskRowWidth) / 2;

        this.deskColSize = Math.floor((g.areaH - this.teacherAreaHeight) / (g.deskHeight + g.deskGap));
        const deskColWidth = (this.deskColSize * g.deskHeight) + ((this.deskColSize - 1) * g.deskGap);
        g.startYOffset = ((g.areaH - this.teacherAreaHeight) - deskColWidth) / 2;

        for (let y = 0; y < this.deskColSize; y++) {
            for (let x = 0; x < this.deskRowSize; x++) {
                this.desk = this.game.add.sprite(
                    g.area.left + g.startXOffset + ((g.deskWidth + g.deskGap) * x),
                    g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGap) * y),
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
        this.pupils = [];
        for (let y = 0; y < this.deskColSize; y++) {
            const row = [];
            for (let x = 0; x < this.deskRowSize; x++) {
                if (this.game.rnd.integerInRange(0, 100) > 80) {
                    row.push(new EmptyPupil(this.game, x, y));
                } else {
                    row.push(new NeutralPupil(this.game, x, y));
                }
            }
            this.pupils.push(row);
        }
        this.giveInitialNote();

        // Generate bullies
        for (let n = 0; n < 2; n++) {
            const x = this.game.rnd.integerInRange(1, this.deskRowSize - 2);
            const y = this.game.rnd.integerInRange(1, this.deskColSize - 2);

            if (this.pupils[y][x].spr.destroy) {
                this.pupils[y][x].spr.destroy();
            }
            this.pupils[y][x] = new BullyPupil(this.game, x, y);
        }

        // Generate teacher pet
        for (let n = 0; n < 1; n++) {
            const x = this.game.rnd.integerInRange(1, this.deskRowSize - 2);
            const y = this.game.rnd.integerInRange(1, this.deskColSize - 2);

            if (this.pupils[y][x].spr.destroy) {
                this.pupils[y][x].spr.destroy();
            }
            this.pupils[y][x] = new PetPupil(this.game, x, y);
        }

        console.log(this.pupils);
    }

    update() {
        for (let y = 0; y < this.pupils.length; y++) {
            for (let x = 0; x < this.pupils[0].length; x++) {
                if (this.pupils[y][x].update) {
                    this.pupils[y][x].update();
                }
            }
        }
        this.shouldPassPaper();
    }

    giveInitialNote() {
        if (this.game.rnd.integerInRange(0, 100) > 50) {
            // Bottom left
            if (!this.pupils[0][0].isSelectable()) {
                this.pupils[0][0] = new NeutralPupil(this.game, 0, 0);
            }
            this.pupils[0][0].givePaper();
        } else {
            // Bottom right
            if (!this.pupils[0][this.deskRowSize - 1].isSelectable()) {
                this.pupils[0][this.deskRowSize - 1] = new NeutralPupil(this.game, this.deskRowSize - 1, 0);
            }
            this.pupils[0][this.deskRowSize - 1].givePaper();
        }
    }

    shouldPassPaper() {
        if (g.droppedPoint) {
            for (let y = 0; y < this.pupils.length; y++) {
                for (let x = 0; x < this.pupils[0].length; x++) {
                    if (this.pupils[y][x].check && this.pupils[y][x].givePaper) {
                        if (this.pupils[y][x].check(g.droppedPoint.x, g.droppedPoint.y)) {
                            g.activePupil.takePaper();
                            this.pupils[y][x].givePaper();
                        }
                    }
                }
            }
            g.droppedPoint = null;
        }
    }

}

module.exports = GameMap;