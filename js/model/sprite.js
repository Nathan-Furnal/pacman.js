/**
 * Provides a sprite which is a moving game element. For example the Pacman or
 * the ghosts.
 * @extends Component
 */
class Sprite extends Component {
  /**
   * Constructs a sprite with a given position, direction and unique
   * identifier. It also sets a variable to track changes of direction and a
   * variable to update said direction.
   *
   * @param {Position} position - the initial position of the sprite
   * @param {Direction} direction - the direction towards which the sprite moves
   * @param {string} id - a unique identifier
   */
  constructor(position, direction, id) {
    super(id);
    this._position = position;
    this._initialPos = position;
    this._direction = direction;
    this._initialDir = direction;
    this._askedToChangeDirection = false;
    this._askedDirection;
    this._previousPosition = this.position;
    this._isDead = false;
  }

  /**
   * Gets the current position of the sprite.
   *
   * @returns {Position} the current position
   */
  get position() {
    return this._position;
  }

  /**
   * Gets the current direction towards which the sprite is heading.
   *
   * @returns {Direction} the current direction
   */
  get direction() {
    return this._direction;
  }

  /**
   * Gets the state of direction change request.
   *
   * @returns {boolean} true if a direction change has been requested and false
   * otherwise
   */
  get askedToChangeDirection() {
    return this._askedToChangeDirection;
  }

  /**
   * Gets the next direction to be headed to, if it exists. Note that since it
   * is not set at initilization, it can return an undefined value.
   *
   * @returns {Direction} the next direction
   */
  get askedDirection() {
    return this._askedDirection;
  }

  /**
   * Updates the position with the current direction, keeps track of the
   * previous position which is being left.
   */
  move() {
    this._previousPosition = this.position;
    this._position = this.position.nextPosition(this.direction);
  }

  /**
   * Changes the direction request state and sets the next direction. Note that
   * another method call is necessary to actually update the direction of the
   * sprite.
   *
   * @see Sprite.changeDirection
   * @param {Direction} direction - the next direction to be headed to
   */
  askToChangeDirection(direction) {
    this._askedToChangeDirection = true;
    this._askedDirection = direction;
  }

  /**
   * Updates the current direction to the requested direction.
   */
  changeDirection() {
    this._direction = this.askedDirection;
  }

  /**
   * Gets the previous position of the sprite.
   *
   * @returns {Position} the previous position of the sprite
   */
  get previousPosition() {
    return this._previousPosition;
  }
  /**
   * Does nothing at the Sprite level.
   */
  notifyIsBlocked() { }

  /**
   * Gets the death state of the sprite.
   *
   * @returns {boolean} true if the sprite is dead, false otherwise
   */
  get isDead() {
    return this._isDead;
  }

  /**
   * Sets the death state to true.
   */
  hasBeenEaten() {
    this._isDead = true;
  }

  /**
   * Sets the death state to false.
   */
  respawn() {
    this._isDead = false;
    this._position = this._initialPos;
    this._direction = this._initialDir;
  }
}
