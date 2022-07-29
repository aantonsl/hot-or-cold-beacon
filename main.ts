radio.setGroup(1)
radio.setTransmitSerialNumber(true)
// Range
radio.setTransmitPower(5)
// Range
basic.forever(function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
})
