/**
 * A dot is a fixed tile composing the maze, it will either represent a gum or
 * an energizer (a super gum).
 */
class Dot extends Tile {
  /**
   * Constructs a dot, the id uses the parent's constructor and the energizer
   * state is set to false as a default value.
   *
   * @param {string} id a unique identifier to identify the dot
   * @param {boolean} isEnergizer a boolean variable stating energizer state
   */
  constructor(id, isEnergizer = false) {
    super(id);
    this.__isEnergizer = isEnergizer;
  }
  /**
   * Gets the energizer state of the dot.
   */
  get isEnergizer() {
    return this.__isEnergizer;
  }
}
