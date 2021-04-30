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
    this.__pacman = new Pacman(this.__maze.pacmanRespawn, Direction.WEST);
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

  moveSprites() {
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
}
