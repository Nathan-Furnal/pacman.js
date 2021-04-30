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
    this.__position = position;
    this.__direction = direction;
    this.__askedToChangeDirection = false;
    this.__askedDirection;
  }

  /**
   * Gets the current position of the sprite.
   *
   * @returns {Position} the current position
   */
  get position() {
    return this.__position;
  }

  /**
   * Gets the current direction towards which the sprite is heading.
   *
   * @returns {Direction} the current direction
   */
  get direction() {
    return this.__direction;
  }

  /**
   * Gets the state of direction change request.
   *
   * @returns {boolean} true if a direction change has been requested and false
   * otherwise
   */
  get askedTochangeDirection() {
    return this.__askedToChangeDirection;
  }

  /**
   * Gets the next direction to be headed to, if it exists. Note that since it
   * is not set at initilization, it can return an undefined value.
   *
   * @returns {Direction} the next direction
   */
  get askedDirection() {
    return this.__askedDirection;
  }

  /**
   * Updates the position with the current direction.
   */
  move() {
    this.__position = this.position.nextPosition(this.direction);
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
    this.__askedToChangeDirection = true;
    this.__askedDirection = direction;
  }

  /**
   * Updates the current direction to the requested direction.
   */
  changeDirection() {
    this.__direction = this.askedDirection;
  }
}
