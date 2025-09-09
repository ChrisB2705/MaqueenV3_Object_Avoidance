maqueenPlusV2.i2c_init()
matrixLidarDistance.initialize(matrixLidarDistance.Addr.ADDR4,
    matrixLidarDistance.Matrix.OBS)
matrixLidarDistance.set_obstacle_distance(160)

def on_forever():
    matrixLidarDistance.get_data()
    if matrixLidarDistance.obstacle_suggestion() == 3:
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.ALL_MOTOR,
            maqueenPlusV2.MyEnumDir.FORWARD,
            130)
    if matrixLidarDistance.obstacle_suggestion() == 2:
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.LEFT_MOTOR,
            maqueenPlusV2.MyEnumDir.FORWARD,
            130)
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.RIGHT_MOTOR,
            maqueenPlusV2.MyEnumDir.BACKWARD,
            130)
    if matrixLidarDistance.obstacle_suggestion() == 1:
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.LEFT_MOTOR,
            maqueenPlusV2.MyEnumDir.BACKWARD,
            130)
        maqueenPlusV2.control_motor(maqueenPlusV2.MyEnumMotor.RIGHT_MOTOR,
            maqueenPlusV2.MyEnumDir.FORWARD,
            130)
basic.forever(on_forever)
