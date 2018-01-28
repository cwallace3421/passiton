import g from '../global';
import AlertManager from '../manager/AlertManager';

class PetPupil {

    constructor(game, iX, iY) {
        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        const x = g.area.left + g.startXOffset + ((g.deskWidth + g.deskGap) * iX) - g.deskGap + (g.deskWidth / 2) - 12;
        const y = g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGap) * iY) - g.deskGap + 38;

        this.spr = this.game.add.sprite(x, y, 'teachers_pet');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);

        this.coll = new Phaser.Circle(x + (this.spr.width / 2), y - (this.spr.height / 2) - 10, 140);

        // this.game.debug.geom(this.coll);
    }

    destroy() {
        this.spr.destroy();
        this.coll = null;
    }

    update() {
        if (g.currentPoint && this.coll.contains(g.currentPoint.x, g.currentPoint.y) && !g.lose) {
            AlertManager.pingAlert(this.game, this.spr.position.x, this.spr.position.y, this.spr.width / 2, -this.spr.height + 35);
            g.meter = 1000;
            g.petStopArm = true;
            g.soundPetScream = this.game.sound.play('scream_pet', 0.4, false);
        }
    }

    select() {

    }

    check(x, y) {
        return this.coll.contains(x, y);
    }

    highlight(highlight) {
        if (highlight) {
            this.spr.tint = 0xAAAAAA;
        } else {
            this.spr.tint = 0xFFFFFF;
        }
    }

    isSelectable() {
        return true;
    }

    getSpeed() {
        return this.speed;
    }

    getNoise() {
        return this.game.rnd.integerInRange(this.noiseRange[0], this.noiseRange[1]);
    }
}

module.exports = PetPupil;