import _Pupil from './_Pupil';
import pupilsDef from './PupilMap';
import g from '../global';
import ArmManager from '../manager/ArmManager';
import FilterManager from '../manager/FilterManager';

class NeutralPupil extends _Pupil {

    constructor(game, x, y) {
        super(game, pupilsDef.types.NEUTRAL, x, y, 'pupils', [3, 6]);
        this.createOutline();
        this.createCollision();
        // this.arm = new ArmManager(this.collision, this.game, this, this.pupilSpr.centerX, this.pupilSpr.centerY);
    }

    createOutline() {
        this.outlineSpr = this.game.add.sprite(this.getPosition().x, this.getPosition().y - 9, 'pupils', this.frame);
        this.outlineSpr.anchor.setTo(0.5, 0.9);
        this.outlineSpr.scale.setTo(0.5);
        this.outlineSpr.width += 14;
        this.outlineSpr.height += 12;
        this.outlineSpr.visible = false;
    }

    createCollision() {
        const collWidth = 60;
        const collHeight = this.pupilSpr.height - 45;
        // this.getSprite().getBounds().setTo(0, 0, 40, 40);
        // this.pupilSpr.getBounds().setTo(0, 0, 40, 40);
        // this.getSprite().getBounds().setTo(this.getPosition().x - (collWidth / 2), this.getPosition().y - collHeight - 10, collWidth, collHeight);
        // this.collision = new Phaser.Rectangle(this.getPosition().x - (collWidth / 2), this.getPosition().y - collHeight - 10, collWidth, collHeight);
    }

    update() {
        // this.arm.update();
        // this.game.debug.geom(this.getSprite().getBounds());
    }

    check(x, y) {
        return this.collision.contains(x, y);
    }

    highlight(highlight) {
        if (highlight && !this.outlineSpr.filters) {
            this.outlineSpr.filters = [FilterManager.getSelectedPupilFilter()];
            this.outlineSpr.visible = true;
        } else if (!highlight) {
            this.outlineSpr.filters = null;
            this.outlineSpr.visible = false;
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

    isSelectable() {
        return true;
    }

}

module.exports = NeutralPupil;