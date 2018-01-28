import g from '../global';

class Teacher {

    constructor(game, x, y) {
        this.game = game;
        this.spr = this.game.add.sprite(x, y, 'teacher', 0);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        this.aniTurn = this.spr.animations.add('turn', [1, 5, 5, 2], 2, false);
        this.aniTurn.onComplete.add(() => {
            const waitTimer = this.game.time.create(true);
            waitTimer.add(Phaser.Timer.SECOND * 5, () => {
                console.log('waitTurner complete');
                for (let i = 0; i < this.game.rnd.integerInRange(1, 3); i++) {
                    this.lowerMeter();
                }
                this.aniTurn.stop();
                this.aniChalk.play('chalk');
                if (this.turnTimer) {
                    console.log(this.turnTimer);
                }
                this.turnTimer = undefined;
                this.facingClass = false;
            }, this);
            waitTimer.start();
            this.facingClass = true;
            console.log('waitTimer start');
        });

        this.aniChalk = this.spr.animations.add('chalk', [0, 1], 2, true);
        this.aniChalk.play('chalk');

        this.startPhase = true;

        this.startTimer = this.game.time.create(true);
        this.startTimer.add(Phaser.Timer.SECOND * 6, () => {
            console.log('startTimer complete');
            this.startPhase = false;
        }, this);
        this.startTimer.start();

        console.log('startTimer start');
    }

    update() {
        if (!this.startPhase) {
            if (!this.turnTimer) {

                this.turnTimer = this.game.time.create(true);
                this.turnTimer.add(Phaser.Timer.SECOND * 3, () => {
                    console.log('turnTimer complete');
                    this.turn();
                }, this);
                this.turnTimer.start();

                console.log('turnTimer start');
            }
        }
        if (g.meter >= 100) {
            // Exclamantion point
            g.lose = true;
            this.spr.frame = 2;
        }
        if (g.lose) {
            this.spr.frame = 2;
        }
        if (this.facingClass && g.currentPoint) {
            g.lose = true;
            this.spr.frame = 2;
            // Exclamantion point
        }
    }

    turn() {
        console.log('turning');
        if (this.turnTimer) {
            this.turnTimer.stop();
        }
        this.aniChalk.stop();
        this.aniTurn.play('turn');
    }

    lowerMeter() {
        g.meter -= 5;
        if (g.meter < 0) {
            g.meter = 0;
        }
    }

}

module.exports = Teacher;