import g from '../global';
import pupilsDef from '../pupils/PupilMap';
import Teacher from '../object/Teacher';
import Meter from '../object/Meter';
import LevelManager from '../manager/LevelManager';

class GameMap {

    constructor(game) {
        this.game = game;

        this.wallSpr = this.game.add.sprite(0, 0, 'pixel');
        this.wallSpr.width = this.game.width;
        this.wallSpr.height = 350;
        this.wallSpr.tint = 0xFCFBE3;
        g.envGrp.add(this.wallSpr);

        this.teacherFloorSpr = this.game.add.sprite(0, this.wallSpr.height, 'pixel');
        this.teacherFloorSpr.width = this.game.width;
        this.teacherFloorSpr.height = this.wallSpr.height + 150;
        this.teacherFloorSpr.tint = 0xDDAACC;
        g.envGrp.add(this.teacherFloorSpr);

        g.classGrp.position.x = 0;
        g.classGrp.position.y = this.teacherFloorSpr.height;
        this.classFloorSpr = this.game.add.sprite(0, 0, 'pixel');
        this.classFloorSpr.width = this.game.width;
        this.classFloorSpr.height = this.game.height - g.classGrp.position.y;
        this.classFloorSpr.tint = 0xAAAAAA;
        g.classGrp.add(this.classFloorSpr);

        const level = LevelManager.getLevel();
        console.log(level);

        const deskWidth = 154;
        const deskHeight = 136;
        const deskGapX = deskWidth + 56;
        const deskGapY = deskHeight + 36;
        const edgeGapX = 148;
        const edgeGapY = 72;

        const classWidth = ((deskGapX * level[0].length) - deskGapX) + (edgeGapX * 2);
        this.classFloorSpr.width = classWidth;

        // Dirty copy of level map
        const deskPositions = JSON.parse(JSON.stringify(level));
        for (let y = (deskPositions.length - 1); y >= 0; y--) {
            for (let x = 0; x < deskPositions[y].length; x++) {
                const posX = edgeGapX + (x * deskGapX);
                const posY = this.classFloorSpr.height - (edgeGapY + (y * deskGapY));

                const desk = this.game.add.sprite(posX, posY, 'table');
                desk.anchor.setTo(0.5, 1);
                g.classGrp.add(desk);

                deskPositions[y][x] = {
                    x: posX,
                    y: posY
                };
            }
        }

        this.pupils = JSON.parse(JSON.stringify(level));
        let count = 0;
        for (let y = (this.pupils.length - 1); y >= 0; y--) {
            for (let x = 0; x < this.pupils[y].length; x++) {
                count++;
                const type = this.pupils[y][x];
                const pos = deskPositions[y][x];
                this.pupils[y][x] = new pupilsDef.classes[type](window.game, pos.x, pos.y);
            }
        }
        console.log(this.pupils);
        console.log(count);

        this.boardSpr = this.game.add.sprite(this.game.width / 2, 30, 'blackboard');
        this.boardSpr.anchor.setTo(0.5, 0);
        g.envGrp.add(this.boardSpr);

        this.meterObj = new Meter(this.game, this.boardSpr.x + (this.boardSpr.width / 2) + 6, 45);
        this.teacher = new Teacher(this.game, this.game.width / 2, this.wallSpr.height + 50);

        this.createClassScroll();

        // this.teacherZoneHeight = 190;

        // this.wallH = 160;
        // this.wallSpr = this.game.add.sprite(g.area.left, g.area.top, 'pixel');
        // this.wallSpr.width = g.areaW;
        // this.wallSpr.height = this.wallH;
        // this.wallSpr.tint = 0xFCFBE3;
        // g.envGrp.add(this.wallSpr);

        // this.floorSpr = this.game.add.sprite(g.area.left, g.area.top + this.wallH, 'pixel');
        // this.floorSpr.width = g.areaW;
        // this.floorSpr.height = g.area.height - this.wallH;
        // this.floorSpr.tint = 0xAAAAAA;
        // g.envGrp.add(this.floorSpr);

        // this.boardSpr = this.game.add.sprite(g.area.left + (g.area.width / 2), g.area.top + 4, 'blackboard');
        // this.boardSpr.anchor.setTo(0.5, 0);
        // this.boardSpr.scale.setTo(0.5);
        // g.envGrp.add(this.boardSpr);

        // this.teachersDeskSpr = this.game.add.sprite(g.area.right - 125, g.area.top + this.wallH + 40, 'teachers_desk');
        // this.teachersDeskSpr.anchor.setTo(0.5, 1);
        // this.teachersDeskSpr.scale.setTo(0.5);
        // g.envGrp.add(this.teachersDeskSpr);

        // this.meterObj = new Meter(this.game, this.boardSpr.x + (this.boardSpr.width / 2) + 6, g.area.top + 11);


        // this.deskRowSize = Math.floor(g.area.width / (g.deskWidth + g.deskGapHort));
        // const deskRowWidth = (this.deskRowSize * g.deskWidth) + ((this.deskRowSize - 1) * g.deskGapHort);
        // g.startXOffset = (g.area.width - deskRowWidth) / 2 + (g.deskWidth / 2);

        // this.deskColSize = Math.floor((g.area.height - this.teacherZoneHeight) / (g.deskHeight + g.deskGapVert));
        // const deskColWidth = (this.deskColSize * g.deskHeight) + ((this.deskColSize - 1) * g.deskGapVert);
        // g.startYOffset = (((g.area.height - this.teacherZoneHeight) - deskColWidth) / 2) + 8;

        // for (let y = 0; y < this.deskColSize; y++) {
        //     for (let x = 0; x < this.deskRowSize; x++) {
        //         const desk = this.game.add.sprite(
        //             g.area.left + g.startXOffset + ((g.deskWidth + g.deskGapHort) * x),
        //             g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGapVert) * y),
        //             'table');
        //         desk.anchor.setTo(0.5, 1);
        //         desk.scale.setTo(0.5);
        //     }
        // }
        // this.generatePupils();

        // this.teacher = new Teacher(this.game, g.area.left + (g.area.width / 2), g.area.top + this.teacherZoneHeight);
    }

