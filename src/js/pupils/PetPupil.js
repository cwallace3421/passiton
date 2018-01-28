import g from '../global';

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

        // this.alert = this.game.add.sprite(x + (this.spr.width / 2) + 2, y - 76, 'alert');
        // this.alert.anchor.setTo(0.5, 1);

        // this.coll = new Phaser.Rectangle(x, y - this.spr.height + 5, this.spr.width, this.spr.height - 25);
        this.coll = new Phaser.Circle(x + (this.spr.width / 2), y - (this.spr.height / 2) - 10, 140);

        // this.game.debug.geom(this.coll);
    }

    destroy() {
        this.spr.destroy();
        this.coll = null;
    }

    update() {
        if (g.currentPoint && this.coll.contains(g.currentPoint.x, g.currentPoint.y)) {
            g.lose = true;
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