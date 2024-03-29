/**
 * A wall is a fixed tile composing the maze. A wall blocks either Pacman's or
 * ghosts movements.
 * @extends Tile
 */
class Wall extends Tile {
  /**
   * Constructs a wall given a unique identifier, by using the parent's
   * constructor.
   *
   * @param {string} id - a unique identifier to identify the wall
   */
  constructor(id) {
    super(id);
  }
}