    createClassScroll() {
        this.classFloorSpr.savedPosition = new Phaser.Point(g.classGrp.position.x, g.classGrp.position.y);
        this.classFloorSpr.isBeingDragged = false;
        this.classFloorSpr.scrollingSpeed = 0;
        this.classFloorSpr.inputEnabled = true;
    }

    updateClassScroll() {
        const pointer = this.game.input.activePointer;
        if (pointer.isDown && this.classFloorSpr.getBounds().contains(pointer.x, pointer.y)) {
            this.classFloorSpr.isBeingDragged = true;
        } else {
            this.classFloorSpr.isBeingDragged = false;
        }

        const leftScrollCheck = () => {
            return g.classGrp.position.x > 0;
        };

        const rightScrollCheck = () => {
            return (g.classGrp.position.x + this.classFloorSpr.width) < window.game.width;
        };

        if (this.classFloorSpr.isBeingDragged) {
            this.classFloorSpr.savedPosition = new Phaser.Point(g.classGrp.position.x, g.classGrp.position.y);
            if (!this.classFloorSpr.pointerOffsetX) {
                this.classFloorSpr.pointerOffsetX = (pointer.x - g.classGrp.position.x);
            }
            g.classGrp.position.x = pointer.x - this.classFloorSpr.pointerOffsetX;
            if (leftScrollCheck()) {
                g.classGrp.position.x = 0;
                this.classFloorSpr.pointerOffsetX = (pointer.x - g.classGrp.position.x);
            }
            if (rightScrollCheck()) {
                g.classGrp.position.x = -(this.classFloorSpr.width - this.game.width);
                this.classFloorSpr.pointerOffsetX = (pointer.x - g.classGrp.position.x);
            }
        } else {
            if (this.classFloorSpr.scrollingSpeed > 1) {
                g.classGrp.position.x += this.classFloorSpr.scrollingSpeed * Math.cos(this.classFloorSpr.scrollingAngle);
                if (leftScrollCheck()) {
                    g.classGrp.position.x = 0;
                }
                if (rightScrollCheck()) {
                    g.classGrp.position.x = -(this.classFloorSpr.width - this.game.width);
                }
                this.classFloorSpr.scrollingSpeed *= 0.8;
                this.classFloorSpr.savedPosition = new Phaser.Point(g.classGrp.position.x, g.classGrp.position.y);
            } else {
                const distance = this.classFloorSpr.savedPosition.distance(g.classGrp.position);
                const angle = this.classFloorSpr.savedPosition.angle(g.classGrp.position);
                if (distance > 4) {
                    this.classFloorSpr.scrollingSpeed = distance * 2.5;
                    this.classFloorSpr.scrollingAngle = angle;
                }
            }
            this.classFloorSpr.pointerOffsetX = undefined;
        }
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
        // this.game.debug.geom(this.classFloorSpr.getBounds());
        this.updateClassScroll();
        // if (!g.noInput) {
        //     g.meter -= g.passiveSilence;
        //     if (g.meter < 0) {
        //         g.meter = 0;
        //     }
        // }

        for (let y = 0; y < this.pupils.length; y++) {
            for (let x = 0; x < this.pupils[0].length; x++) {
                if (this.pupils[y][x].update) {
                    this.pupils[y][x].update();
                }
            }
        }
        // this.shouldPassPaper();
        // this.teacher.update();
        // this.meterObj.update();

        // if (g.passToFromIndex) {
        //     const available = [];
        //     if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x].givePaper) {
        //         available.push(new Phaser.Point(g.passToFromIndex.x, g.passToFromIndex.y - 1));
        //     }
        //     if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x - 1].givePaper) {
        //         available.push(new Phaser.Point(g.passToFromIndex.x - 1, g.passToFromIndex.y - 1));
        //     }
        //     if (this.pupils[g.passToFromIndex.y - 1][g.passToFromIndex.x + 1].givePaper) {
        //         available.push(new Phaser.Point(g.passToFromIndex.x + 1, g.passToFromIndex.y - 1));
        //     }
        //     const passTo = this.game.rnd.integerInRange(0, available.length - 1);
        //     this.pupils[available[passTo].y][available[passTo].x].givePaper();
        //     g.passToFromIndex = null;
        // }

        // if (g.win) {
        //     const winTimer = this.game.time.create(true);
        //     winTimer.add(Phaser.Timer.SECOND * 1, () => {
        //         console.log('change to win state');
        //         this.game.state.start('win', true, false);
        //     }, this);
        //     winTimer.start();
        //     g.win = false;
        //     g.noInput = true;
        // }

        // if (g.lose) {
        //     const loseTimer = this.game.time.create(true);
        //     loseTimer.add(Phaser.Timer.SECOND * 4, () => {
        //         console.log('change to lose state');
        //         this.game.state.start('lose', true, false);
        //     }, this);
        //     loseTimer.start();
        //     g.lose = false;
        //     g.noInput = true;
        // }
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
                            g.soundPassPaper = this.game.sound.play('crunchy', 0.6, false);
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