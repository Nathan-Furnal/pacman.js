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
    this.__maze = new Maze(rawMaze);
    this.__pacman = new Pacman(this.maze.pacmanRespawn, Direction.WEST);
    this.__blinky = new Ghost(
      this.maze.ghostRespawn,
      Direction.NORTH,
      "blinky"
    );
    this.__pinky = new Ghost(this.maze.ghostRespawn, Direction.EAST, "pinky");
    this.__inky = new Ghost(this.maze.ghostRespawn, Direction.WEST, "inky");
    this.__clyde = new Ghost(this.maze.ghostRespawn, Direction.SOUTH, "clyde");
    this.__ghosts = [this.blinky, this.pinky, this.inky, this.clyde];
  }

  /**
   * Gets the maze of the game.
   *
   * @returns {Maze} the maze of the game
   */
  get maze() {
    return this.__maze;
  }

  /**
   * Gets the Pacman of the game.
   *
   * @returns {Pacman} the Pacman
   */
  get pacman() {
    return this.__pacman;
  }

  /**
   * Moves the sprites of the game.
   */
  moveSprites() {
    this.__movePacman();
    this.__moveGhosts();
  }

  /**
   * Moves the Pacman following the rules of the game.
   */
  __movePacman() {
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
  __moveGhosts() {
    for (let ghost of this.ghosts) {
      if (this.maze.canWalkOn(ghost.position.nextPosition(ghost.direction))) {
        ghost.move();
      } else {
        ghost.notifyIsBlocked();
        ghost.changeDirection();
      }
      if (ghost.canEat(this.pacman)) {
        console.log("Pacman has been eaten!");
      }
    }
  }

  /**
   * Gets the ghost called "Blinky"
   *
   * @returns {Ghost} Blinky
   */
  get blinky() {
    return this.__blinky;
  }

  /**
   * Gets the ghost called "Pinky"
   *
   * @returns {Ghost} Pinky
   */
  get pinky() {
    return this.__pinky;
  }

  /**
   * Gets the ghost called "Inky"
   *
   * @returns {Ghost} Inky
   */
  get inky() {
    return this.__inky;
  }

  /**
   * Gets the ghost called "Clyde"
   *
   * @returns {Ghost} Clyde
   */
  get clyde() {
    return this.__clyde;
  }

  /**
   * Gets the ghosts of the game.
   *
   * @returns {Ghost[]} the array of ghosts
   */
  get ghosts() {
    return this.__ghosts;
  }
}
