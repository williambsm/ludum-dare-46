class Grid {
    constructor (sizeX, sizeY) {
        this.tiles = [];

        // Set last pattern for preventing the same pattern from going back to back
        this.lastPattern = "";
        this.lastPatternTime = 0;
        this.lastFirePattern = "";
        this.lastFirePatternTime = 0;

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
     * In this function, you just need to turn all of the tiles off by looping through them and setting them to heat off.
     * Look at this.tiles to see all the tiles.
     *
     * @returns boolean
     */
    turnTilesOff () {
        // Go through all the tiles.
        for (let tile of this.tiles) {
            // Turn the hot off
            tile.hot = false;
            // Turn the flames off
            tile.flames = false;
        }

        // Return not found.
        return true;
    }

    /**
     * In this function, you just need to loop through all the tiles and turn the heat on for each of them.
     *
     * @param tiles
     *
     * @returns boolean
     */
    turnTilesOn (tiles) {
        // Go through all the tiles.
        for (let tile of tiles) {
            // Turn the hot off
            tile.hot = true;
        }

        // Return not found.
        return true;
    }

    /**
     * In this function, you just need to loop through all the tiles and turn the heat on for each of them.
     *
     * @param tiles
     *
     * @returns boolean
     */
    turnFireTilesOn (tiles) {
        // Go through all the tiles.
        for (let tile of tiles) {
            // Turn the flame on
            tile.flames = true;
        }

        // Return not found.
        return true;
    }

    /**
     * In this function, you should randomly select between multiple patterns and return it.
     * Possible patterns: [Half of pan, The Big X, The Big Plus, The Four Corners, The Break]
     *
     * @returns string
     */
    selectPattern() {
        let rand = Math.floor(Math.random() * 5) + 1;

        switch (rand) {
            case 1:
                if(this.lastPattern === "Half of Pan"){
                    return this.selectPattern();
                }
                    return "Half of Pan";
                break;
            case 2:
                if(this.lastPattern === "The Big X"){
                    return this.selectPattern();
                }
                    return "The Big X";
                break;
            case 3:
                if(this.lastPattern === "The Big Plus"){
                    return this.selectPattern();
                }
                    return "The Big Plus";
                break;
            case 4:
                if(this.lastPattern === "The Four Corners"){
                    return this.selectPattern();
                }
                    return "The Four Corners";
                break;
            case 5:
                if(this.lastPattern === "The Break"){
                    return this.selectPattern();
                }
                    return "The Break";
                break;
        }
    }

    /**
     * In this function, you should randomly select between multiple patterns and return it.
     * Possible patterns: [Half of pan, The Big X, The Big Plus, The Four Corners, The Break]
     *
     * @returns string
     */
    selectFirePattern() {
        let rand = Math.floor(Math.random() * 5) + 1;

        switch (rand) {
            case 1:
                if(this.lastFirePattern === "The L"){
                    return this.selectFirePattern();
                }
                    return "The L";
                break;
            case 2:
                if(this.lastFirePattern === "The Big X"){
                    return this.selectFirePattern();
                }
                    return "The Big X";
                break;
            case 3:
                if(this.lastFirePattern === "The Line"){
                    return this.selectFirePattern();
                }
                    return "The Line";
                break;
            case 4:
                if(this.lastFirePattern === "Diagnal Left"){
                    return this.selectFirePattern();
                }
                    return "Diagnal Left";
                break;
            case 5:
                if(this.lastFirePattern === "Diagnal Right"){
                    return this.selectFirePattern();
                }
                    return "Diagnal Right";
                break;
        }
    }

    /**
     * In this function, you simply need to randomly select a direction and then return it.
     * Possible directions: [Up, Down, Left and Right]
     *
     * @returns string
     */
    selectDirection () {
        let rand = Math.floor(Math.random() * 4) + 1;

        switch (rand) {
            case 1:
                    return "Up";
                break;
            case 2:
                    return "Down";
                break;
            case 3:
                    return "Left";
                break;
            case 4:
                    return "Right";
                break;
        }
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

    switch (pattern) {
        case "Half of Pan":
                switch (direction) {
                case "Up":
                    return  [
                              this.tiles[0],
                              this.tiles[1],
                              this.tiles[2],
                              this.tiles[3],
                              this.tiles[4],
                              this.tiles[5],
                              this.tiles[6],
                              this.tiles[7],
                              this.tiles[8],
                              this.tiles[9]
                          ];
                    break;
                case "Down":
                    return  [
                              this.tiles[15],
                              this.tiles[16],
                              this.tiles[17],
                              this.tiles[18],
                              this.tiles[19],
                              this.tiles[20],
                              this.tiles[21],
                              this.tiles[22],
                              this.tiles[23],
                              this.tiles[24]
                          ];
                    break;
                case "Left":
                    return  [
                              this.tiles[0],
                              this.tiles[1],
                              this.tiles[5],
                              this.tiles[6],
                              this.tiles[10],
                              this.tiles[11],
                              this.tiles[15],
                              this.tiles[16],
                              this.tiles[20],
                              this.tiles[21]
                          ];
                    break;
                case "Right":
                return  [
                          this.tiles[3],
                          this.tiles[4],
                          this.tiles[8],
                          this.tiles[9],
                          this.tiles[13],
                          this.tiles[14],
                          this.tiles[18],
                          this.tiles[19],
                          this.tiles[23],
                          this.tiles[24]
                      ];
                    break;
                default:

            }
            break;
        case "The Big X":
            return  [
                      this.tiles[4],
                      this.tiles[8],
                      this.tiles[12],
                      this.tiles[16],
                      this.tiles[20],
                      this.tiles[0],
                      this.tiles[6],
                      this.tiles[12],
                      this.tiles[18],
                      this.tiles[24]
                  ];
            break;
        case "The Big Plus":
            return  [
                      this.tiles[2],
                      this.tiles[7],
                      this.tiles[12],
                      this.tiles[17],
                      this.tiles[22],
                      this.tiles[10],
                      this.tiles[11],
                      this.tiles[12],
                      this.tiles[13],
                      this.tiles[14]
                  ];
            break;
        case "The Four Corners":
            return  [
                      this.tiles[0],
                      this.tiles[1],
                      this.tiles[3],
                      this.tiles[4],
                      this.tiles[5],
                      this.tiles[6],
                      this.tiles[8],
                      this.tiles[9],
                      this.tiles[15],
                      this.tiles[16],
                      this.tiles[18],
                      this.tiles[19],
                      this.tiles[20],
                      this.tiles[21],
                      this.tiles[23],
                      this.tiles[24]
                  ];
            break;
        case "The Break":
                return [ this.tiles[12]];
            break;

    }

    }

    /**
     * In this function, you need to find all of the tiles affected by the pattern that need to be turned on.
     *
     * @param pattern
     * @param direction
     *
     * @returns array
     */
    getFirePatternTiles (pattern,direction) {

        switch (pattern) {
            case "The L":
                    switch (direction) {
                    case "Up":
                        return  [
                                  this.tiles[0],
                                  this.tiles[1],
                                  this.tiles[2],
                                  this.tiles[3],
                                  this.tiles[4],
                                  this.tiles[5],
                                  this.tiles[6],
                                  this.tiles[7],
                                  this.tiles[8],
                                  this.tiles[9]
                              ];
                        break;
                    case "Down":
                        return  [
                                  this.tiles[15],
                                  this.tiles[16],
                                  this.tiles[17],
                                  this.tiles[18],
                                  this.tiles[19],
                                  this.tiles[20],
                                  this.tiles[21],
                                  this.tiles[22],
                                  this.tiles[23],
                                  this.tiles[24]
                              ];
                        break;
                    case "Left":
                        return  [
                                  this.tiles[0],
                                  this.tiles[1],
                                  this.tiles[5],
                                  this.tiles[6],
                                  this.tiles[10],
                                  this.tiles[11],
                                  this.tiles[15],
                                  this.tiles[16],
                                  this.tiles[20],
                                  this.tiles[21]
                              ];
                        break;
                    case "Right":
                    return  [
                              this.tiles[3],
                              this.tiles[4],
                              this.tiles[8],
                              this.tiles[9],
                              this.tiles[13],
                              this.tiles[14],
                              this.tiles[18],
                              this.tiles[19],
                              this.tiles[23],
                              this.tiles[24]
                          ];
                        break;
                    default:

                }
                break;
            case "The Big X":
                return  [
                          this.tiles[4],
                          this.tiles[8],
                          this.tiles[12],
                          this.tiles[16],
                          this.tiles[20],
                          this.tiles[0],
                          this.tiles[6],
                          this.tiles[12],
                          this.tiles[18],
                          this.tiles[24]
                      ];
                break;
            case "The Line":
                return  [
                          this.tiles[2],
                          this.tiles[7],
                          this.tiles[12],
                          this.tiles[17],
                          this.tiles[22],
                          this.tiles[10],
                          this.tiles[11],
                          this.tiles[12],
                          this.tiles[13],
                          this.tiles[14]
                      ];
                break;
            case "Diagnal Left":
                return  [
                          this.tiles[0],
                          this.tiles[1],
                          this.tiles[3],
                          this.tiles[4],
                          this.tiles[5],
                          this.tiles[6],
                          this.tiles[8],
                          this.tiles[9],
                          this.tiles[15],
                          this.tiles[16],
                          this.tiles[18],
                          this.tiles[19],
                          this.tiles[20],
                          this.tiles[21],
                          this.tiles[23],
                          this.tiles[24]
                      ];
                break;
            case "Diagnal Right":
                    return [ this.tiles[12]];
                break;

        }

    }

    rotateHeatedTiles () {
        // Turn off all heated tiles.
        this.turnTilesOff();

        // Randomly select a new pattern.
        let pattern = this.selectPattern();
        let patternFire = this.selectFirePattern();
        // Randomly select a direction.
        let direction  = this.selectDirection();
        let directionFire  = this.selectDirection();
        // Get new pattern tiles.
        let heatedTiles = this.getPatternTiles(pattern, direction);
        let fireTiles   = this.getFirePatternTiles(patternFire, directionFire);

        // Record pattern
        this.lastPattern = pattern;
        this.lastFirePattern = patternFire;
        // Turn the tiles on.
        this.turnTilesOn(heatedTiles);
        this.turnFireTilesOn(heatedTiles);
    }
}
