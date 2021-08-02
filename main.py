def on_overlap_tile(sprite, location):
    music.magic_wand.play()
    tiles.set_tile_at(location, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lasso
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    info.change_score_by(1)
    music.footstep.play()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        transparency16
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_large,
    on_overlap_tile3)

info.set_score(0)
mySprite = sprites.create(assets.image("""
    Wonder_Woman
"""), SpriteKind.player)
controller.move_sprite(mySprite, 150, 150)
scene.set_background_color(11)
tiles.set_tilemap(tilemap("""
    Maze1
"""))
tiles.place_on_random_tile(mySprite, sprites.dungeon.stair_west)
scene.camera_follow_sprite(mySprite)
info.start_countdown(20)