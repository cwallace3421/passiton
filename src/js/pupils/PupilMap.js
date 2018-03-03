import BullyPupil from '../pupils/BullyPupil';
import EmptyPupil from '../pupils/EmptyPupil';
import NeutralPupil from '../pupils/NeutralPupil';
import PetPupil from '../pupils/PetPupil';

const classes = {
    0: EmptyPupil,
    1: NeutralPupil,
    4: BullyPupil,
    5: PetPupil
};

const types = {
    EMPTY: {
        name: 'EMPTY',
        class: 0
    },
    NEUTRAL: {
        name: 'NEUTRAL',
        class: 1
    },
    HERO: {
        name: 'HERO',
        class: undefined
    },
    TARGET: {
        name: 'TARGET',
        class: undefined
    },
    BULLY: {
        name: 'BULLY',
        class: 4
    },
    PET: {
        name: 'PET',
        class: 5
    }
}

export default {
    classes: classes,
    types: types
};