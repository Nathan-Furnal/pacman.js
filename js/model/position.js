/**
 * A two dimensional position for the game components.
 */
class Position {
  /**
   * Constructs the 2D position given a row and column.
   *
   * @param {number} row - the row of the position
   * @param {number} column - the column of the position
   */
  constructor(row, column) {
    this.__row = row;
    this.__column = column;
  }

  /**
   * Gets the row of the position.
   *
   * @returns {number} the row value
   */
  get row() {
    return this.__row;
  }

  /**
   * Gets the column of the position.
   *
   * @returns {number} the column value
   */
  get column() {
    return this.__column;
  }

  /**
   * Moves towards the given direction.
   *
   * @param {Direction} dir - the direction to move towards
   * @returns {Position} the new position after moving in the given direction
   */
  nextPosition(dir) {
    return new Position(this.row + dir.deltaRow, this.column + dir.deltaColumn);
  }

  /**
   * Compares the current position with another, based on row and column values.
   *
   * @param {Position} other - the position to be compared to
   * @returns {boolean} true if the other position has the same row and column
   * values, false otherwise
   * @throws {Error} will throw an error if compared to an object that is not a
   * position
   */
  equals(other) {
    if (!(other instanceof Position)) {
      throw new Error("A position can only be compared to another position.");
    }
    return this.row === other.row && this.column === other.column;
  }
}
