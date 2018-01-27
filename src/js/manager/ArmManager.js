import g from '../global';

class ArmManager {

    constructor(parent, game, pupil, startX, startY) {
        this.parent = new Phaser.Rectangle(parent.left, parent.top, parent.width, parent.height);
        this.parent.uid = Math.floor(Math.random() * 1000);
        this.game = game;
        this.pupil = pupil;
        this.startPos = new Phaser.Point(startX, startY);

        this.spr = this.game.add.sprite(startX, startY, 'pixel');
        this.spr.width = 8;
        this.spr.height = 2;
        this.spr.anchor.setTo(0.5, 1);
        this.spr.tint = 0x000000;
        this.spr.visible = false;

        this.active = false;
    }

    update() {
        if (!this.pupil.hasPaper()) {
            return;
        }

        const mousePos = new Phaser.Point(this.game.input.activePointer.x, this.game.input.activePointer.y);
        const isDown = this.game.input.activePointer.leftButton.isDown;

        if (!this.active && !g.armActive) {
            if (this.parent.contains(mousePos.x, mousePos.y) && isDown) {
                this.setArmLength(mousePos);
                this.setArmAngle(mousePos);
                this.toggleActive(true);
                console.log('line active');
            }
        } else {
            this.setArmLength(mousePos);
            this.setArmAngle(mousePos);

            if (!isDown && this.active) {
                this.toggleActive(false);
                const endX = this.startPos.x + this.spr.height * Math.cos(this.spr.rotation - g.radiansOffset);
                const endY = this.startPos.y + this.spr.height * Math.sin(this.spr.rotation - g.radiansOffset);
                g.droppedPoint = new Phaser.Point(endX, endY);
                console.log('line release');
            }
        }
        this.spr.bringToTop();
    }

    setArmLength(pos) {
        let length =  Math.floor(Phaser.Math.distance(this.startPos.x, this.startPos.y, pos.x, pos.y));
        if (length < 0) {
            length = 0;
        } else if (length > g.maxArmLength) {
            length = g.maxArmLength;
        }
        this.spr.height = length;
    }

    setArmAngle(pos) {
        this.spr.rotation = Phaser.Point.angle(this.startPos, pos) - g.radiansOffset;
    }

    toggleActive(active) {
        this.active = active;
        this.spr.visible = active;
        g.armActive = active;
    }

}

module.exports = ArmManager;