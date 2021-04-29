/**
 * Provides a direction for movements on a 2D plane.
 */
class Direction {
  /**
   * Constructs a direction object with deltas on the row and column axes.
   *
   * @param {number} deltaRow - the delta on the vertical axis
   * @param {number} deltaColumn - the delta on the horizontal axis
   */
  constructor(deltaRow, deltaColumn) {
    this.__deltaRow = deltaRow;
    this.__deltaColumn = deltaColumn;
  }

  /**
   * Gets the row delta.
   *
   * @returns {number} the row delta
   */
  get deltaRow() {
    return this.__deltaRow;
  }

  /**
   * Gets the column delta.
   *
   * @returns {number} the column delta
   */
  get deltaColumn() {
    return this.__deltaColumn;
  }
}

/**
 * Constants for the directions
 */
Direction.NORTH = new Direction(-1, 0);
Direction.SOUTH = new Direction(1, 0);
Direction.WEST = new Direction(0, -1);
Direction.EAST = new Direction(0, 1);
