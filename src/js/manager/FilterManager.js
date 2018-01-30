import g from '../global';
import FilterColorFillLoad from '../filters/FilterColorFillLoad';

class FilterManager {

    constructor() {
        FilterColorFillLoad();
    }

    getFillColorFilter(r, g, b) {
        const filter = window.game.add.filter('ColorFill', g.areaW, g.areaH);
        filter.u_color = Phaser.Color.createColor(r, g, b);
        return filter;
    }

    getSelectedPupilFilter() {
        if (!this.selectedPupilFilter) {
            this.selectedPupilFilter = this.getFillColorFilter(255, 255, 255);
        }
        return this.selectedPupilFilter;
    }

    getTargetPupilFilter() {
        if (!this.targetPupilFilter) {
            this.targetPupilFilter = this.getFillColorFilter(80, 230, 100);
        }
        return this.targetPupilFilter;
    }

}

module.exports = new FilterManager();