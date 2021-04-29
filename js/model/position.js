/**
 * A two dimensional position for the game components.
 */
class Position {
  /**
   * Constructs the 2D position given a row and column.
   *
   * @param {number} row the row of the position
   * @param {number} column the column of the position
   */
  constructor(row, column) {
    this.__row = row;
    this.__column = column;
  }

  /**
   * Gets the row of the position.
   */
  get row() {
    return this.__row;
  }

  /**
   * Gets the column of the position.
   */
  get column() {
    return this.__column;
  }
}
