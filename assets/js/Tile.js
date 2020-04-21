class Tile {
    constructor(x, y) {
        // Set X position.
        this.x = x;
        // Set Y position.
        this.y = y;
        // Set if the tile is hot.
        this.hot = false;
        // Set if the player is on the tile.
        this.player = false;
        // Set if the tile has flames on.
        this.flames = false;
        // Set tile damage if it is hot.
        this.damage = 2;
    }

    /**
     * Set the heat on the tile.
     *
     */
    setHeatOn () {
        this.hot = true;
    }

    /**
     * Set the heat off on the tile.
     */
    setHeatOff () {
        this.hot = false;
    }

    /**
     * Set the flames on on this tile.
     *
     */
    setFlamesOn () {
        // Make sure player is not on this tile.
        if (!this.player) {
            // Set flames on.
            this.flames = true;
        }
    }

    /**
     * Set the flames of on this tile.
     */
    setFlamesOff () {
        this.flames = false;
    }

    /**
     * Set the player as on the tile.
     */
    setPlayerOn () {
        this.player = true;
    }

    /**
     * Set the player off the tile.
     */
    setPlayerOff () {
        this.player = false;
    }
}
