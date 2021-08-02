scene.onOverlapTile(SpriteKind.Player, assets.tile`lasso`, function (sprite, location) {
    music.magicWand.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    info.changeScoreBy(1)
    music.footstep.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
info.setScore(0)
let mySprite = sprites.create(assets.image`Wonder_Woman`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`Maze1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
