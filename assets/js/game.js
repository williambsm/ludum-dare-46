var game = new Vue({
    el: '#game',
    data: {
        settings: {
            // Let's put game settings here.
        },
        game: {
            // The current status of the game. (0: Not started, 1: Started)
            status: 0,
            // The current timer in seconds.
            timer: null,
        },
        player: {
            // Any player stats here.
        }
    },
    methods: {
        /**
         * Start the game.
         */
        startGame: function () {
            // Set game as started.
            this.game.status = 1;
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
        }
    }
});
