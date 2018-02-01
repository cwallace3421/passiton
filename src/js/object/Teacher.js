import g from '../global';
import AlertManager from '../manager/AlertManager';

class Teacher {

    constructor(game, x, y) {
        this.game = game;
        this.spr = this.game.add.sprite(x, y, 'teacher', 0);
        this.spr.anchor.setTo(0.5, 1);
        this.spr.scale.setTo(0.5);

        this.aniTurn = this.spr.animations.add('turn', [1, 5, 5, 2], 2, false);
        this.aniTurn.onComplete.add(() => {
            const waitTimer = this.game.time.create(true);
            waitTimer.add(Phaser.Timer.SECOND * 4, () => {
                console.log('waitTurner complete');
                this.aniTurn.stop();
                this.turnTimer = undefined;

                if (g.noInput) {
                    this.spr.frame = 2;
                    return;
                }

                for (let i = 0; i < this.game.rnd.integerInRange(2, 6); i++) {
                    this.lowerMeter();
                }

                this.aniChalk.play('chalk');
                this.facingClass = false;
                g.soundTeacherTalk.resume();
            }, this);
            waitTimer.start();
            this.facingClass = true;
            console.log('waitTimer start');
        });

        this.aniChalk = this.spr.animations.add('chalk', [0, 1], 2, true);
        this.aniChalk.play('chalk');

        g.soundTeacherTalk = this.game.sound.play('teacher_talk', 0.5, true);

        this.startPhase = true;

        this.startTimer = this.game.time.create(true);
        this.startTimer.add(Phaser.Timer.SECOND * 5, () => {
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
                this.turnTimer.add(Phaser.Timer.SECOND * 4.5, () => {
                    console.log('turnTimer complete');
                    this.turn();
                }, this);
                this.turnTimer.start();

                console.log('turnTimer start');
            }
        }
        if (g.meter >= 100) {
            g.lose = true;
        }
        if (this.facingClass && g.currentPoint) {
            g.lose = true;
        }
        if (g.lose && !this.alerting) {
            AlertManager.pingAlert(this.game, this.spr.position.x, this.spr.position.y, -4, -this.spr.height + 36, 6);
            this.alerting = true;
        }
        if (g.lose) {
            g.noInput = true;
            this.spr.frame = 2;
            g.soundTeacherTalk.stop();
            if (!g.soundTeacherScream) {
                g.soundTeacherScream = this.game.sound.play('scream_teacher', 0.4, false);
            }
        }
    }

    turn() {
        console.log('turning');
        if (this.turnTimer) {
            this.turnTimer.stop();
        }
        this.aniChalk.stop();
        this.aniTurn.play('turn');
        g.soundTeacherTalk.pause();
    }

    lowerMeter() {
        g.meter -= 8;
        if (g.meter < 0) {
            g.meter = 0;
        }
    }

}

module.exports = Teacher;