import g from '../global';
import utils from '../utils';
import AlertManager from '../manager/AlertManager';

class PetPupil {

    constructor(game, iX, iY) {
        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        const pos = utils.deskXYIndexToXYPoint(iX, iY);

        this.spr = this.game.add.sprite(pos.x, pos.y, 'pupils', 7);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        this.coll = new Phaser.Circle(pos.x, pos.y - (this.spr.height / 2) + 10, 130);

        // this.game.debug.geom(this.coll);
    }

    destroy() {
        this.spr.destroy();
        this.coll = null;
    }

    update() {
        if (g.currentPoint && this.coll.contains(g.currentPoint.x, g.currentPoint.y) && !g.lose) {
            AlertManager.pingAlert(this.game, this.spr.position.x, this.spr.position.y, 0, -this.spr.height + 45);
            g.meter = 100;
            g.petStopArm = true;
            g.soundPetScream = this.game.sound.play('scream_pet', 0.4, false);
        }
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
        return false;
    }

}

module.exports = PetPupil;