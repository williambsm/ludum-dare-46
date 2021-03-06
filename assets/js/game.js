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
            // The starting timer date timestamp.
            timerDate: null,
            // The starting timer event.
            timerEvent: null,
            // The heating damage event timer.
            heatingDamageTimer: 0,
            // Current Round
            currentRound: 1,
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
            // Set game as started.
            this.game.status = 1;
            // Initiate the grid.
            this.initiateGrid();
            // Get starting tile.
            // Initiate player.
            this.initiatePlayer();
            // Initiate the timer.
            this.initiateTimer();
            // Run the update interval.
            this.update();
            // Show game interface.
            this.interface = 'game';
        },

        /**
         * Initiate the grid.
         */
        initiateGrid: function () {
            // Set a new grid.
            this.grid = new Grid(this.settings.tilesX, this.settings.tilesY, this.game.timerDate);
        },

        /**
         * Initiate the player instance.
         */
        initiatePlayer: function () {
            // Get starting tile.
            let startingTile = this.grid.getTile(this.settings.startPositionX, this.settings.startPositionY);
            // Initiate player instance.
            this.player = new Player(startingTile);
        },

        /**
         * Start the timer.
         */
        initiateTimer: function () {
            // Set new timer.
            this.game.timerDate = Date.now();
        },

        /**
         * Format and display the timer.
         *
         * @returns {string}
         */
        displayTimer: function () {
            // Get minutes.
            let minutes = Math.floor((this.game.timer / 100) / 60);
            // Get seconds.
            let seconds = Math.floor((this.game.timer / 100) % 60);
            // Return formatted.
            return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },

        stopTimer: function() {
            clearInterval(this.game.timerEvent);
        },

        gameOver: function () {
            // Stop the timer.
            this.stopTimer();

        },

        update: function () {
            // Refer to this app.
            let gameApp = this;
            // Interval.
            this.game.timerEvent = setInterval(function () {
                // Get timer now.
                let timer = Math.floor((Date.now() - gameApp.game.timerDate) / 10);

                // Set timer elapsed.
                gameApp.game.timer = timer;

                // Check if heating damage timer is higher than needed.
                if (gameApp.game.heatingDamageTimer + 1 <= timer) {
                    // Check for damage.
                    if (gameApp.player.tile.hot || gameApp.player.tile.flames) {
                        gameApp.player.loseHealth(gameApp.player.tile.damage);
                    }
                    // Reset timer.
                    gameApp.game.heatingDamageTimer = timer;
                }

                // Check if the pattern has been set, or if its time for a new pattern
                if (gameApp.grid.lastPatternTime === null || gameApp.grid.lastPatternTime + 300 <= timer){
                    gameApp.grid.rotateHeatedTiles();
                    gameApp.grid.lastPatternTime = timer;
                }

                // Check for game over.
                if (gameApp.player.dead) {
                    gameApp.gameOver();
                }
            }, 1);
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
    },
    created: function () {
        // Mount keyboard events.
        window.addEventListener('keydown', this.onKeyDown);
    }
});
