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
  }
}
