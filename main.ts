/**
 * Weiterentwicklung von DriverGame
 */
function FahrerTrainer () {
    basic.clearScreen()
    if (BegrenzungslichterPosition == 5) {
        if (keinHindernis != position) {
            zustand = 1
        } else {
            Spielstand += 1
            erhöheV(Spielstand)
        }
        BegrenzungslichterPosition = 0
        keinHindernis = randint(0, 4)
        BegrenzungsLichter = []
        for (let i = 0; i <= 4; i++) {
            if (keinHindernis != i) {
                BegrenzungsLichter.push(i)
            }
        }
        return 0
    }
    for (let j = 0; j <= 3; j++) {
        led.plot(BegrenzungsLichter[j], BegrenzungslichterPosition)
    }
    BegrenzungslichterPosition += 1
    led.plot(position, 4)
    return 0
}
function SpielEnde () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showNumber(Spielstand - 1)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    if (position == 0) {
        position = 1
    }
    led.unplot(position, 4)
    position += -1
    led.plot(position, 4)
})
input.onButtonPressed(Button.AB, function () {
    zustand = 0
    Spielstand = 0
})
// Wenn der Spielstand durch 3 teilbar ist, dann erhöhe die Geschwindigkeit um 20%
function erhöheV (SpSt: number) {
    if (Spielstand % 3 == 0) {
        Geschwindigkeit = Geschwindigkeit * 0.8
    }
}
input.onButtonPressed(Button.B, function () {
    if (position == 4) {
        position = 3
    }
    led.unplot(position, 4)
    position += 1
    led.plot(position, 4)
})
let BegrenzungsLichter: number[] = []
let keinHindernis = 0
let Geschwindigkeit = 0
let BegrenzungslichterPosition = 0
let position = 0
let zustand = 0
let Spielstand = 0
Spielstand = 0
zustand = 0
position = 0
BegrenzungslichterPosition = 5
Geschwindigkeit = 1000
basic.forever(function () {
    if (zustand == 0) {
        FahrerTrainer()
    } else if (zustand == 1) {
        SpielEnde()
    }
    basic.pause(Geschwindigkeit)
})
