import g from '../global';

class ArmManager {

    constructor(parent, game, pupil, startX, startY) {
        this.parent = new Phaser.Rectangle(parent.left, parent.top, parent.width, parent.height);
        this.game = game;
        this.pupil = pupil;
        this.startPos = new Phaser.Point(startX, startY);

        this.spr = this.game.add.sprite(startX, startY, 'arm');
        // this.spr.width = 8;
        // this.spr.height = 2;
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.8);
        this.spr.visible = false;
        g.armGrp.add(this.spr);

        const handX = this.startPos.x + this.spr.height * Math.cos(this.spr.rotation - g.radiansOffset);
        const handY = this.startPos.y + this.spr.height * Math.sin(this.spr.rotation - g.radiansOffset);

        this.handSpr = this.game.add.sprite(startX, startY, 'hand');
        this.handSpr.anchor.setTo(0.5, 0.5);
        this.handSpr.scale.setTo(0.5);
        this.handSpr.visible = false;
        g.armGrp.add(this.handSpr);
        this.handSpr.bringToTop();
        this.spr.sendToBack();

        this.active = false;
    }

    update() {
        if (!this.pupil.hasPaper()) {
            return;
        }

        const mousePos = new Phaser.Point(this.game.input.activePointer.x, this.game.input.activePointer.y);
        const isDown = this.game.input.activePointer.leftButton.isDown;

        const endX = this.startPos.x + this.spr.height * Math.cos(this.spr.rotation - g.radiansOffset);
        const endY = this.startPos.y + this.spr.height * Math.sin(this.spr.rotation - g.radiansOffset);

        this.handSpr.position.x = endX;
        this.handSpr.position.y = endY;
        this.handSpr.rotation = this.spr.rotation;

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

            g.currentPoint = new Phaser.Point(endX, endY);
            g.meter += g.armNoise;
            if (g.meter > 100) {
                g.meter = 100;
            }

            if (!isDown && this.active) {
                this.toggleActive(false);
                g.droppedPoint = new Phaser.Point(endX, endY);
                console.log('line release');
            }
        }

        if (g.noInput) {
            this.toggleActive(false);
        }

        if (g.lose) {
            this.toggleActive(false);
            g.noInput = true;
        }

        if (g.bullyStopArm) {
            this.toggleActive(false);
            g.bullyStopArm = false;
            this.pupil.takePaper();
        }

        if (g.petStopArm) {
            this.toggleActive(false);
            g.petStopArm = false;
            this.pupil.takePaper();
        }
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
        this.handSpr.visible = active;

        if (!active) {
            this.spr.position.x = this.startPos.x;
            this.spr.position.y = this.startPos.y;
            this.handSpr.position.x = this.startPos.x;
            this.handSpr.position.y = this.startPos.y;
            this.spr.height = 5;
            g.droppedPoint = null;
            g.currentPoint = null;
        }
    }

}

module.exports = ArmManager;