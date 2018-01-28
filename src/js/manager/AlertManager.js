import g from '../global';

class AlertManager {

    static pingAlert(game, x, y, offsetx, offsety, showTime = 1) {
        const spr = game.add.sprite(x + offsetx, y + offsety, 'alert');
        spr.anchor.setTo(0.5, 1);
        g.topGrp.add(spr);
        const heightOrg = spr.height;
        spr.height = 0;
        const tween = game.add.tween(spr).to( { height: heightOrg }, 100, 'Linear', true);
        tween.onComplete.add(() => {
            const clearTimer = game.time.create(true);
            clearTimer.add(Phaser.Timer.SECOND * showTime, () => {
                spr.destroy();
            }, this);
            clearTimer.start();
        }, this);
    }

}

module.exports = AlertManager;