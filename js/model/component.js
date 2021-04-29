/**
 * Provides a component, the building block of the game.
 */
class Component {
  /**
   * Constructs a component which only requires an id to be created.
   *
   * @param {string} id - a unique identifier to identify the component
   */
  constructor(id) {
    this.__id = id;
  }
  /**
   * Gets the id of the component
   *
   * @returns {string} the identifier
   */
  get id() {
    return this.__id;
  }
}
