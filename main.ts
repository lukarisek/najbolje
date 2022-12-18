basic.forever(function () {
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("C5 B C5 B C5 B C5 B ", 120)
    music.playMelody("C5 C5 C5 C5 C C C C ", 120)
    music.playMelody("E D G F B A C5 B ", 120)
    music.playMelody("B C5 - - - - - - ", 120)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
