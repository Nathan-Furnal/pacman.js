/**
 * Provides of a facade for the game which help interactions between the model
 * and the view.
 */
class Game {
  /**
   * Constructs the game from a raw maze file. It also instantiates a Pacman.
   *
   * @param {number[][]} rawMaze - the 2d array on which the maze object is
   * based
   */
  constructor(rawMaze) {
    this._maze = new Maze(rawMaze);
    this._pacman = new Pacman(this.maze.pacmanRespawn, Direction.WEST);
    this._blinky = new Ghost(this.maze.ghostRespawn, Direction.NORTH, "blinky");
    this._pinky = new Ghost(this.maze.ghostRespawn, Direction.EAST, "pinky");
    this._inky = new Ghost(this.maze.ghostRespawn, Direction.WEST, "inky");
    this._clyde = new Ghost(this.maze.ghostRespawn, Direction.SOUTH, "clyde");
    this._ghosts = [this.blinky, this.pinky, this.inky, this.clyde];
    this._sprites = [
      this.pacman,
      this.blinky,
      this.pinky,
      this.inky,
      this.clyde,
    ];
  }

  /**
   * Gets the maze of the game.
   *
   * @returns {Maze} the maze of the game
   */
  get maze() {
    return this._maze;
  }

  /**
   * Gets the Pacman of the game.
   *
   * @returns {Pacman} the Pacman
   */
  get pacman() {
    return this._pacman;
  }

  /**
   * Moves the sprites of the game.
   */
  moveSprites() {
    this._movePacman();
    this._moveGhosts();
  }

  /**
   * Moves the Pacman following the rules of the game.
   */
  _movePacman() {
    if (
      this.pacman.askedToChangeDirection &&
      this.maze.canWalkOn(
        this.pacman.position.nextPosition(this.pacman.askedDirection)
      )
    ) {
      this.pacman.changeDirection();
      this.pacman.move();
    } else if (
      this.maze.canWalkOn(
        this.pacman.position.nextPosition(this.pacman.direction)
      )
    ) {
      this.pacman.move();
    }
  }

  /**
   * Moves each ghost of the game and eat the Pacman when he's too close.
   */
  _moveGhosts() {
    for (let ghost of this.ghosts) {
      if (this.maze.canWalkOn(ghost.position.nextPosition(ghost.direction))) {
        ghost.move();
      } else {
        ghost.notifyIsBlocked();
        ghost.changeDirection();
      }
      if (ghost.canEat(this.pacman)) {
        this.pacman.hasBeenEaten();
      }
    }
  }

  /**
   * Gets the ghost called "Blinky"
   *
   * @returns {Ghost} Blinky
   */
  get blinky() {
    return this._blinky;
  }

  /**
   * Gets the ghost called "Pinky"
   *
   * @returns {Ghost} Pinky
   */
  get pinky() {
    return this._pinky;
  }

  /**
   * Gets the ghost called "Inky"
   *
   * @returns {Ghost} Inky
   */
  get inky() {
    return this._inky;
  }

  /**
   * Gets the ghost called "Clyde"
   *
   * @returns {Ghost} Clyde
   */
  get clyde() {
    return this._clyde;
  }

  /**
   * Gets the ghosts of the game.
   *
   * @returns {Ghost[]} the array of ghosts
   */
  get ghosts() {
    return this._ghosts;
  }

  /**
   * Gets all the sprites of the game.
   *
   * @returns {Sprite[]} the array of sprites
   */
  get sprites() {
    return this._sprites;
  }

  /**
   * Checks if the game is over which is the case when the Pacman has no more
   * lives left.
   *
   * @returns {boolean} true if the game is over and false otherwise
   */
  isGameOver() {
    return this.pacman.nbLives === 0;
  }
  /**
   * Checks if the Pacman has been eaten.
   *
   * @returns {boolean} true if the Pacman has been eaten.
   */
  pacmanHasBeenEaten() {
    return this.pacman.isDead;
  }

  /**
   * Puts all the sprites back in their original place and directions.
   */
  respawn() {
    for (let sprite of this.sprites) {
      sprite.respawn();
    }
  }
}
