input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Bird: game.LedSprite = null
let Obstacles: number[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 150)
Bird.set(LedSpriteProperty.Brightness, 150)
