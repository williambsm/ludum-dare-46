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
}
