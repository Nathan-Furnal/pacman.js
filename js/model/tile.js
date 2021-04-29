/**
 * A tile is a fixed Pacman maze component like a wall or a dot.
 */
class Tile {
  /**
   * Constructs a tile which only requires an id to be created.
   *
   * @param {string} id a unique identifier to identify the tile
   */
  constructor(id) {
    this.__id = id;
  }
  /**
   * Gets the id of the Tile.
   *
   * @returns {string}
   */
  get id() {
    return this.__id;
  }
}
