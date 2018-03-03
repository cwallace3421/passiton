class ScaleManager {

    constructor() {
        this.isFullScreen = false;
        this.hasRecalcuated = true;
        this.createToggle();
    }

    createToggle() {
        window.game.input.onTap.add((pointer, doubleTap) => {
            // if (doubleTap && !this.isFullScreen) {
            //     window.game.scale.startFullScreen(true, false);
            //     window.game.scale.refresh();
            // } else if (doubleTap) {
            //     window.game.scale.stopFullScreen();
            //     window.game.scale.refresh();
            // }
        }, this);
        window.game.scale.onFullScreenChange.add((scale) => {
            this.toggleFullScreen(scale.isFullScreen);
        }, this);
    }

    fillScreen() {
        if (window.game.scale.width !== window.screen.availWidth) {
            window.game.scale.setMinMax(0, 0, window.screen.availWidth, window.screen.availHeight);
            window.game.scale.setGameSize(Math.ceil(window.screen.availWidth * window.game.scale.scaleFactor.x), 1280);
            window.game.scale.refresh();
        } else {
            window.game.scale.setMinMax(0, 0, window.screen.availWidth, window.screen.availHeight);
            window.game.scale.setGameSize(720, 1280);
            window.game.scale.refresh();
        }
    }

    toggleFullScreen(fullscreen) {
        this.hasRecalcuated = fullscreen !== this.isFullScreen;
        this.isFullScreen = fullscreen;
    }

    update() {
        if (!this.hasRecalcuated) {
            this.fillScreen(game);
            this.hasRecalcuated = true;
        }
    }

    isFullScreen() {
        return this.isFullScreen;
    }

}

module.exports = ScaleManager;