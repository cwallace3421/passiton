class NeutralPupil {

    constructor() {
        this.speed = 10;
        this.noiseRange = [0, 5];
        this.spr = null;
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
        return true;
    }

    getSpeed() {
        return this.speed;
    }

    getNoise() {
        return this.game.rnd.integerInRange(this.noiseRange[0], this.noiseRange[1]);
    }

}

module.exports = NeutralPupil;