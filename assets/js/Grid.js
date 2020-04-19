class Grid {
    constructor (sizeX, sizeY) {
        this.tiles = [];

        // Go through all the rows.
        for (let countY = 0; countY < sizeX; countY = countY + 1) {
            // Go through all the columns.
            for (let countX = 0; countX < sizeY; countX = countX + 1) {
                // Duplicate a new tile.
                let newTile = new Tile(countX, countY);
                // Set the X and Y positions.
                newTile.x = countX;
                newTile.y = countY;
                // Append to the grid.
                this.tiles.push(newTile);
            }
        }
    }

    /**
     * Return a tile using X and Y position.
     *
     * @param posX
     * @param posY
     *
     * @returns {boolean|*}
     */
    getTile (posX, posY) {
        // Go through all the tiles.
        for (let tile of this.tiles) {
            // Check if this is the correct tile.
            if (tile.x === posX && tile.y === posY) {
                // Return tile.
                return tile;
            }
        }

        // Return not found.
        return false;
    }

    /**
     * In this function, you just need to turn all of the tiles off by looping through them and setting them  to heat off.
     * Look at this.tiles to see all the tiles.
     *
     * @returns boolean
     */
    turnTilesOff () {

    }

    /**
     * In this function, you should randomly select between multiple patterns and return it.
     * Possible patterns: [Half of pan, The Big X, The Big Plus, The Four Corners, The Break]
     *
     * @returns string
     */
    selectPattern () {

    }

    /**
     * In this function, you simply need to randomly select a direction and then return it.
     * Possible directions: [Up, Down, Left and Right]
     *
     * @returns string
     */
    selectDirection () {

    }

    /**
     * In this function, you need to find all of the tiles affected by the pattern that need to be turned on.
     *
     * @param pattern
     * @param direction
     *
     * @returns array
     */
    getPatternTiles (pattern,direction) {

    }

    /**
     * In this function, you just need to loop through all the tiles and turn the heat on for each of them.
     *
     * @param tiles
     *
     * @returns boolean
     */
    turnHeatOn (tiles) {

    }
}
