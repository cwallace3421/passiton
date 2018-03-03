import _Pupil from './_Pupil';
import {types} from './PupilMap';
import g from '../global';
import utils from '../utils';
import ArmManager from '../manager/ArmManager';
import FilterManager from '../manager/FilterManager';

class HeroPupil extends _Pupil {

    constructor(game, iX, iY, type) {
        super(game, types.NEUTRAL, x, y, 'pupils', [3, 6]);
        this.game = game;
        this.paper = false;

        let pupil = this.game.rnd.integerInRange(3, 6);
        if (type === 'hero') {
            this.hero = true;
            pupil = 1;
        } else if (type === 'target') {
            this.target = true;
            pupil = 2;
        }

        const pos = utils.deskXYIndexToXYPoint(iX, iY);

        this.sprOutline = this.game.add.sprite(pos.x, pos.y - 9, 'pupils', pupil);
        this.sprOutline.anchor.setTo(0.5, 0.9);
        this.sprOutline.scale.setTo(0.5);
        this.sprOutline.width += 14;
        this.sprOutline.height += 12;
        this.sprOutline.visible = false;

        this.spr = this.game.add.sprite(pos.x, pos.y, 'pupils', pupil);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        if (this.target) {
            this.sprOutline.filters = [FilterManager.getTargetPupilFilter()];
            this.sprOutline.visible = true;
        }

        const collWidth = 60;
        const collHeight = this.spr.height - 45;
        this.coll = new Phaser.Rectangle(pos.x - (collWidth / 2), pos.y - collHeight - 10, collWidth, collHeight);
        this.armManager = new ArmManager(this.coll, this.game, this, this.spr.centerX, this.spr.centerY);

        // this.game.debug.geom(this.coll);
    }

    destroy() {
        this.spr.destroy();
        this.coll = null;
    }

    update() {
        this.armManager.update();
    }

    check(x, y) {
        return this.coll.contains(x, y);
    }

    highlight(highlight) {
        if (highlight && !this.sprOutline.filters) {
            this.sprOutline.filters = [FilterManager.getSelectedPupilFilter()];
            this.sprOutline.visible = true;
        } else if (highlight && this.target) {
            this.sprOutline.filters = [FilterManager.getWinPupilFilter()];
            this.sprOutline.visible = true;
        } else if (!highlight) {
            this.sprOutline.filters = null;
            this.sprOutline.visible = false;
        }
    }

    givePaper() {
        this.highlight(true);
        this.paper = true;
        g.activePupil = this;
        if (this.target) {
            g.win = true; // !!
        }
    }

    takePaper() {
        this.highlight(false);
        this.paper = false;
    }

    hasPaper() {
        return this.paper;
    }

    isSelectable() {
        return true;
    }

}

module.exports = HeroPupil;