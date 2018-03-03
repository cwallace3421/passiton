import g from '../global';

class Meter {

    constructor(game, x, y) {
        this.game = game;

        this.backSpr = this.game.add.sprite(x + 1, y, 'pixel');
        this.backSpr.width = 30 * 2;
        this.backSpr.height = 112 * 2;
        this.backSpr.tint = 0x1F3429;
        g.envGrp.add(this.backSpr);

        this.meterSpr = this.game.add.sprite(x + 7, y, 'pixel');
        this.meterSpr.width = 26 * 2;
        this.meterSpr.height = 112 * 2;
        this.meterSpr.position.y += this.meterSpr.height;
        this.meterSpr.tint = 0x790000;
        this.meterSpr.anchor.setTo(0, 1);
        g.envGrp.add(this.meterSpr);

        this.frameSpr = this.game.add.sprite(x, y, 'meter_board');
        // this.frameSpr.scale.setTo(0.5);
    }

    update() {
        this.meterSpr.height = Math.ceil((g.meter / 100) * (192 / 2)) + 3;
    }

}

module.exports = Meter;