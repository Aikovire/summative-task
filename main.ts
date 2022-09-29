namespace SpriteKind {
    export const ANemy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(2, 100)
    if (Dog.vy == 0) {
        Dog.vy = -155
    }
})
let Dog: Sprite = null
info.setLife(5)
scene.setBackgroundColor(6)
Dog = sprites.create(img`
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 d d d e . . e d d d 4 . 
    . . 4 d d d d d e e d d d d d 4 
    . . 4 d d 4 4 d d d d 4 4 d d 4 
    . . e d 4 4 d d d d d d 4 4 d e 
    . . . e e d d d d d d d d e e . 
    . . . . e d f d d d d f d e . . 
    f f . . f d d d 4 4 d d d f . . 
    f d f . f d d d f f d d 4 f . . 
    f d d f 4 4 d d d d d d f . . . 
    . f d 4 4 d d d d d d 4 f . . . 
    . . f f d d 4 d d d d d f . . . 
    . . . f d f f d f f f d f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Dog, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Dog)
Dog.ay = 350
