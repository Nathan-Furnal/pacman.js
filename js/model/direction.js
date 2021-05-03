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
    this._deltaColumn = deltaColumn;
    this._deltaRow = deltaRow;
  }

  /**
   * Gets the column delta.
   *
   * @returns {number} the column delta
   */
  get deltaColumn() {
    return this._deltaColumn;
  }

  /**
   * Gets the row delta.
   *
   * @returns {number} the row delta
   */
  get deltaRow() {
    return this._deltaRow;
  }
}
