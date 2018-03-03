import _Pupil from './_Pupil';
import pupilsDef from './PupilMap';

class EmptyPupil extends _Pupil {

    constructor(game, x, y) {
        super(game, pupilsDef.types.Empty, x, y, 'pupils', 0);
    }

}

module.exports = EmptyPupil;