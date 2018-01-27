import g from '../global';

class EmptyPupil {

    constructor(game, iX, iY) {
        this.game = game;
        const x = g.area.left + g.startXOffset + ((g.deskWidth + g.deskGap) * iX) - g.deskGap + (g.deskWidth / 2) - 4;
        const y = g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGap) * iY) - g.deskGap + 42;
        this.spr = this.game.add.sprite(x, y, 'chair');
        this.spr.anchor.setTo(0, 1);
        this.spr.scale.setTo(0.5);
    }

    update() {

    }

    select() {

    }

    check(x, y) {

    }

    highlight(highlight) {

    }

    isSelectable() {
        return false;
    }

    getSpeed() {

    }

    getNoise() {

    }

}

module.exports = EmptyPupil;