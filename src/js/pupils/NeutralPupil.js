import g from '../global';
import utils from '../utils';
import ArmManager from '../manager/ArmManager';
import FilterManager from '../manager/FilterManager';

class NeutralPupil {

    constructor(game, iX, iY, type) {
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

        this.sprOutline = this.game.add.sprite(pos.x + 1, pos.y + 4, 'pupils', pupil);
        this.sprOutline.anchor.setTo(0.5, 1);
        this.sprOutline.scale.setTo(0.53);
        this.sprOutline.visible = false;
        g.highGrp.add(this.sprOutline);

        this.spr = this.game.add.sprite(pos.x, pos.y, 'pupils', pupil);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        if (this.target) {
            this.sprOutline.filters = [FilterManager.getTargetPupilFilter()];
            this.sprOutline.visible = true;
        }

        // TODO just render the sprite twice...
        // Make shader that whites out to fill in color

        // this.filter = this.game.add.filter('TestFilter', g.areaW, g.areaH, Phaser.Color.createColor(100, 100, 100), 3, Math.min(1, this.game.world.width / 70), new Phaser.Point(1 / this.game.world.width, 1 / this.game.world.height));
        // this.filter = this.game.add.filter('TestFilter', g.areaW, g.areaH);
        // this.filter.u_color = Phaser.Color.createColor(0, 0, 0);
        // this.filter.border_alpha = 0.5;
        // this.filter.u_viewportInverse = new Phaser.Point(1 / this.game.world.width, 1 / this.game.world.height);
        // this.sprOutline.filters = [this.filter];
        // this.spr.filters = [new Phaser.Filter.TestFilter(this.game, this.spr.width, this.spr.height, Phaser.Color.createColor(100, 100, 100), 3, Math.min(1, this.game.world.width / 70), new Phaser.Point(1 / this.game.world.width, 1 / this.game.world.height))];

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
        } else {
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

module.exports = NeutralPupil;