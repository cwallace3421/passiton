import g from './global';

class Utils {

    static deskXYIndexToXYPoint(iX, iY) {
        const x = g.area.left + g.startXOffset + ((g.deskWidth + g.deskGapHort) * iX);
        const y = g.area.bottom - g.startYOffset - ((g.deskHeight + g.deskGapVert) * iY) + (g.deskHeight / 3);
        return new Phaser.Point(x, y);
    }

}

module.exports = Utils;