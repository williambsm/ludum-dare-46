class Player {
    constructor(tile) {
        // Set players default hp.
        this.health = 1000;
        // Set player max hp.
        this.maxHealth = 1000;
        // Set players x position.
        this.x = null;
        // Set players y position.
        this.y = null;
        // Set the player tile.
        this.tile = null;
        // Set player movement enabled.
        this.canMove = true;

        // Set player on tile.
        this.movePlayer(tile);
    }

    /**
     * Damage the player.
     *
     * @param amount
     */
    loseHealth(amount) {
        this.health = this.health - amount;
    }

    /**
     * Heal the player.
     *
     * @param amount
     */
    gainHealth(amount) {
        this.health = this.health + amount;
    }

    getHealthPercentage () {
        return this.health * 100 / this.maxHealth;
    }

    /**
     * Move the player on a tile.
     *
     * @param tile
     *
     * @returns {boolean}
     */
    movePlayer(tile) {
        // Check if the tile has obstacles.
        if (tile.flames) {
            return false;
        }

        // Check if there's an old tile.
        if (this.tile) {
            // Remove player.
            this.tile.player = false;
        }

        // Move the player to the tile.
        tile.player = true;
        // Set player x position.
        this.x = tile.x;
        // Set the player y position.
        this.y = tile.y;
        // Set the player tile.
        this.tile = tile;

        // Return success.
        return true;
    }
}
