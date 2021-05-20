function anzeigenSpielstand () {
    basic.clearScreen()
    basic.showNumber(Spielstand - 1)
}
function FahrerTrainer () {
    basic.clearScreen()
    // YPosition ist außerhalb des Bildschirmes
    if (begrenzungsLichterYPosition == 5) {
        if (freieXPosition != fahrerXPosition) {
            zustand = 1
        } else {
            Spielstand += 1
            erhöheV(Spielstand)
        }
        initialisiereBegrenzungsLichter()
        return 0
    }
    for (let j = 0; j <= 3; j++) {
        led.plot(begrenzungsLichterXPositionen[j], begrenzungsLichterYPosition)
    }
    begrenzungsLichterYPosition += 1
    led.plot(fahrerXPosition, 4)
    return 0
}
function SpielEnde () {
    basic.clearScreen()
    Geschwindigkeit = 0
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.A, function () {
    if (zustand == 0) {
        if (fahrerXPosition == 0) {
            fahrerXPosition = 1
        }
        led.unplot(fahrerXPosition, 4)
        fahrerXPosition += -1
        led.plot(fahrerXPosition, 4)
    }
})
// Weiterentwicklung von DriverGame
input.onButtonPressed(Button.AB, function () {
    if (zustand != 0) {
        zustand = 0
        Spielstand = 0
    }
})
// Wenn der Spielstand durch 3 teilbar ist, dann erhöhe die Geschwindigkeit um 20%
function erhöheV (SpSt: number) {
    if (SpSt % 3 == 0) {
        Geschwindigkeit += 1
    }
}
input.onButtonPressed(Button.B, function () {
    if (zustand == 0) {
        if (fahrerXPosition == 4) {
            fahrerXPosition = 3
        }
        led.unplot(fahrerXPosition, 4)
        fahrerXPosition += 1
        led.plot(fahrerXPosition, 4)
    }
})
function fahrerblinken () {
    basic.clearScreen()
    for (let Index = 0; Index <= 2; Index++) {
        led.unplot(fahrerXPosition, 4)
        basic.pause(50)
        led.plot(fahrerXPosition, 4)
        basic.pause(50)
    }
}
function initialisiereBegrenzungsLichter () {
    // Setze die Y Positon an den oberen Rand
    begrenzungsLichterYPosition = 0
    // Generiere eine zufällige freie Position
    freieXPosition = randint(0, 4)
    // Lösche das Feld
    begrenzungsLichterXPositionen = []
    // mögliche Werte von 0..4 entspricht der X Position der Begrenzungslichter
    // 
    for (let xPos = 0; xPos <= 4; xPos++) {
        // Diese XPosition muss frei bleiben!
        if (freieXPosition != xPos) {
            // 4 Positionen werden gespeichert in dem Feld
            begrenzungsLichterXPositionen.push(xPos)
        }
    }
}
let IndexV = 0
let begrenzungsLichterYPosition = 0
let begrenzungsLichterXPositionen: number[] = []
let freieXPosition = 0
let Spielstand = 0
let Geschwindigkeit = 0
let fahrerXPosition = 0
let zustand = 0
zustand = 4
fahrerXPosition = 0
Geschwindigkeit = 0
Spielstand = 0
freieXPosition = 0
// Lösche das Feld
begrenzungsLichterXPositionen = []
begrenzungsLichterYPosition = 5
basic.forever(function () {
    if (zustand == 0) {
        IndexV += 1
        if (IndexV % (10 - Geschwindigkeit) == 0) {
            FahrerTrainer()
        }
    } else if (zustand == 1) {
        zustand = 2
        fahrerblinken()
    } else if (zustand == 2) {
        zustand = 3
        SpielEnde()
    } else if (zustand == 3) {
        zustand = 2
        anzeigenSpielstand()
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.pause(100)
})
