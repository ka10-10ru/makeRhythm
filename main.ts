input.onButtonPressed(Button.A, function () {
    if (flag == 0) {
        opennig()
    } else {
        score = "1" + score
    }
})
function opennig () {
    basic.showString("Ready!")
    for (let カウンター = 0; カウンター <= 3; カウンター++) {
        basic.showNumber(3 - カウンター)
        basic.pause(500)
    }
    basic.clearScreen()
    flag = 1
}
input.onButtonPressed(Button.B, function () {
    flag = 0
    rythm()
})
function rythm () {
    for (let カウンター = 0; カウンター <= score.length; カウンター++) {
        if (score.charAt(カウンター) == "1") {
            music.playTone(523, music.beat(BeatFraction.Whole))
        } else {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        basic.pause(500)
    }
}
let flag = 0
let score = ""
score = ""
flag = 0
basic.forever(function () {
    if (flag == 1) {
        if (!(input.buttonIsPressed(Button.A))) {
            score = "0" + score
        }
        basic.pause(500)
        led.toggle(2, 2)
    }
})
