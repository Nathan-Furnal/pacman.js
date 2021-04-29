/**
 * Provides of a facade for the game which help interactions between the model
 * and the view.
 */
class Game {
  /**
   * Constructs the game from a raw maze file.
   *
   * @param {number[][]} rawMaze - the 2d array on which the maze object is
   * based
   */
  constructor(rawMaze) {
    this.__maze = new Maze(rawMaze);
  }

  /**
   * Gets the maze of the game.
   *
   * @returns {Maze} the maze of the game
   */
  get maze() {
    return this.__maze;
  }
}
