/**
 * Provides a view for the Pacman object, based on a controller. It allows the
 * user to change the direction based on the player's input.
 */
class PacmanView {
  /**
   * Constructs the view based on the controller. It allows calls a `keywdown`
   * jQuery function to allow key presses to update the direction of the Pacman.
   *
   * @param {PacmanCtrl} pacmanCtrl - the Pacman controller
   */
  constructor(pacmanCtrl) {
    this.__pacmanCtrl = pacmanCtrl;
    // arrow functions must be used as regular functions change what the keyword
    // `this` refers to ; as arrow functions do not have prototypes yet explicit
    // functions do.
    $("body").on("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.__pacmanCtrl.askToChangeDirection(Direction.NORTH);
          break;
        case "ArrowDown":
          this.__pacmanCtrl.askToChangeDirection(Direction.SOUTH);
          break;
        case "ArrowLeft":
          this.__pacmanCtrl.askToChangeDirection(Direction.WEST);
          break;
        case "ArrowRight":
          this.__pacmanCtrl.askToChangeDirection(Direction.EAST);
          break;
      }
    });
  }

  /**
   * @returns {PacmanCtrl}
   */
  get controller() {
    return this.__pacmanCtrl;
  }
}
