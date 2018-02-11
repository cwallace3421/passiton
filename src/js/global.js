const global = {
    areaW: 780,
    areaH: 560,
    deskWidth: 154 / 2,
    deskHeight: 136 / 2,
    deskGapVert: 18,
    deskGapHort: 22,
    area: null,
    startXOffset: null,
    startYOffset: null,
    armActive: false,
    radiansOffset: Phaser.Math.degToRad(90),
    maxArmLength: 110,
    droppedPoint: null,
    currentPoint: null,
    activePupil: null,
    meter: 0,
    win: false,
    lose: false,
    armGrp: null,
    envGrp: null,
    classGrp: null,
    topGrp: null,
    bullyStopArm: false,
    petStopArm: false,
    passToFromIndex: null,

    noInput: false,

    bullyNoise: 20,
    armNoise: 0.3,
    passiveSilence: 0.01,

    soundBackground: null,
    soundTeacherScream: null,
    soundTeacherTalk: null,
    soundPetScream: null,
    soundBullyGrunts: null,
    soundPassPaper: null
}

export default global;