// The game's instance.
var game = new Vue({
    // The game's main element. The whole Vue instance only works within it.
    el: '#game',
    data: {
        interface: 'menu',
        settings: {
            tilesX: 5,
            tilesY: 5,
            startPositionX: 2,
            startPositionY: 2,
        },
        // The current game object.
        game: {
            // The current status of the game. (0: Not started, 1: Started)
            status: 0,
            // The current timer in seconds.
            timer: null,
        },
        // The current player object.
        player: null,
        // The current grid object.
        grid: null,
    },
    methods: {
        /**
         * Start the game.
         */
        startGame: function () {
            // Show game interface.
            this.interface = 'frying-pan';
            // Set game as started.
            this.game.status = 1;
            // Initiate the grid.
            this.initiateGrid();
            // Get starting tile.
            // Initiate player.
            this.initiatePlayer();
            // Initiate the timer.
            this.initiateTimer();
        },

        startTimer: function (duration, callback) {
            // Set start timer.
            this.game.timer = duration;

            // Run timer.
            var timer = setInterval(() => {
                // Decrement the timer.
                this.game.timer = this.game.timer - 1;

                // Check if timer is at zero.
                if (this.game.timer === 0) {
                    // Clear the timer.
                    clearInterval(timer);
                    // Do callback function.
                    callback();
                }
            }, 1000);
        },

        /**
         * Initiate the grid.
         */
        initiateGrid: function () {
            // Set a new grid.
            this.grid = new Grid(this.settings.tilesX, this.settings.tilesY);
        },

        resetGame: function () {
            // Reset the game.
        },
        quitGame: function () {
            // Quit the game.
        },
        nextRound: function () {
            // Increase the difficulty of the game.
        },
        initiatePlayer: function () {
            // Get starting tile.
            let startingTile = this.grid.getTile(this.settings.startPositionX, this.settings.startPositionY);
            // Initiate player instance.
            this.player = new Player(startingTile);
        },
        initiateTimer: function () {

        },
        onKeyDown: function (event) {
            // If left arrow or a key is pressed.
            if (event.which === 37 || event.key === 37 || event.keyCode === 37 || event.which === 65 || event.key === 65 || event.keyCode === 65) {
                // Check if player can move.
                if (this.player && this.player.canMove && this.player.x > 0) {
                    // Get tile to the left.
                    let tile = this.grid.getTile(this.player.tile.x - 1, this.player.tile.y);
                    // Move to the left if possible.
                    this.player.movePlayer(tile);
                }
            }

            // If up arrow or w key is pressed.
            if (event.which === 38 || event.key === 38 || event.keyCode === 38 || event.which === 87 || event.key === 87 || event.keyCode === 87) {
                // Check if player can move.
                if (this.player && this.player.canMove && this.player.y > 0) {
                    // Get tile to the left.
                    let tile = this.grid.getTile(this.player.tile.x, this.player.tile.y - 1);
                    // Move to the left if possible.
                    this.player.movePlayer(tile);
                }
            }

            // If right arrow or d key is pressed.
            if (event.which === 39 || event.key === 39 || event.keyCode === 39 || event.which === 68 || event.key === 68 || event.keyCode === 68) {
                // Check if player can move.
                if (this.player && this.player.canMove && this.player.x < this.settings.tilesX - 1) {
                    // Get tile to the right.
                    let tile = this.grid.getTile(this.player.tile.x + 1, this.player.tile.y);
                    // Move to the right if possible.
                    this.player.movePlayer(tile);
                }
            }

            // If down arrow or s key is pressed.
            if (event.which === 40 || event.key === 40 || event.keyCode === 40 || event.which === 83 || event.key === 83 || event.keyCode === 83) {
                // Check if player can move.
                if (this.player && this.player.canMove && this.player.y < this.settings.tilesY - 1) {
                    // Get tile to the left.
                    let tile = this.grid.getTile(this.player.tile.x, this.player.tile.y + 1);
                    // Move to the left if possible.
                    this.player.movePlayer(tile);
                }
            }
        },
        addObstacle: function () {
            // Spawn an obstacle.
        },
        removeObstacle: function () {
            // Remove an obstacle.
        },
    },
    created: function () {
        window.addEventListener('keydown', this.onKeyDown);
    }
});
