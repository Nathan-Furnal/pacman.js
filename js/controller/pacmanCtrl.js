/**
 * Controls the Pacman.
 */
class PacmanCtrl {
  /**
   * Constructs the controller to control the Pacman proper.
   *
   * @param {Pacman} pacman - the Pacman object from the model
   */
  constructor(pacman) {
    this.__pacman = pacman;
  }

  /**
   * Makes a direction change request.
   *
   * @param {Direction} direction - the next direction to head to
   */
  askToChangeDirection(direction) {
    this.__pacman.askToChangeDirection(direction);
  }
}
