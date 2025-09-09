maqueenPlusV2.I2CInit()
matrixLidarDistance.initialize(matrixLidarDistance.Addr.Addr4, matrixLidarDistance.Matrix.OBS)
matrixLidarDistance.setObstacleDistance(160)
maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.All, maqueenPlusV2.CarLightColors.Green)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . # . # .
    . # # # .
    `)
basic.forever(function () {
    matrixLidarDistance.getData()
    if (matrixLidarDistance.obstacleSuggestion() == 3) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 130)
        maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.All, maqueenPlusV2.CarLightColors.Green)
    }
    if (matrixLidarDistance.obstacleSuggestion() == 2) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Left, maqueenPlusV2.CarLightColors.Red)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 130)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 130)
    }
    if (matrixLidarDistance.obstacleSuggestion() == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        maqueenPlusV2.setRgblLed(maqueenPlusV2.DirectionType.Right, maqueenPlusV2.CarLightColors.Red)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 130)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 130)
    }
})
