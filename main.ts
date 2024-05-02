controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mario.vy = -150
})
let mario: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel2`)
mario = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . e e e d d f d . . . . . 
    . . . e d e d d d f d d d . . . 
    . . . e d e d d d d f d d d . . 
    . . . e e d d d d f f f f . . . 
    . . . . . d d d d d d d . . . . 
    . . . . 2 2 8 2 2 2 . . . . . . 
    . . . 2 2 2 8 2 2 8 2 2 2 . . . 
    . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
    . . d d 2 8 5 8 8 5 8 2 d d . . 
    . . d d d 8 8 8 8 8 8 d d d . . 
    . . d d 8 8 8 8 8 8 8 8 d d . . 
    . . . . 8 8 8 . . 8 8 8 . . . . 
    . . . e e e . . . . e e e . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mario)
mario.ay = 300
controller.moveSprite(mario, 100, 0)
let malo = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . e f f e e e e e e f f e . . 
    . e e e d f e e e e f d e e e . 
    . e e e d f f f f f f d e e e . 
    e e e e d f d e e d f d e e e e 
    e e e e d d d e e d d d e e e e 
    e e e e e e e e e e e e e e e e 
    . e e e e d d d d d d e e e e . 
    . . . . d d d d d d d d . . . . 
    . . f f d d d d d d d d f f . . 
    . f f f f d d d d d d f f f f . 
    . f f f f f f d d f f f f f f . 
    . . f f f f f d d f f f f f . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(malo, tiles.getTileLocation(15, 7))
malo.vx = 40
malo.setBounceOnWall(true)
