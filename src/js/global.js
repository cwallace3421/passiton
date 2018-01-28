const global = {
    areaW: 780,
    areaH: 560,
    deskWidth: 174 / 2,
    deskHeight: 120 / 2,
    deskGap: 20,
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
    topGrp: null,
    bullyStopArm: false,
    petStopArm: false,
    passToFromIndex: null,

    bullyNoise: 20,
    armNoise: 0.5
}

export default global;