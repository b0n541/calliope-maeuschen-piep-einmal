enum RadioMessage {
    message1 = 49434,
    maeuschen_piep_einmal = 6027
}
let rolle = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    rolle = 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (rolle == 1) {
        radio.sendString("piep einmal")
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    rolle = 2
})
radio.onReceivedString(function (receivedString) {
    if (rolle == 2 && receivedString == "piep einmal") {
        basic.showIcon(IconNames.Heart)
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.clearScreen()
    }
})
