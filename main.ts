input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    Bird.change(LedSpriteProperty.Y, 1)
})
let Ticks = 0
let EmptyObstacle = 0
let Bird: game.LedSprite = null
let Pass = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 130)
Bird.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    for (let Obstacle of Obstacles) {
        if (Obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
            game.setScore(Pass)
            game.gameOver()
        }
    }
    if (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
            Obstacles.removeAt(0).delete()
        }
        if (Bird.get(LedSpriteProperty.Y) == EmptyObstacle) {
            Pass += 1
        }
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 5 == 0) {
        EmptyObstacle = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != EmptyObstacle) {
                Obstacles.push(game.createSprite(4, index))
            }
        }
    }
    if (Ticks > 0 && Ticks <= 10) {
        basic.pause(800)
    } else if (Ticks > 10 && Ticks <= 20) {
        basic.pause(500)
    } else if (Ticks > 20 && Ticks <= 30) {
        basic.pause(250)
    } else if (Ticks > 30 && Ticks <= 40) {
        basic.pause(100)
    } else if (Ticks > 40 && Ticks <= 50) {
        basic.pause(50)
    } else {
        basic.pause(20)
    }
    serial.writeLine("" + (Pass))
    Ticks += 1
})
