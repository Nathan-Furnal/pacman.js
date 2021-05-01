/**
 * A ghost, Pacman's worse enemy, which is also built from a sprite.
 * @extends Sprite
 */
class Ghost extends Sprite {
  constructor(position, direction, id) {
    super(position, direction, id);
    this._timer = setInterval(() => {
      this._choiceNewDirection();
    }, GHOST_INTERVAL);
  }

  /**
   * Picks a direction at random and asks to change direction.
   *
   * @see directions
   */
  _choiceNewDirection() {
    // random index between 0 and 3 to select among the 4 possible directions.
    let randIndex = Math.floor(Math.random() * directions.length);
    let randDirection = directions[randIndex];
    this.askToChangeDirection(randDirection);
  }

  /**
   * Checks if the ghost can eat the Pacman. Either when they cross each other
   * or when they're at the same position.
   *
   * @param {Pacman} pacman - the Pacman
   * @returns {boolean} true if the Pacman can be eaten and false otherwise
   */
  canEat(pacman) {
    return (
      this.position.equals(pacman.position) ||
      this.previousPosition.equals(pacman.previousPosition)
    );
  }

  /**
   * Signifies that the ghost will change directions when blocked.
   */
  notifyIsBlocked() {
    this._choiceNewDirection();
  }
}
