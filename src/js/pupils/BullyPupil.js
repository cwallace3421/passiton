import g from '../global';

class BullyPupil {

    constructor(game, iX, iY) {
        this.game = game;
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.paper = false;

        this.index = new Phaser.Point(iX, iY);

        const x = g.area.left + g.startXOffset + ((g.deskWidth + g.deskGap) * iX) - g.deskGap + (g.deskWidth / 2) - 17;
        const y = g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGap) * iY) - g.deskGap + 38;

        this.spr = this.game.add.sprite(x, y, 'bully');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);

        this.beatupSpr = this.game.add.sprite(-100, -100, 'beatup');
        this.beatupSpr.anchor.setTo(0.5);
        this.beatupSpr.scale.setTo(0.8);
        this.beatupSpr.visible = false;
        g.topGrp.add(this.beatupSpr);
        this.aniBeatup = this.beatupSpr.animations.add('beatup', [0, 1, 2], 4, true);
        this.aniBeatup.play('beatup');

        this.coll = new Phaser.Circle(x + (this.spr.width / 2), y - (this.spr.height / 2) - 10, 140);

        // this.game.debug.geom(this.coll);
    }

    destroy() {
        this.spr.destroy();
        this.beatupSpr.destroy();
        this.coll = null;
    }

    update() {
        if (g.currentPoint && this.coll.contains(g.currentPoint.x, g.currentPoint.y) && g.armActive && !g.stopArm) {
            g.bullyStopArm = true;
            g.meter += g.bullyNoise;
            if (g.meter > 100) {
                g.meter = 100;
            }
            this.paper = true;
            this.toggleBeatup(true, g.currentPoint);
        }
        if (this.paper && !this.passTimer) {
            this.passTimer = this.game.time.create(true);
            this.passTimer.add(Phaser.Timer.SECOND * 2, () => {
                console.log('bully pass timer complete');
                this.toggleBeatup(false);
                this.passTimer = undefined;
                g.passToFromIndex = this.index;
            }, this);
            this.passTimer.start();
            this.paper = false;
        }
    }

    toggleBeatup(active, point) {
        if (active) {
            this.aniBeatup.play('beatup');
            this.beatupSpr.position.x = point.x;
            this.beatupSpr.position.y = point.y;
            this.beatupSpr.visible = true;
        } else {
            this.aniBeatup.stop();
            this.beatupSpr.position.x = -100;
            this.beatupSpr.position.y = -100;
            this.beatupSpr.visible = false;
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