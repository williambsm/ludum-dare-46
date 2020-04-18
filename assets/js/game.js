// The game's instance.
var game = new Vue({
    // The game's main element. The whole Vue instance only works within it.
    el: '#game',
    data: {
        interface: 'menu',
        settings: {
            tilesX: 5,
            tilesY: 5,
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
            // Build the grid.
            this.buildGrid();
            // Star the timer.
            this.startTimer();
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
         * Build the grid.
         */
        buildGrid: function () {
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
        movePlayer: function () {
            // Move the player.
        },
        addObstacle: function () {
            // Spawn an obstacle.
        },
        removeObstacle: function () {
            // Remove an obstacle.
        },
        heatTile: function () {
            // Heat a tile up.
        },
        coolTile: function () {
            // Cool a tile down.
        },
        damagePlayer: function () {
            // Deal damage to the player.
        },
        healPlayer: function () {
            // Heal the player.
        },
        killPlayer: function () {
            // If the player dies.
        }
    }
});
