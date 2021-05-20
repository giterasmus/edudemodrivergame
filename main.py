def FahrerTrainer():
    global zustand, Spielstand, begrenzungsLichterPosition
    basic.clear_screen()
    if begrenzungsLichterPosition == 5:
        if freiePosition != fahrerPosition:
            zustand = 1
        else:
            Spielstand += 1
            erhöheV(Spielstand)
        initialisiereBegrenzungsLichter()
        return 0
    for j in range(4):
        led.plot(BegrenzungsLichter[j], begrenzungsLichterPosition)
    begrenzungsLichterPosition += 1
    led.plot(fahrerPosition, 4)
    return 0
def SpielEnde():
    basic.show_icon(IconNames.NO)
    basic.pause(1000)
    basic.show_number(Spielstand - 1)
    basic.pause(200)

def on_button_pressed_a():
    global fahrerPosition
    if fahrerPosition == 0:
        fahrerPosition = 1
    led.unplot(fahrerPosition, 4)
    fahrerPosition += -1
    led.plot(fahrerPosition, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

Weiterentwicklung von DriverGame

"""

def on_button_pressed_ab():
    global zustand, Spielstand
    zustand = 0
    Spielstand = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Wenn der Spielstand durch 3 teilbar ist, dann erhöhe die Geschwindigkeit um 20%
def erhöheV(SpSt: number):
    global Geschwindigkeit
    if SpSt % 3 == 0:
        Geschwindigkeit = Geschwindigkeit * 0.8

def on_button_pressed_b():
    global fahrerPosition
    if fahrerPosition == 4:
        fahrerPosition = 3
    led.unplot(fahrerPosition, 4)
    fahrerPosition += 1
    led.plot(fahrerPosition, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

def initialisiereBegrenzungsLichter():
    global begrenzungsLichterPosition, freiePosition, BegrenzungsLichter
    begrenzungsLichterPosition = 0
    freiePosition = randint(0, 4)
    BegrenzungsLichter = []
    for i in range(5):
        if freiePosition != i:
            BegrenzungsLichter.append(i)
BegrenzungsLichter: List[number] = []
freiePosition = 0
Geschwindigkeit = 0
begrenzungsLichterPosition = 0
fahrerPosition = 0
zustand = 0
Spielstand = 0
Spielstand = 0
zustand = 0
fahrerPosition = 0
begrenzungsLichterPosition = 5
Geschwindigkeit = 1000

def on_forever():
    if zustand == 0:
        FahrerTrainer()
    elif zustand == 1:
        SpielEnde()
    basic.pause(Geschwindigkeit)
basic.forever(on_forever)
