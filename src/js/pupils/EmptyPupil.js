import g from '../global';
import utils from '../utils';

class EmptyPupil {

    constructor(game, iX, iY) {
        this.game = game;

        const pos = utils.deskXYIndexToXYPoint(iX, iY);

        this.spr = this.game.add.sprite(pos.x, pos.y, 'pupils', 0);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);
    }

    destroy() {
        this.spr.destroy();
    }

    update() {

    }

    check(x, y) {

    }

    highlight(highlight) {

    }

    isSelectable() {
        return false;
    }

}

module.exports = EmptyPupil;