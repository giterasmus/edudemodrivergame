function FahrerTrainer () {
    basic.clearScreen()
    if (begrenzungsLichterPosition == 5) {
        if (freiePosition != fahrerPosition) {
            zustand = 1
        } else {
            Spielstand += 1
            erhöheV(Spielstand)
        }
        initialisiereBegrenzungsLichter()
        return 0
    }
    for (let j = 0; j <= 3; j++) {
        led.plot(BegrenzungsLichter[j], begrenzungsLichterPosition)
    }
    begrenzungsLichterPosition += 1
    led.plot(fahrerPosition, 4)
    return 0
}
function SpielEnde () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showNumber(Spielstand - 1)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    if (fahrerPosition == 0) {
        fahrerPosition = 1
    }
    led.unplot(fahrerPosition, 4)
    fahrerPosition += -1
    led.plot(fahrerPosition, 4)
})
/**
 * Weiterentwicklung von DriverGame
 */
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
    if (fahrerPosition == 4) {
        fahrerPosition = 3
    }
    led.unplot(fahrerPosition, 4)
    fahrerPosition += 1
    led.plot(fahrerPosition, 4)
})
function initialisiereBegrenzungsLichter () {
    begrenzungsLichterPosition = 0
    freiePosition = randint(0, 4)
    BegrenzungsLichter = []
    for (let i = 0; i <= 4; i++) {
        if (freiePosition != i) {
            BegrenzungsLichter.push(i)
        }
    }
}
let BegrenzungsLichter: number[] = []
let freiePosition = 0
let Geschwindigkeit = 0
let begrenzungsLichterPosition = 0
let fahrerPosition = 0
let zustand = 0
let Spielstand = 0
Spielstand = 0
zustand = 0
fahrerPosition = 0
begrenzungsLichterPosition = 5
Geschwindigkeit = 1000
basic.forever(function () {
    if (zustand == 0) {
        FahrerTrainer()
    } else if (zustand == 1) {
        SpielEnde()
    }
    basic.pause(Geschwindigkeit)
})
