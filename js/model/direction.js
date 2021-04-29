/**
 * Provides a direction for movements on a 2D plane.
 */
class Direction {
  /**
   * Constructs a direction object with deltas on the row and column axes.
   *
   * @param {number} deltaColumn - the delta on the horizontal axis
   * @param {number} deltaRow - the delta on the vertical axis
   */
  constructor(deltaColumn, deltaRow) {
    this.__deltaColumn = deltaColumn;
    this.__deltaRow = deltaRow;
  }

  /**
   * Gets the column delta.
   *
   * @returns {number} the column delta
   */
  get deltaColumn() {
    return this.__deltaColumn;
  }

  /**
   * Gets the row delta.
   *
   * @returns {number} the row delta
   */
  get deltaRow() {
    return this.__deltaRow;
  }
}

/**
 * Constants for the directions
 */
Direction.NORTH = new Direction(0, -1);
Direction.SOUTH = new Direction(0, 1);
Direction.WEST = new Direction(-1, 0);
Direction.EAST = new Direction(1, 0);
