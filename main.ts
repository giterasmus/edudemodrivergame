input.onButtonPressed(Button.A, function () {
    if (position == 0) {
        position = 1
    }
    led.unplot(position, 4)
    position += -1
    led.plot(position, 4)
})
function DriverGame () {
    basic.clearScreen()
    if (linePosition == 5) {
        if (emptySlot != position) {
            state = 1
        } else {
            score += 1
            erhöheV(score)
        }
        linePosition = 0
        emptySlot = randint(0, 4)
        lineLights = []
        for (let i = 0; i <= 4; i++) {
            if (emptySlot != i) {
                lineLights.push(i)
            }
        }
        return 0
    }
    for (let j = 0; j <= 3; j++) {
        led.plot(lineLights[j], linePosition)
    }
    linePosition += 1
    led.plot(position, 4)
    return 0
}
function gameOver () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showNumber(score)
}
input.onButtonPressed(Button.AB, function () {
    state = 0
    score = 0
})
function erhöheV (myscore: number) {
    if (score % 3 == 0) {
        v = v * 0.8
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
let lineLights: number[] = []
let emptySlot = 0
let v = 0
let linePosition = 0
let position = 0
let state = 0
let score = 0
score = 0
state = 0
position = 0
linePosition = 5
v = 1000
basic.forever(function () {
    if (state == 0) {
        DriverGame()
    } else if (state == 1) {
        gameOver()
    }
    basic.pause(v)
})
