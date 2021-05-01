/**
 * The powerful, the pleasurable, the indestructible Pacman.
 * @extends Sprite
 */
class Pacman extends Sprite {
  /**
   * Constructs a Pacman.
   *
   * @param {Position} position - the position of the Pacman
   * @param {Direction} direction - the direction the Pacman is headed to
   */
  constructor(position, direction) {
    super(position, direction, PACMAN_ID);
    this._nbLives = PACMAN_NB_LIVES;
  }

  /**
   * Gets the number of lives of the Pacman.
   *
   * @returns {number} the number of lives
   */
  get nbLives() {
    return this._nbLives;
  }

  hasBeenEaten() {
    super.hasBeenEaten();
    this._nbLives--;
  }
}
