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
  constructor(position, direction, isDrunk = false) {
    super(position, direction, PACMAN_ID);
    this._nbLives = PACMAN_NB_LIVES;
    this._isDrunk = isDrunk;
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

  get isDrunk() {
    return this._isDrunk;
  }

  /**
   * Makes the Pacman drunk for a period of time.
   *
   * @param {boolean} drunkenState - the drunk state of the Pacman
   * @see DRUNK_TIME
   */
  gettingDrunk() {
    this._isDrunk = true;
    this._drunkTime = setTimeout(() => {
      this._isDrunk = false;
    }, DRUNK_TIME);
  }

  /**
   * Overrides the default behavior when the Pacman is drunk and sets the
   * direction to a random one.
   *
   * @param {Direction} direction - a direction
   * @see directions
   */
  askToChangeDirection(direction) {
    if (this.isDrunk) {
      let randIndex = Math.floor(Math.random() * directions.length);
      let randDir = directions[randIndex];
      direction = randDir;
    }
    super.askToChangeDirection(direction);
  }
}
