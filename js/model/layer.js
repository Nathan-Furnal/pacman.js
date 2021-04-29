/**
 * Provides a Layer class containing an array of tiles, to build a level.
 */
class Layer {
  /**
   * Constructs the layer with a given number of rows and columns, the layer is
   * filled with empty values before it holds any tiles.
   *
   * @param {number} nbRows - the number of rows
   * @param {number} nbColumns - the number of columns
   */
  constructor(nbRows, nbColumns) {
    this.__nbRows = nbRows;
    this.__nbColumns = nbColumns;
    this.__layer = Array(nbRows)
      .fill()
      .map(() => Array(nbColumns));
  }

  /**
   * Checks if the given position is within the bounds of the layer.
   *
   * @param {Position} pos - the position to check against
   * @returns {boolean} true if the position is within the bounds and false otherwise
   */
  contains(pos) {
    return (
      pos.row >= 0 &&
      pos.column >= 0 &&
      pos.row < this.__nbRows &&
      pos.column < this.__nbColumns
    );
  }

  /**
   * Sets the tile at a given position on the layer.
   *
   * @param {Position} pos - the position at which to set the tile
   * @param {Tile} tile - the tile to set at the given position
   * @throws {Error} will throw an error if the position is not in the layer
   */
  setTile(pos, tile) {
    if (!this.contains(pos)) {
      throw new Error("This position is not on the layer!");
    }
    this.__layer[pos.row][pos.column] = tile;
  }
  /**
   * Gets the tile at the given position.
   *
   * @param {Position} pos - the position at which the get to the tile
   * @returns the tile at the given position
   * @throws {Error} will throw an error if the position is not in the layer
   */
  getTile(pos) {
    if (!this.contains(pos)) {
      throw new Error("This position is not on the layer!");
    }
    return this.__layer[pos.row][pos.column];
  }

  /**
   * Checks if the given position in the layer holds a tile or not.
   *
   * @param {Position} pos - the position to check for a tile
   * @returns {boolean} true if there's a tile at the given position and false otherwise
   * @throws {Error} will throw an error if the position is not in the layer
   */
  hasTile(pos) {
    if (!this.contains(pos)) {
      throw new Error("This position is not on the layer!");
    }
    return this.__layer[pos.row][pos.column] instanceof Tile;
  }
}
