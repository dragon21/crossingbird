input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    Bird.change(LedSpriteProperty.Y, 1)
})
let Bird: game.LedSprite = null
let Obstacles: number[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 130)
Bird.set(LedSpriteProperty.Brightness, 100)
