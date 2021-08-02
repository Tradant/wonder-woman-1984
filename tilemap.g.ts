// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.stairWest,sprites.dungeon.stairLarge], TileScale.Sixteen);
            case "Maze1":
            case "level1":return tiles.createTilemap(hex`100010000201010101010101010101010b0001030708080808080808080808080800080409000000000000000000000000000804070808080800080808080008080c0804070808080800080808080008080808040708080000000808080800000808080407000c00080008080c00000000000804070008080800080800080808080008040700080808000808000808080800080807000808080008080008080b08000808070000000800080800080800000c080407000800080c08080008080808080804070b080008000808000c00000000000a0708080c0800000000080808080808040708080008080008080808080808080406080800000000080808080808080805`, img`
. . . . . . . . . . . 2 . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . . . . . 2 . 
2 2 2 2 2 . 2 2 2 2 . 2 2 . 2 . 
. . . 2 2 . 2 . . 2 . 2 . 2 . . 
. 2 2 . . . 2 . 2 2 . . 2 2 . . 
2 . . . 2 . 2 2 . . . . . . 2 . 
2 . 2 2 2 . 2 2 . 2 2 2 2 . 2 . 
2 . 2 . 2 . 2 2 . 2 2 2 2 . 2 . 
2 . 2 2 2 . 2 2 . 2 2 . 2 . 2 . 
2 . . . 2 . 2 2 . 2 2 . . . 2 . 
2 . 2 . 2 . 2 2 . 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 2 . . . . . . . . 
2 2 2 . 2 . . . . 2 2 2 2 2 2 2 
. . 2 . 2 2 . 2 2 . . . . . . . 
. . 2 . . . . 2 . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairWest,sprites.dungeon.stairLarge,sprites.dungeon.collectibleBlueCrystal,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "lasso":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
