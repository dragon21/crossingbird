input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    Bird.change(LedSpriteProperty.Y, 1)
})
let EmptyObstacle = 0
let Ticks = 0
let Bird: game.LedSprite = null
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 130)
Bird.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    for (let Obstacle of Obstacles) {
        if (Obstacle.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
        game.addScore(1)
    }
    for (let Obstacle of Obstacles) {
        Obstacle.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 4 == 0) {
        EmptyObstacle = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != EmptyObstacle) {
                Obstacles.push(game.createSprite(4, index))
            }
        }
    }
    Ticks += 1
    basic.pause(1000)
})
