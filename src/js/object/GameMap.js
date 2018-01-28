import g from '../global';
import NeutralPupil from '../pupils/NeutralPupil';
import EmptyPupil from '../pupils/EmptyPupil';
import BullyPupil from '../pupils/BullyPupil';
import PetPupil from '../pupils/PetPupil';
import Teacher from '../object/Teacher';
import Meter from '../object/Meter';

class GameMap {

    constructor(game) {
        this.game = game;

        g.area = new Phaser.Rectangle(Math.floor((window.innerWidth - g.areaW) / 2), Math.floor((window.innerHeight - g.areaH) / 2), g.areaW, g.areaH);

        this.teacherAreaHeight = 190;

        this.wallH = 160;
        this.wallSpr = this.game.add.sprite(g.area.left, g.area.top, 'pixel');
        this.wallSpr.width = g.areaW;
        this.wallSpr.height = this.wallH;
        this.wallSpr.tint = 0xFCFBE3;
        g.envGrp.add(this.wallSpr);

        this.floorSpr = this.game.add.sprite(g.area.left, g.area.top + this.wallH, 'pixel');
        this.floorSpr.width = g.areaW;
        this.floorSpr.height = g.area.height - this.wallH;
        this.floorSpr.tint = 0xAAAAAA;
        g.envGrp.add(this.floorSpr);

        this.boardSpr = this.game.add.sprite(g.area.left + (g.area.width / 2), 17, 'blackboard');
        this.boardSpr.anchor.setTo(0.5, 0);
        this.boardSpr.scale.setTo(0.5);
        g.envGrp.add(this.boardSpr);

        this.meterObj = new Meter(this.game, this.boardSpr.x + (this.boardSpr.width / 2) + 6, 25);

        // this.areaSpr = this.game.add.sprite(g.area.topLeft.x, g.area.topLeft.y, 'pixel');
        // this.areaSpr.width = g.areaW;
        // this.areaSpr.height = g.areaH;

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

        this.teacher = new Teacher(this.game, g.area.left + (g.area.width / 2), this.teacherAreaHeight + 20);
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

            if (this.pupils[y][x].destroy) {
                this.pupils[y][x].destroy();
            }
            this.pupils[y][x] = new BullyPupil(this.game, x, y);
        }

        // Generate teacher pet
        for (let n = 0; n < 1; n++) {
            const x = this.game.rnd.integerInRange(1, this.deskRowSize - 2);
            const y = this.game.rnd.integerInRange(1, this.deskColSize - 2);

            if (this.pupils[y][x].destroy) {
                this.pupils[y][x].destroy();
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
        this.teacher.update();
        this.meterObj.update();

        if (g.passToFromIndex) {
            const available = [];
            if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x].givePaper) {
                available.push(new Phaser.Point(g.passToFromIndex.x, g.passToFromIndex.y - 1));
            }
            if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x - 1].givePaper) {
                available.push(new Phaser.Point(g.passToFromIndex.x - 1, g.passToFromIndex.y - 1));
            }
            if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x + 1].givePaper) {
                available.push(new Phaser.Point(g.passToFromIndex.x + 1, g.passToFromIndex.y - 1));
            }
            const passTo = this.game.rnd.integerInRange(0, available.length - 1);
            this.pupils[available[passTo].y][available[passTo].x].givePaper();
            g.passToFromIndex = null;
        }

        if (g.win) {
            const winTimer = this.game.time.create(true);
            winTimer.add(Phaser.Timer.SECOND * 1, () => {
                console.log('change to win state');
                this.game.state.start('win', true, false);
            }, this);
            winTimer.start();
            g.win = false;
        }

        if (g.lose) {
            const loseTimer = this.game.time.create(true);
            loseTimer.add(Phaser.Timer.SECOND * 2, () => {
                console.log('change to lose state');
                this.game.state.start('lose', true, false);
            }, this);
            loseTimer.start();
            g.lose = false;
        }
    }

    giveInitialNote() {
        if (this.game.rnd.integerInRange(0, 100) > 50) {
            // Bottom left hero
            this.pupils[0][0].destroy();
            this.pupils[0][0] = new NeutralPupil(this.game, 0, 0, 'hero');
            this.pupils[0][0].givePaper();

            // Top right target
            this.pupils[this.deskColSize - 1][this.deskRowSize - 1].destroy();
            this.pupils[this.deskColSize - 1][this.deskRowSize - 1] = new NeutralPupil(this.game, this.deskRowSize - 1, this.deskColSize - 1, 'target');
        } else {
            // Bottom right hero
            this.pupils[0][this.deskRowSize - 1].destroy();
            this.pupils[0][this.deskRowSize - 1] = new NeutralPupil(this.game, this.deskRowSize - 1, 0, 'hero');
            this.pupils[0][this.deskRowSize - 1].givePaper();

            // Top left target
            this.pupils[this.deskColSize - 1][0].destroy();
            this.pupils[this.deskColSize - 1][0] = new NeutralPupil(this.game, 0, this.deskColSize - 1, 'target');
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