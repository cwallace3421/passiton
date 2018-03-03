import g from '../global';

class _Pupil {

    constructor(game, type, x, y, key, frame, anchor = { x: 0.5, y: 1 }) {
        console.log('_Pupil');
        this.game = game;
        this.type = type;
        this.paper = false;
        this.frame = frame;
        this.pos = new Phaser.Point(x, y);
        if (Array.isArray(this.frame)) {
            this.frame = this.game.rnd.integerInRange(this.frame[0], this.frame[1]);
        }
        this.pupilSpr = this.game.add.sprite(this.pos.x, this.pos.y, key, this.frame);
        this.pupilSpr.anchor.setTo(0.5, 1);
        g.classGrp.add(this.pupilSpr);
    }

    destroy() {
        this.pupilSpr.destroy();
        if (this.outlineSpr) {
            this.outlineSpr.destroy();
        }
    }

    update() {
        return false;
    }

    check(x, y) {
        return false;
    }

    highlight(highlight) {
        console.error('highlight(highlight) has not been implemented');
        return false;
    }

    givePaper() {
        console.error('givePaper() has not been implemented');
        return false;
    }

    takePaper() {
        console.error('takePaper() has not been implemented');
        return false;
    }

    hasPaper() {
        return this.paper;
    }

    isSelectable() {
        return false;
    }

    getSprite() {
        return this.pupilSpr;
    }

    getType() {
        return this.type;
    }

    getGame() {
        return this.game;
    }

    getPosition() {
        return this.pos;
    }

}

module.exports = _Pupil;