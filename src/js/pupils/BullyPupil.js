import g from '../global';

class BullyPupil {

    constructor(game, iX, iY) {
        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        const x = g.area.left + g.startXOffset + ((g.deskWidth + g.deskGap) * iX) - g.deskGap + (g.deskWidth / 2) - 17;
        const y = g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGap) * iY) - g.deskGap + 38;

        this.spr = this.game.add.sprite(x, y, 'bully');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);

        this.coll = new Phaser.Rectangle(x, y - this.spr.height + 5, this.spr.width, this.spr.height - 25);

        // this.game.debug.geom(this.coll);

        // this.high = new Phaser.Sprite(this.game, 0, 0, 'generic_boy_1');
        // this.high.anchor.setTo(0.5);
        // this.high.scale.setTo(1.1);
        // this.high.tint = 0xFFFFFF;
        // this.high.alpha = 0.8;
        // this.spr.addChild(this.high);
    }

    update() {

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

    hasPaper() {
        return this.paper;
    }

    isSelectable() {
        return false;
    }

    getSpeed() {
        return this.speed;
    }

    getNoise() {
        return this.game.rnd.integerInRange(this.noiseRange[0], this.noiseRange[1]);
    }

}

module.exports = BullyPupil;