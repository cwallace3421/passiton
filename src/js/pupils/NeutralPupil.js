import g from '../global';
import ArmManager from '../manager/ArmManager';

class NeutralPupil {

    constructor(game, iX, iY) {
        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.focus = false;

        const x = g.area.left + g.startXOffset + ((g.deskWidth + g.deskGap) * iX) - g.deskGap + (g.deskWidth / 2) - 10;
        const y = g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGap) * iY) - g.deskGap + 38;
        this.spr = this.game.add.sprite(x, y, 'generic_boy_1');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);
        this.spr.inputEnabled = true;

        this.coll = new Phaser.Rectangle(x, y - this.spr.height, this.spr.width, this.spr.height);
        // this.game.debug.geom(this.coll);

        this.armManager = new ArmManager(this.coll, this.game, this.spr.centerX, this.spr.centerY);

        // this.high = new Phaser.Sprite(this.game, 0, 0, 'generic_boy_1');
        // this.high.anchor.setTo(0.5);
        // this.high.scale.setTo(1.1);
        // this.high.tint = 0xFFFFFF;
        // this.high.alpha = 0.8;
        // this.spr.addChild(this.high);
    }

    update() {
        this.armManager.update();
    }

    select() {

    }

    check(x, y) {

    }

    highlight(highlight) {

    }

    isFocused() {
        return this.focus;
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

module.exports = NeutralPupil;